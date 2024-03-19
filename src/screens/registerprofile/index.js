import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {
  CustomModal,
  CustomeButton,
  Inputcomponent,
  CustomErrorModal,
} from '../../Components';
import Images from '../../config/im';
import {calculateFontSize} from '../../config/font';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation, useRoute} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
import axios from 'axios';
import Loader from '../../Components/Loader';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {requestUserPermission} from '../../config/utilities/notification';
import {base} from '../../config/utilities';
const RegistertalentProfile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const profileType = route.params.profileType;
  console.log(profileType, '====>profiletype');
  const [fcmToken, setFcmToken] = useState('');

  // Function to request permission and fetch FCM token
  const fetchFcmToken = async () => {
    await requestUserPermission(); // Make sure this function is properly defined to request permissions

    try {
      const token = await AsyncStorage.getItem('fcmToken');
      if (token) {
        setFcmToken(token); // Save the FCM token in the component's state
        console.log('FCM Token:', token);
      } else {
        console.log('No FCM Token found');
        // You might want to call getFcmToken function here if no token is found
      }
    } catch (error) {
      console.error('Error fetching FCM Token:', error);
    }
  };
  useEffect(() => {
    fetchFcmToken();
  }, []);
  const [ISload, setload] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [Location, setLocation] = useState('');
  const [Website, setWebsite] = useState('');
  const [error, setErrro] = useState();

  const [UserType, setUserType] = useState('');
  const [Companyname, setCompanyName] = useState('');
  const [Phonenum, setphoneNum] = useState('');
  const [companywebsite, setCompanywebsite] = useState('');
  const [companylocation, setCompanyLocation] = useState('');
  const [companyemail, setCompanyEmail] = useState('');
  const [companyPassword, setComapnyPassword] = useState('');

  // console.log(username,Companyname,Phonenum,companyPassword,companyemail,companywebsite,companylocation)

  const [isModalVisiblesucess, setModalVisiblesucess] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [isModalVisibleerr, setModalVisiblerrr] = useState(false);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [companynameError, setCompanyNameError] = useState('');

  const handleChoosePhoto = () => {
    launchImageLibrary({noData: true}, response => {
      if (response.assets && response.assets.length > 0) {
        const asset = response.assets[0];
        setProfileImage({
          uri: asset.uri,
          name: response.assets.fileName || 'profile.jpg', // Fallback name if fileName is not available
          type: response.assets.type || 'image/jpeg', // Fallback type if not available
        });
      }
    });
    console.log(profileImage);
  };

  const register = async () => {
    // Reset errors
    setNameError('');
    setEmailError('');
    setPasswordError('');

    // Validate inputs
    let isValid = true;
    if (name == '') {
      setNameError('Name is required');
      isValid = false;
    }

    if (email == '') {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email');
      isValid = false;
    }

    if (password == '') {
      setPasswordError('Password is required');
      isValid = false;
    }

    
    if (isValid) {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('phone', mobile);
      formData.append('location', Location);
      formData.append('website', Website);
      formData.append('device_token', fcmToken);
      formData.append('role', profileType);

      if (profileImage) {
        formData.append('picture', {
          uri: profileImage.uri,
          name: 'profile.jpg',
          type: 'image/jpeg',
        });
      }

      try {
        setload(true);
        const response = await axios.post(
          `${base}/auth/signup`,
          formData,

          console.log(formData),
          console.log('====================================',response),
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        );
        console.log(response, '====>registration');
        const token = response.data.token;
        const type = response.data.user.role;

        // console.log(userId,'userid====>');
        if (response.status === 200) {
          setload(false);
          setModalVisible(true);
          dispatch({type: 'LOGIN_SUCCESS', payload: {token, type}});

        } else {
          console.log(
            'Registration failed with status code: ',
            response.status,
          );
        }
      } catch (error) {
         console.error('Registration error:', error);
  setload(false);
  // Check if the error has a response and a data property before trying to access error.response.data.error
  const errorMessage = error.response && error.response.data && error.response.data.error
    ? error.response.data.error
    : 'An unknown error occurred'; // Provide a default error message
  setErrro(errorMessage);
  setModalVisiblerrr(true);
      }
    }

    console.log(name, email, password, mobile, profileType, '====>');
  };

  const toggleModal = () => {
    setModalVisible(false);
    console.log(isModalVisible);
  };
  const closemodal = () => {
    setModalVisiblerrr(false);
    setload(false);
    console.log(isModalVisible);
  };
  const handleregistersucess = () => {
    // setUserType(UserType);

    // if (UserType === 'company') {
    navigation.navigate('companyhome');
    // } else {
    // Navigate to the "btab" screen for individual users
    navigation.navigate('home');
    // }

    setModalVisible(false);
  };

  return (
    <>
      {ISload ? (
        <Loader />
      ) : (
        <SafeAreaView style={styles.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.textContainer}>
                <Text style={styles.sProfileText}>register profile</Text>
                <Text style={styles.subTextProfile}>
                  enter your information below for registration
                </Text>
              </View>
              <View style={styles.profilecontainer}>
                <View style={styles.profil}>
                  {profileImage ? (
                    <Image
                      style={{width: '100%', height: '100%', borderRadius: 100}}
                      source={profileImage}
                      resizeMode="cover"
                    />
                  ) : (
                    <Image
                      style={{width: '100%', height: '100%', borderRadius: 100}}
                      source={Images.Profileplace}
                      resizeMode="cover"
                    />
                  )}
                </View>
                <TouchableOpacity
                  style={styles.editprofilebutton}
                  onPress={handleChoosePhoto}>
                  <FontAwesome5 name="edit" color="#fff" />
                </TouchableOpacity>
              </View>
              {profileType === 'Talent' ? (
                <View style={styles.registraiontalentform}>
                  <Inputcomponent
                    label="Name"
                    placeholder="Name"
                    onChange={text => setName(text)}
                    error={nameError}
                    value={name}
                  />
                  {nameError ? (
                    <Text style={styles.errorText}>{nameError}</Text>
                  ) : null}
                  <Inputcomponent
                    label="Email Address"
                    placeholder="Email Address"
                    onChange={text => setEmail(text)}
                    value={email}
                    error={emailError}
                  />
                  {emailError ? (
                    <Text style={styles.errorText}>{emailError}</Text>
                  ) : null}
                  <Inputcomponent
                    label="Password"
                    placeholder="Password"
                    error={passwordError}
                    onChange={text => setPassword(text)}
                    value={password}
                    secureTextEntry
                  />
                  {passwordError ? (
                    <Text style={styles.errorText}>{passwordError}</Text>
                  ) : null}
                  <Inputcomponent
                    label="Mobile Number"
                    placeholder="Mobile Number"
                    onChange={text => setMobile(text)}
                    value={mobile}
                  />
                  <Inputcomponent
                    label="Location"
                    placeholder="Location"
                    onChange={text => setLocation(text)}
                    value={Location}
                  />
                  <Inputcomponent
                    label="Website or Portfolio link"
                    placeholder="Website or Portfolio link"
                    onChange={text => setWebsite(text)}
                    value={Website}
                  />
                  <CustomeButton
                    onPress={register}
                    title="Register"
                    nonbg={true}
                  />
                </View>
              ) : (
                <View style={styles.registraiontalentform}>
                  <Inputcomponent
                    label="Company Name"
                    placeholder="Company Name"
                    onChange={text => setName(text)}
                    value={name}
                  />

                  <Inputcomponent
                    label="Email Address"
                    placeholder="Email Address "
                    onChange={text => setEmail(text)}
                    value={email}
                    error={emailError}
                  />
                  {emailError ? (
                    <Text style={styles.errorText}>{emailError}</Text>
                  ) : null}
                  <Inputcomponent
                    label="Password"
                    placeholder="Password"
                    onChange={text => setPassword(text)}
                    value={password}
                    error={passwordError}
                    secureTextEntry
                  />
                  {passwordError ? (
                    <Text style={styles.errorText}>{passwordError}</Text>
                  ) : null}
                  <Inputcomponent
                    label="Mobile Number"
                    placeholder="Mobile Number"
                    onChange={text => setMobile(text)}
                    value={mobile}
                  />
                  <Inputcomponent
                    label="Company Website"
                    placeholder="Company Website"
                    onChange={text => setCompanywebsite(text)}
                    value={companywebsite}
                  />
                  <Inputcomponent
                    label="Location"
                    placeholder="Location"
                    onChange={text => setCompanyLocation(text)}
                    value={companylocation}
                  />
                  <CustomeButton
                    onPress={register}
                    title="Register"
                    nonbg={true}
                  />
                </View>
              )}
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      )}
      <CustomErrorModal
        onPressclose={closemodal}
        error={error}
        isModalVisible={isModalVisibleerr}
      />

      {/* <CustomModal
        status="profile Registered successfully "
        statusTwo="You can now configure your profile through the launcher or by adding details on the profile page later on."
        isModalVisible={isModalVisible}
        onPress={handleregistersucess}
      /> */}
    </>
  );
};

export default RegistertalentProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009A8C',
    // padding: 10,
    paddingTop: height * 0.0,
    paddingHorizontal: width * 0.02,
  },

  textContainer: {
    paddingTop: height * 0.02,
  },
  sProfileText: {
    fontSize: calculateFontSize(25),
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    textTransform: 'capitalize',
  },
  subTextProfile: {
    fontSize: calculateFontSize(10),
    color: '#fff',
    fontFamily: 'Poppins',
    textTransform: 'capitalize',
  },
  profil: {
    width: width * 0.35,
    height: height * 0.16,
    borderRadius: 100,
  },
  profilecontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height * 0.03,
  },
  registraiontalentform: {
    // flex: 1,
    alignItems: 'center',
  },

  editprofilebutton: {
    width: width * 0.05,
    height: height * 0.03,
    backgroundColor: '#2BADA1',
    // overflow:"hidden",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    bottom: height * 0.03,
    left: width * 0.08,
  },
  profileImage: {
    width: width * 0.35,
    height: height * 0.16,
    borderRadius: 100,
  },
  errorText: {
    color: 'red',
    fontSize: calculateFontSize(12),
    marginBottom: 5,
    marginRight: width * 0.5,
  },
});
