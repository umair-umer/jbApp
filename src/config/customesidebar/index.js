import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import Images from '../../config/im';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import { calculateFontSize } from '../../config/font';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { base, baseprofileurl } from '../utilities';
import { logout } from '../../store/actions/authActions';
import Loader from '../../Components/Loader';
const { width, height } = Dimensions.get('window');

const CusTomDrawer = ({ navigation }) => {
  const { token } = useSelector((state) => state.auth); // Get the token from Redux store
  const dispatch = useDispatch();
  const [load, setload] = useState();
  console.log(token, "reduxtoken");
  useEffect(() => {
    // Make an Axios GET request to your API endpoint with the token
    axios
      .get(`${base}/auth/profile`, {
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
  const handleLogout = () => {
    setload(true)
    axios.post(`${base}/auth/logout`, {}, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then((response) => {
        console.log('Logout successful:',response.data);
        navigation.navigate('loginscreen'); 
        dispatch(logout());
      
        setload(false)
      })
      .catch((error) => {
        console.error('Error during logout:', error.response);

      });
  };

  return (
    <>
      {load ?

        <Loader />


        :

        <View style={styles.container}>
          <View style={styles.procon}>
            <TouchableOpacity style={styles.image}
              onPress={() => navigation.navigate('userprofilescreen')}>

              <Image
                resizeMode="cover"
                style={{ width: '100%', height: '100%' }}
                source={{ uri:`${baseprofileurl}${userData.picture}` }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.closeDrawer();
              }}>
              <Entypo size={40} name="cross" color={'#fff'} />
            </TouchableOpacity>
          </View>

          <Text style={styles.sProfileText}>{userData.name}</Text>
          <Text style={styles.emailtext}>{userData.email}</Text>
          <View style={styles.viewiconsrout}>
            <TouchableOpacity
              style={styles.buttonroutes}
              onPress={() => navigation.navigate('userprofilescreen')}>
              <Feather color={'#fff'} size={20} name="edit" />
              <Text style={styles.editbutton}>Edit profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonroutes} onPress={() => navigation.navigate('notifyscreen')} >
              <Ionicons color={'#fff'} size={25} name="notifications" />
              <Text style={styles.editbutton}>notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonroutes}>
              <Ionicons color={'#fff'} size={25} name="document-text-outline" />
              <Text style={styles.editbutton}>Generate CV </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonroutes} onPress={()=>navigation.navigate("pending")}>
              <Ionicons color={'#fff'} size={25} name="bookmarks-outline" />
              <Text style={styles.editbutton}>saved</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonroutes}>
              <Ionicons color={'#fff'} size={25} name="settings-outline" />
              <Text style={styles.editbutton}>settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonroutes}>
              <Feather color={'#fff'} size={25} name="send" />
              <Text style={styles.editbutton}>share</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonroutes}>
              <MaterialIcons color={'#fff'} size={25} name="error-outline" />
              <Text style={styles.editbutton}>fAQ</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: height * 0.07 }}>
            <TouchableOpacity style={styles.logbutton} onPress={handleLogout} >
              <AntDesign color={'#fff'} size={20} name="logout" />
              <Text style={styles.editbutton}>Sign out</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
    </>
  );
};


export default CusTomDrawer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009A8C',
    padding: 20,
  },
  procon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: height * 0.03,
  },
  image: {
    borderWidth: 1,
    width: width * 0.33,
    height: height * 0.15,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    overflow: "hidden"
  },
  sProfileText: {
    fontSize: calculateFontSize(25),
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    textTransform: 'capitalize',
    lineHeight: height * 0.05,
  },
  emailtext: {
    fontSize: calculateFontSize(15),
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    textTransform: 'capitalize',
  },
  editbutton: {
    fontSize: calculateFontSize(20),
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Poppins',
    textTransform: 'capitalize',
    marginHorizontal: width * 0.03,
  },
  buttonroutes: { flexDirection: 'row', marginVertical: height * 0.01 },
  viewiconsrout: {
    marginVertical: height * 0.07,
  },
  logbutton: {
    borderWidth: 2,
    flexDirection: 'row',
    width: width * 0.4,
    justifyContent: 'space-evenly',
    borderColor: '#fff',
    padding: 10,
    borderRadius: 100,
    alignItems: 'center',
  },
});
