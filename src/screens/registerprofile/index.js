// import {
//   View,
//   Text,
//   ImageBackground,
//   SafeAreaView,
//   StyleSheet,
//   Image,
//   Dimensions,
//   KeyboardAvoidingView,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import React, {useState, useEffect} from 'react';
// import Images from '../../config/im';
// import {calculateFontSize} from '../../config/font';
// import {CustomModal, CustomeButton, Inputcomponent} from '../../Components';
// import {useRoute} from '@react-navigation/native';
// import {overlay} from 'react-native-paper';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// const {width, height} = Dimensions.get('window');
// const RegistertalentProfile = ({navigation}) => {
//   const route = useRoute();
//   const profileType = route.params.profileType;
//   // console.log(profileType);
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [location, setLocation] = useState('');
//   const [portfolioLink, setPortfolioLink] = useState('');

//   const [nameError, setNameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [mobileNumberError, setMobileNumberError] = useState('');
//   const [locationError, setLocationError] = useState('');
//   const [portfolioLinkError, setPortfolioLinkError] = useState('');



//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };
//   const regiter = () => {
//     setModalVisible(false);
//     if (profileType === 'Company') {
//       // If the user is registering as a company, navigate to the company screen
//       navigation.navigate('Companyhome',{ profileType: 'talent' });
//     } else if (profileType === 'Talent') {
//       // If the user is registering as talent, navigate to the home screen
//       navigation.navigate('', { profileType: 'talent' });
//     }
//   };




//   const TalentRegistationForm = () => {
//     return (
//       <>
//         <View style={styles.registraiontalentform}>
//           <Inputcomponent label={'Name'} placeholder={'Name'} />
//           <Inputcomponent
//             label={'Email Address'}
//             placeholder={'Email Address'}
//           />
//           <Inputcomponent
//             label={'Mobile Number'}
//             placeholder={'Mobile Number'}
//           />
//           <Inputcomponent label={'Location'} placeholder={'Location'} />
//           <Inputcomponent
//             label={'Website or Portfolio link'}
//             placeholder={'Website or Portfolio link'}
//           />
//         </View>
//         <CustomeButton onPress={toggleModal} title={'Register'} nonbg={true} />
//       </>
//     );
//   };

//   const CompanyRegistationForm = () => {
//     return (
//       <>
//         <View style={styles.registraiontalentform}>
//           <Inputcomponent label={'Name'} placeholder={'Name'} />
//           <Inputcomponent label={'Company Name'} placeholder={'Company Name'} />
//           <Inputcomponent
//             label={'Mobile Number'}
//             placeholder={'Mobile Number'}
//           />
//           <Inputcomponent
//             label={'Company Website '}
//             placeholder={'Company Website'}
//           />
//           <Inputcomponent label={'Location'} placeholder={'Location'} />
//         </View>
//         <CustomeButton onPress={toggleModal} title={'Register'} nonbg={true}  />
//       </>
//     );
//   };

//   return (
//     <>
//       <CustomModal
//         status={'profile Registered successfully '}
//         statusTwo={
//           'You can now configure your profile through the launcher or by adding details on the profile page later on.'
//         }
//         isModalVisible={isModalVisible}
//         onPress={regiter}
//       />

//       <SafeAreaView style={styles.container}>
//         <KeyboardAvoidingView
//           behavior={Platform.OS === 'ios' ? 'padding' : 'paddingbottom:0'}
//           style={styles.container}>
//           <ScrollView showsVerticalScrollIndicator={false} style={{}}>
//             <View style={styles.textContainer}>
//               <Text style={styles.sProfileText}>register profile</Text>
//               <Text style={styles.subTextProfile}>
//                 enter your information below for registration
//               </Text>
//             </View>
//             <View style={styles.profilecontainer}>
//               <View style={styles.profil}>
//                 <Image
//                   style={{width: '100%', height: '100%'}}
//                   resizeMode="contain"
//                   source={Images.pro}
//                 />
//               </View>
//               <TouchableOpacity style={styles.editprofilebutton}>
//                 <FontAwesome5 resizeMode="center" name="edit" color="#fff" />
//               </TouchableOpacity>
//             </View>
//             {profileType === 'Talent' ? (
//               <TalentRegistationForm />
//             ) : profileType === 'Company' ? (
//               <CompanyRegistationForm />
//             ) : null}
//           </ScrollView>
//         </KeyboardAvoidingView>
//       </SafeAreaView>
//     </>
//   );
// };

// export default RegistertalentProfile;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#009A8C',
//     // padding: 10,
//     paddingTop: height * 0.0,
//     paddingHorizontal: width * 0.02,
//   },

//   textContainer: {
//     paddingTop: height * 0.02,
//   },
//   sProfileText: {
//     fontSize: calculateFontSize(25),
//     color: '#fff',
//     fontWeight: 'bold',
//     fontFamily: 'Poppins',
//     textTransform: 'capitalize',
//   },
//   subTextProfile: {
//     fontSize: calculateFontSize(10),
//     color: '#fff',
//     fontFamily: 'Poppins',
//     textTransform: 'capitalize',
//   },
//   profil: {
//     width: width * 0.35,
//     height: height * 0.16,
//     borderRadius: 100,
//   },
//   profilecontainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: height * 0.03,
//   },
//   registraiontalentform: {
//     // flex: 1,
//     alignItems: 'center',
//   },

//   editprofilebutton: {
//     width: width * 0.05,
//     height: height * 0.03,
//     backgroundColor: '#2BADA1',
//     // overflow:"hidden",
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//     bottom: height * 0.03,
//     left: width * 0.08,
//   },
// });
import React, { useState } from 'react';
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
import { launchImageLibrary } from 'react-native-image-picker';
import { CustomErrorModal, CustomModal, CustomeButton, Inputcomponent } from '../../Components';
import Images from '../../config/im';
import { calculateFontSize } from '../../config/font';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRoute } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');
import axios from "axios"
import Loader from '../../Components/Loader';
import { useDispatch } from 'react-redux';

const RegistertalentProfile = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const route = useRoute();
  const profileType = route.params.profileType;
  console.log(profileType, "====>profiletype");
  const [ISload, setload] = useState(false)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [Location, setLocation] = useState('');
  const [Website, setWebsite] = useState('');
  const[error,setErrro]=useState();

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

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [companynameError, setCompanyNameError] = useState('')

  const handleChoosePhoto = () => {
    launchImageLibrary({ noData: true }, response => {
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


    setload(true)
    if (isValid) {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('phone', mobile);
      formData.append('location', Location);
      formData.append('website', Website);
      // formData.append('device_token', 'g45yu56u65');
      formData.append('role', profileType);

      if (profileImage) {
        formData.append('picture', {
          uri: profileImage.uri,
          name: 'profile.jpg',
          type: 'image/jpeg',
        });
      }

      try {
        const response = await axios.post(
          'https://jobbookbackend.azurewebsites.net/api/v1/jobbook/auth/signup',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
       const token=response.data.token;
       const type=response.data.user.role;
console.log(token,type,"====>");
        if (response.status === 200) {
          dispatch({ type: 'LOGIN_SUCCESS', payload: { token, type } });
          // dispatch(setUserData(token, type))
          setload(false)
          setModalVisiblesucess(true);
        } else {
          console.log('Registration failed with status code: ', response.status);
        }
      } catch (error) {
        console.error('Registration error:', error.response.data.error);
        setload(false)
        setErrro(error.response.data.error)
        setModalVisible(true);
      }
    }

    console.log(name, email, password, mobile, profileType, '====>');
  };

  const toggleModal = () => {
    setModalVisible(false);
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
      {ISload ? <Loader /> : <SafeAreaView style={styles.container}>
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
                    style={{ width: '100%', height: '100%', borderRadius: 100 }}
                    source={profileImage}
                    resizeMode="cover"
                  />
                ) : (
                  <Image
                    style={{ width: '100%', height: '100%', borderRadius: 100 }}
                    source={Images.pro}
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
                  onChange={(text) => setName(text)}
                  error={nameError}
                  value={name}
                />
                {nameError ? (
                  <Text style={styles.errorText}>{nameError}</Text>
                ) : null}
                <Inputcomponent
                  label="Email Address"
                  placeholder="Email Address"
                  onChange={(text) => setEmail(text)}
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
                  onChange={(text) => setPassword(text)}
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
                <CustomeButton onPress={register} title="Register" nonbg={true} />
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
                <CustomeButton onPress={register} title="Register" nonbg={true} />
              </View>
            )}
          </ScrollView>
        </KeyboardAvoidingView>
        <CustomModal
          status="profile Registered successfully "
          statusTwo="You can now configure your profile through the launcher or by adding details on the profile page later on."
          isModalVisible={isModalVisiblesucess}
          onPress={handleregistersucess}
        />

      </SafeAreaView>}
      <CustomErrorModal onPressclose={toggleModal} error={error} isModalVisible={isModalVisible} />

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