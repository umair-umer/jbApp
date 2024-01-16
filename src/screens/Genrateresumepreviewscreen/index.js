import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  Modal,
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  ImageBackgroundBase,
  ScrollView,
} from 'react-native';
import Images from '../../config/im';
import {calculateFontSize} from '../../config/font';
const {width, height} = Dimensions.get('window');
import {CustomeButton, CustomeHeader} from '../../Components';

function Resumepreview({navigation}) {
  return (
    <ImageBackground
    style={styles.backgroundImage}
    source={Images.jsbg}
    resizeMode="cover">
    <View style={styles.line}></View>
    <SafeAreaView style={styles.container}>
      <CustomeHeader iconsource3={Images.setting} />
    
         <View style={styles.maincon}>
            
            <View style={styles.img}>
               <Image
               source={Images.Preview}
               style={{width:"100%",height:"100%"}}
               resizeMode='cover'
               />
            </View>
         </View>
         <CustomeButton title={'Download'} nonbg={true} onPress={()=>navigation.navigate('Feeds')}/>
      </SafeAreaView>
      </ImageBackground>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    backgroundImage: {
      width: '100%',
      height: '100%',
      justifyContent: 'space-between', // To create space between top and bottom items
    },
    bgImage: {
      width: width * 0.9,
      height: height * 0.257,
      // overflow:"hidden",
      alignSelf: 'center',
      top: 20,
      borderRadius: 20,
      // backgroundColor:"red"
    },
    line: {
      width: width,
      height: height * 0.001,
      backgroundColor: '#0BECD8',
      position: 'absolute',
      top: height * 0.123,
      opacity: 0.2,
    },
    jobsrch: {
      fontSize: calculateFontSize(29),
      color: '#ffff',
      fontWeight: 'bold',
      fontFamily: 'Poppins',
    },
    maincon:{

          alignItems:"center"
    },
    img:{

         width: width * 0.9,
         height: height * 0.6,
         backgroundColor: "#fff",
         marginVertical: height * 0.08
    }
})
export default Resumepreview
