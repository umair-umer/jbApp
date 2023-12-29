import React from 'react';
import { View,ActivityIndicator, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");

const Loader = () => {
  return (
    <View style={{ flex: 1,backgroundColor: "white",opacity:0.5 }}>
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <ActivityIndicator color="#0B7D72" size={90} />
    </View>
  </View>
    
 
  );
};


export default Loader;