import React,{useEffect, useState} from 'react';
import { TouchableOpacity, View, Text, ImageBackground, SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native';
import Images from '../../config/im';
import { calculateFontSize } from '../../config/font';
import { CustomeButton, Inputcomponent,CustomeforgetHeader,CustomModal } from '../../Components';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import axios from 'axios';import { baseprofileurl } from '../../config/utilities';
const { width, height } = Dimensions.get('window');
const CustomeHeader = ({iconsource1,iconsource2,iconsource3,title,onPress,onPressNotification,source}) => {
  const { token } = useSelector((state) => state.auth); // Get the token from Redux store
   
    const navigation=useNavigation();
    useEffect(() => {
        // Make an Axios GET request to your API endpoint with the token
        axios
          .get('https://jobbookbackend.azurewebsites.net/api/v1/jobbook/auth/profile', {
            headers: {
              "Authorization": `Bearer ${token}`,
            },
          })
          .then((response) => {
            console.log(response.data.data, "====>getprofile")
            // Handle the successful response and update userData state
            // const { name, email ,picture} = response.data.data; // Update this with your actual response structure
            const name = response.data.data[0].name;
            const email = response.data.data[0].email;
            const picture = response.data.data[0].picture;
            setUserData({ name, email, picture });
            console.log(userData, "===>userdata");
          })
          .catch((error) => {
            // Handle any errors here
            console.error('Error fetching user data:', error);
          });
      }, [token]);
      const [userData, setUserData] = useState({
        name: '',
        email: '',
        picture: "",
    
      });
  return (
    <View style={styles.headmaincontainer}>
    <View style={styles.headersubcontainer}>
    <TouchableOpacity style={styles.profileconainter} onPress={()=>navigation.openDrawer()}>
         <Image resizeMode='contain' style={{width:"100%",height:"100%"}}
           source={{ uri:`${baseprofileurl}${userData.picture}` }}
          />
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