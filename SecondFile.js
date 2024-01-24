import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Image,
  Platform,
  ActivityIndicator
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as tf from "@tensorflow/tfjs";
import {
  fetch,
  bundleResourceIO,
  decodeJpeg
} from "@tensorflow/tfjs-react-native";
import * as FileSystem from "expo-file-system";

const labelFile = [
  "Corn_Gray_Leaf",
  "Corn_Healthy",
  "Potato_Healthy",
  "Potato_Late_Blight",
  "Invalid",
  "Rice_Brown_Spot",
  "Rice_Healthy",
  "Wheat_Brown_Rust",
  "Wheat_Healthy"
];

const SecondFile = () => {
  const [imageUri, setImageUri] = useState(null);
  const [tfliteInitialized, setTfliteInitialized] = useState(false);
  const [resultLabel, setResultLabel] = useState("");
  const modelJson = require("./assets/model/crop_disease_model.json");
  const modelWeight = require("./assets/model/group1-shard.bin");
  // var model_crop=null;
  useEffect(() => {
    const initTflite = async () => {
      await tf.setBackend("cpu");
      await tf.ready();
      setTfliteInitialized(true);
      console.log("Initializing Tflite");
    };
    initTflite();
  }, []);

  const pickImage = async () => {
    if (Platform.OS !== "web") {
      const {
        status
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work.");
        return;
      }
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1
    });
    setResultLabel("");

    if (!result.canceled) {
      // Use the updated key "canceled" instead of "cancelled"
      setImageUri(result.assets[0].uri);
      console.log("result", result.assets[0].uri);
      const model_crop = await tf.loadLayersModel(
        bundleResourceIO(modelJson, modelWeight)
      );

      if (tfliteInitialized) {
        preprocessImage(result.assets[0].uri).then(async preprocessedImage => {
          const predictions = model_crop.predict(preprocessedImage);
          console.log("preprocessedImage", preprocessedImage);
          console.log("predictions", predictions);
          const predictionData = await predictions.data(); // If you need the data as a JS array
          console.log("predictionData", predictionData);
          let max = argmax(predictionData);
          console.log("max", max);
          setResultLabel(labelFile[max]);
        });
      }
    }
  };

  const preprocessImage = async imageUri => {
    // Fetch the image from the filesystem
    const imgB64 = await FileSystem.readAsStringAsync(imageUri, {
      encoding: FileSystem.EncodingType.Base64,
      position: 0,
      length: 10000000
    });
    const imgBuffer = tf.util.encodeString(imgB64, "base64").buffer;
    const raw = new Uint8Array(imgBuffer);
    const imageTensor = imageToTensor(raw);

    // Resize the image to match your model's expected input size (e.g., 224x224)
    const resizedImageTensor = tf.image.resizeBilinear(imageTensor, [224, 224]);

    // Normalize the image (if required)
    const offset = tf.scalar(255.0);
    const normalizedImageTensor = resizedImageTensor.div(offset);

    // Add the batch dimension (assuming your model expects it)
    const batchedImageTensor = normalizedImageTensor.expandDims(0);
    console.log("batchedImageTensor", batchedImageTensor);

    return batchedImageTensor;
  };

  function argmax(arr) {
    if (arr.length === 0) {
      return -1; // Return -1 for an empty array
    }

    let maxIndex = 0;
    let maxValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxValue) {
        maxValue = arr[i];
        maxIndex = i;
      }
    }

    return maxIndex;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Upload an Image</Text>
      <Button title="Pick an image from the camera roll" onPress={pickImage} />
      {imageUri &&
        <Image
          source={{ uri: imageUri }}
          style={{ width: 200, height: 200 }}
        />}
      {
        <Text>
          Predicted Label: {resultLabel}
        </Text>
      }
    </View>
  );
};

export default SecondFile;
