import { StyleSheet,View, TouchableOpacity} from 'react-native'
import React from 'react'

export default function about_t({navigation}) {
  const Clickme=()=>{
    alert("welcome to first screen")
    navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={Clickme} style={{height:50,width:150,justifyContent:'center',backgroundColor:'red'}}>Click Me
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'lightgrey',
    justifyContent:'center'
  }
})