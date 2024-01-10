import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, ImageBackground, SafeAreaView, StyleSheet, Image, Dimensions, Button } from 'react-native';
import Images from '../../config/im';
import { calculateFontSize } from '../../config/font';
import { CustomeButton, Inputcomponent, CenteredTextWithLines } from '../../Components';
const { width, height } = Dimensions.get('window');
import { LoginButton, AccessToken, Settings, LoginManager } from 'react-native-fbsdk-next';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../store/actions/authActions';
import qs from 'qs';
import axios from 'axios';
import Loader from '../../Components/Loader';
const LoginScreen = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isload, setload] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    GoogleSignin.configure();
    Settings.initializeSDK();
  })
  const GoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('user-info', userInfo);
      // setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const fbLogin = (resCallback) => {
    LoginManager.logOut()
    return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
      result => {

        console.log('fb ====>>', result)
        if (result.declinedPermissions && result.declinedPermissions.includes('email')) {
          resCallback({ message: "Email is required" })
        }
        if (result.isCancelled) {
          console.log('error')
        } else {

          const infoRequest = new GraphRequest(
            '/me?fileds=email,name,picture,friends',
            null,
            resCallback
          );
          new GraphRequestManager().addrequest(infoRequest).start()
        }
      },
      function (error) {
        console.log("login failed", error)
      }
    )
  }
  const handleLogin = async () => {
    const data = qs.stringify({ 'username': email, 'password': password });
    setload(true)
    const config = {
      method: 'post',
      url: 'https://jobbookbackend.azurewebsites.net/api/v1/jobbook/auth/login',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    try {
      const response = await axios.request(config);
      console.log('Login Success:', JSON.stringify(response.data));
      const success = response.data.success;
      const token = response.data.token;
      const type = response.data.user.role;
      console.log(token, type,success, "====>");
      setload(false)
      if (success) {
        dispatch(setUserData(token, type))

      }
      // Here, you can dispatch the user data to global state or store in local storage
      // Navigate to another screen if needed
    } catch (error) {
      console.log('Login Error:', error);
      setload(false)
      // Handle the error (e.g., show an error message)
    }
  };




  return (
    <>
      {isload ? <Loader /> : <SafeAreaView style={styles.container}>
        <View style={styles.logomaincontainer}>
          <View style={styles.logoContainer}>
            <Image resizeMode="cover" style={styles.logo} source={Images.logo} />
          </View>
          <Text style={styles.jobText} >Jobbooks</Text>
        </View>
        <View style={styles.loginContainer}>
          <Inputcomponent label={"Email Address"} placeholder={"Email"} onChange={(text) => setEmail(text)} value={email} />
          <Inputcomponent label={"Password"} placeholder={"Password"} onChange={(text) => setPassword(text)} value={password} />
          <Text onPress={() => { navigation.navigate("forgetpass") }} style={{ color: "#fff", alignSelf: "flex-end" }}>ForgetPassWord</Text>
        </View>
        <CustomeButton title={"Login"} nonbg={true} onPress={handleLogin} />
        <View style={styles.centertextcontainer}>
          <CenteredTextWithLines text="Or Login With" lineColor="white" textColor="#fff" />
        </View>
        <TouchableOpacity onPress={GoogleLogin} >
          <View style={styles.googolecontainer}>
            <View style={styles.googleimage}>
              <Image resizeMode="cover" style={{ width: "100%", height: "100%" }} source={Images.Google} />

            </View>
            <Text style={styles.btntxt}>Sign up with Google</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={fbLogin} >
          <View style={styles.googolecontainer}>
            <View style={styles.googleimage}>
              <Image resizeMode="cover" style={{ width: "100%", height: "100%" }} source={Images.Google} />

            </View>
            <Text style={styles.btntxt}>Sign up with Facebook</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.alreadymember} >Already a member ? <Text style={styles.login}>Login</Text></Text>
      </SafeAreaView>}
    </>

  )
}

export default LoginScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009A8C",
    padding: 10,
  },
  logoContainer: {
    width: width * 0.3,
    height: height * 0.13,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  jobText: {
    fontSize: calculateFontSize(35),
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: "Poppins",

  },
  logomaincontainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: height * 0.024,
  },
  loginContainer: {
    alignItems: "center",
    marginVertical: height * 0.01,
    // paddingHorizontal:width*0.09,
  },
  centertextcontainer: {
    paddingHorizontal: width * 0.06,
    paddingVertical: height * 0.03,
  },
  googolecontainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    // borderWidth:1,
    // borderColor:"white",
    backgroundColor: "#fff",
    paddingHorizontal: width * 0.2,
    paddingVertical: height * 0.01,
    borderRadius: 100,
    marginVertical: height * 0.01,
  },
  googleimage: {
    width: width * 0.08,
    height: height * 0.04,

  },
  alreadymember: {
    fontSize: calculateFontSize(15),
    color: '#fff',
    fontWeight: '200',
    fontFamily: 'Poppins',
    alignSelf: "center"
  },
  login: {
    fontSize: calculateFontSize(15),
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: "Poppins",
    alignSelf: "center"
  },

  btntxt: {

    fontSize: calculateFontSize(14),
    fontWeight: "600",
    marginHorizontal: width * 0.03,
    color: "#000"
  }
})