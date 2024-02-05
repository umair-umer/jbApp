import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('window');
import { calculateFontSize } from '../../config/font';
import Images from '../../config/im';

const Inputcomponent = ({ onPress,label, placeholder, onChange, iconInput,right ,icon,secureTextEntry,label1}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (

    <>

      {iconInput ? <View style={right?styles.iconconatinerRight:styles.iconconatiner}>
        
        
        {right ? (<TouchableOpacity onPress={onPress}>
          <View style={styles.smsicon}>
          <Image style={{ width: "100%", height: "100%" }} resizeMode='contain' source={icon} />

        </View>
        </TouchableOpacity>):(<View style={styles.smsicon}>
          <Image style={{ width: "100%", height: "100%" }} resizeMode='contain' source={icon} />

        </View>)}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={"#fff"}
          onChangeText={onChange}
          secureTextEntry={secureTextEntry}

        />
      </View> :
        <View style={styles.inputNoicon}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.label}>{label1}</Text>
          <TextInput
            style={styles.inputsty}
            placeholder={placeholder}
            placeholderTextColor={"#fff"}
            onChangeText={onChange}
           
          />
        </View>

      }

    </>



  );
};

export default Inputcomponent;
const styles = StyleSheet.create({

  inputNoicon: {
    width: width * 0.9,
    height: height * 0.07,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 100,
    justifyContent: "center",
    marginVertical: height * 0.02,
    paddingHorizontal:width*0.07,
    color:"#fff"

  },
  label: {
    fontSize: calculateFontSize(17),
    color: '#fff',
    fontFamily: 'Poppins',
    textTransform: 'capitalize',
    top: -(height * 0.02),
    marginHorizontal: width * 0.07,
    backgroundColor: "#009A8C",

    alignContent: "center",
    position: "absolute",



  },
  inputsty: {
    // borderWidth:1,
    // borderRadius:100,
    paddingHorizontal: width * 0.04,
    color:"#fff"
  },
  iconconatiner: {
    width: width * 0.9,
    height: height * 0.07,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 100,
    marginVertical: height * 0.02,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal:width*0.04,
},
smsicon: {
    width: width * 0.07,
    height: height * 0.04,
},
input: {
    paddingHorizontal: width * 0.03,
    width: width * 0.75,
    color:"#fff"
    
},
iconconatinerRight: {
    width: width * 0.9,
    height: height * 0.07,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 100,
    marginVertical: height * 0.02,
    flexDirection: "row-reverse",
    alignItems: "center",
    paddingHorizontal:width*0.04,
},


})