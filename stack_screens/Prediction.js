import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Platform,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
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
  "Invalid",
  "Potato_Healthy",
  "Potato_Late_Blight",
  "Rice_Brown_Spot",
  "Rice_Healthy",
  "Wheat_Brown_Rust",
  "Wheat_Healthy"
];

const Prediction = () => {
  const [imageUri, setImageUri] = useState(null);
  const [tfliteInitialized, setTfliteInitialized] = useState(false);
  const [resultLabel, setResultLabel] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [waitingMessage, setWaitingMessage] = useState("Waiting for prediction...");
  const modelJson = require("../assets/model/crop_disease_model.json");
  const modelWeight = require("../assets/model/group1-shard.bin");
  // var model_crop=null;
  useEffect(() => {
    const initTflite = async () => {
      await tf.setBackend("cpu");
      await tf.ready();
      setTfliteInitialized(true);
      console.log("Initializing Tflite");
    };
    initTflite();
    if (resultLabel !== '') {
      setIsLoading(false);
    }
  }, [resultLabel]);
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
    setWaitingMessage("Waiting for prediction...");

    if (!result.canceled) {
      // Use the updated key "canceled" instead of "cancelled"
      setImageUri(result.assets[0].uri);
      console.log("result", result.assets[0].uri);
      const model_crop = await tf.loadLayersModel(
        bundleResourceIO(modelJson, modelWeight)
      );

      if (tfliteInitialized) {
        setIsLoading(true); // Set loading to true when starting the prediction process
        preprocessImage(result.assets[0].uri).then(async preprocessedImage => {
          const predictions = model_crop.predict(preprocessedImage);
          console.log("preprocessedImage", preprocessedImage);
          console.log("predictions", predictions);
          const predictionData = await predictions.data(); // If you need the data as a JS array
          console.log("predictionData", predictionData);
          let max = argmax(predictionData);
          console.log("max", max);
          setResultLabel(labelFile[max]);
          setIsLoading(false);
          setWaitingMessage("");
        });
      }
    }
  };
  const imageToTensor = rawImageData => {
    // Use tf.decodeJpeg to decode the image data to a tensor
    const TO_UINT8ARRAY = true;
    const imageTensor = decodeJpeg(rawImageData);
    return imageTensor;
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
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "yellowgreen",
          height: responsiveHeight(10),
          width: responsiveWidth(100)
        }}
      >
        <Text style={styles.text1}>Disease Prediction</Text>
      </View>
      <View style={{ height: responsiveHeight(60), width: responsiveWidth(100) }}>
        <View style={styles.image}>
          {imageUri &&
            <Image
              source={{ uri: imageUri }}
              style={{
                height: responsiveHeight(35), width: responsiveWidth(80),
                alignSelf: 'center', margin: 10
              }}
            />}
        </View>

        {isLoading ? (
          <View>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={{ fontSize: responsiveFontSize(3), textAlign: 'center', fontWeight: 'bold' }}>{waitingMessage}</Text>
          </View>
        ) : (
          resultLabel && (
            <Text style={{ fontSize: responsiveFontSize(3), textAlign: 'center', fontWeight: 'bold' }}>
              Predicted Label: {resultLabel}
            </Text>
          )
        )}


        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Image
              style={{
                height: responsiveHeight(6),
                width: responsiveWidth(12),
                alignSelf: "center",
              }}
              source={require("../assets/image.png")}
            ></Image>
            <Text style={styles.text}>Upload Image</Text>
          </View>

        </TouchableOpacity>
      </View>
      <View
        style={{
          height: responsiveHeight(30),
          width: responsiveWidth(100),
          borderTopStartRadius: responsiveWidth(10),
          borderTopRightRadius: responsiveWidth(10),
          backgroundColor: "yellowgreen",
          justifyContent: "center",
        }}
      >
      </View>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    backgroundColor: "#f3fffa",
    justifyContent: "center",
  },
  text1: {
    textAlign: 'center',
    fontSize: responsiveFontSize(5),
    paddingTop: responsiveHeight(3),
    color: 'white'
  },
  text: {
    textAlign: "center",
    fontSize: responsiveFontSize(3)
  },
  button: {
    marginTop: responsiveHeight(4),
    alignSelf: 'center',
    height: responsiveHeight(6),
    width: responsiveWidth(60),
    borderBottomRightRadius: responsiveWidth(90),
    borderRightColor: "#26c485",
    borderRightWidth: responsiveWidth(5),
    borderBottomWidth: responsiveWidth(.5),
    borderBottomColor: "#26c485",
    backgroundColor: "white",
  },
  image: {
    height: responsiveHeight(35),
    width: responsiveWidth(90),
    backgroundColor: "#f3fffa",
    margin: responsiveHeight(3)

  }


})
export default Prediction;
