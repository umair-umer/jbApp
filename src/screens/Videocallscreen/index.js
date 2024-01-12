import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
const { width, height } = Dimensions.get("window");
import { calculateFontSize } from '../../config/font'
import Images from '../../config/im';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import {ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'

function Videocall({navigation}) {
   const randomUserID = String(Math.floor(Math.random() * 100000))
  return (
    <SafeAreaView style={styles.container}>
               <ZegoUIKitPrebuiltCall
        appID={1528797470}
        appSign={"95b46d9d610a707e31f4013b4f0cc9bab5b0652b24242ae616f334200d70393d"}
        userID={randomUserID} // userID can be something like a phone number or the user id on your own user system. 
        userName={"user_" + randomUserID}
        callID={"jobbook"} // callID can be any unique string. 

        config={{
            // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
            ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
            onOnlySelfInRoom: () => { navigation.navigate('userchatroomscreen') },
            onHangUp: () => { navigation.navigate('userchatroomscreen') },
        }}
      />
        {/* <ImageBackground
        source={Images.Videocaller}
        style={{width:"100%",height:"100%"}}
        resizeMode='cover'
        >

       <View style={styles.hdr}>
        <View>
            <Text style={styles.txt}>Catherine Lynch</Text>
            <Text style={styles.time}>02:35</Text>

        </View>
        <View style={styles.img}>
            <Image
            source={Images.Frontcaller}
            style={{width:"100%",height:"100%"}}
            resizeMode='center'
            />
        </View>
       </View>

      <View style={styles.btncon}>
         <TouchableOpacity style={styles.circle}>
            <MaterialIcons
            name='brightness-high'
            size={32}
            color={'#fff'}
            />
         </TouchableOpacity>
         <TouchableOpacity style={styles.circle}>
         <FontAwesome
            name='microphone-slash'
            size={32}
            color={'#fff'}
            />
         </TouchableOpacity>
         <TouchableOpacity style={styles.circle}>
         <Ionicons
            name='camera-reverse-outline'
            size={32}
            color={'#fff'}
            />
         </TouchableOpacity>
         <TouchableOpacity style={styles.circlered}>
         <Entypo
            name='cross'
            size={32}
            color={'#fff'}
            />
         </TouchableOpacity>
      </View>

        </ImageBackground> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#009A8C",
    },
    hdr:{

         flexDirection:"row",
         justifyContent:"space-between",
         paddingHorizontal:width*0.03,
         marginVertical:height*0.05
    },
    img:{

         width:width*0.25,
         height:height*0.12,
        //  backgroundColor:"#fff",
         justifyContent:"center",
         alignItems:"center"
    },
    txt:{

        fontSize:calculateFontSize(20),
        color:"#fff",
        fontWeight:"700"
    },
    time:{

         fontSize:calculateFontSize(16),
         color:"#fff",
    },
    btncon:{
         
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:width*0.05,
        backgroundColor:"#373737",
        opacity:0.5,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        height:height*0.3,
        marginVertical:height*0.48
    },
    circle:{

          width:width*0.19,
          height:height*0.09,
          borderRadius:100,
          backgroundColor:"#fff",
          justifyContent:"center",
          alignItems:"center"
    },
    circlered:{

        width:width*0.19,
        height:height*0.09,
        borderRadius:100,
        backgroundColor:"red",
        justifyContent:"center",
        alignItems:"center"
  }

})
export default Videocall