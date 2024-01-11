import React,{useState} from 'react';
import { TouchableOpacity, View, Text, ImageBackground, SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native';
import Images from '../../config/im';
import { calculateFontSize } from '../../config/font';
import { CustomeButton, Inputcomponent,CustomeforgetHeader,CustomModal } from '../../Components';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');

const CustomeHeader = ({iconsource1,iconsource2,iconsource3,title,onPress,onPressNotification,source}) => {
    const navigation=useNavigation();
  return (
    <View style={styles.headmaincontainer}>
    <View style={styles.headersubcontainer}>
    <TouchableOpacity style={styles.profileconainter} onPress={()=>navigation.openDrawer()}>
         <Image resizeMode='contain' style={{width:"100%",height:"100%"}} source={source}/>
     </TouchableOpacity>
     <Text style={styles.title}>{title}</Text>
    </View>
     <View>
         <View style={styles.headersubcontainer2}>
             <TouchableOpacity style={styles.icons}>
                 <Image resizeMode='contain' style={{width:"100%",height:"100%"}} source={iconsource1}/>
             </TouchableOpacity>
             <TouchableOpacity style={styles.icons} onPress={onPressNotification}>
                 <Image resizeMode='contain' style={{width:"100%",height:"100%"}} source={iconsource2}/>
             </TouchableOpacity>
             <TouchableOpacity style={styles.icons} onPress={onPress}>
                 <Image resizeMode='contain' style={{width:"100%",height:"100%"}} source={iconsource3}/>
             </TouchableOpacity>
         </View>
     </View>
 </View>
  )
}

export default CustomeHeader
const styles = StyleSheet.create({
  
    profileconainter:{
        borderWidth:1,
        width:width*0.13,
        height:height*0.06,
        borderRadius:100,
        padding:3,
        borderColor:"#1EC5B6",
        overflow:"hidden"
    },
    icons:{
        width:width*0.05,
        height:height*0.06,
        marginHorizontal:width*0.03,
    },
    headersubcontainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        paddingHorizontal:width*0.01,
    },
    headersubcontainer2:{
        flexDirection:"row",
        alignItems:"center",
       

    },
    headmaincontainer:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    title:{
        fontSize: calculateFontSize(20),
        textAlign: "center",
        fontWeight: "500",
        color: "#fff",
        textTransform:"capitalize",
        marginHorizontal:width*0.02,
    }

})