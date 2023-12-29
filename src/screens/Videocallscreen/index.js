import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
const { width, height } = Dimensions.get("window");
import { calculateFontSize } from '../../config/font'
import Images from '../../config/im';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
function Videocall() {
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground
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

        </ImageBackground>
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