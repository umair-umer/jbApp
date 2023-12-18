import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Images from '../../config/im';
import {calculateFontSize} from '../../config/font';
import {CustomModal, CustomeButton, Inputcomponent} from '../../Components';
import {useRoute} from '@react-navigation/native';
import {overlay} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const {width, height} = Dimensions.get('window');
const RegistertalentProfile = ({navigation}) => {
  const route = useRoute();
  const profileType = route.params.profileType;
  // console.log(profileType);
  const [isModalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [location, setLocation] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileNumberError, setMobileNumberError] = useState('');
  const [locationError, setLocationError] = useState('');
  const [portfolioLinkError, setPortfolioLinkError] = useState('');



  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const regiter = () => {
    setModalVisible(false);
    if (profileType === 'Company') {
      // If the user is registering as a company, navigate to the company screen
      navigation.navigate('home',{ profileType: 'talent' });
    } else if (profileType === 'Talent') {
      // If the user is registering as talent, navigate to the home screen
      navigation.navigate('Companyhome', { profileType: 'talent' });
    }
  };


  

  const TalentRegistationForm = () => {
    return (
      <>
        <View style={styles.registraiontalentform}>
          <Inputcomponent label={'Name'} placeholder={'Name'} />
          <Inputcomponent
            label={'Email Address'}
            placeholder={'Email Address'}
          />
          <Inputcomponent
            label={'Mobile Number'}
            placeholder={'Mobile Number'}
          />
          <Inputcomponent label={'Location'} placeholder={'Location'} />
          <Inputcomponent
            label={'Website or Portfolio link'}
            placeholder={'Website or Portfolio link'}
          />
        </View>
        <CustomeButton onPress={toggleModal} title={'Register'} nonbg={true} />
      </>
    );
  };

  const CompanyRegistationForm = () => {
    return (
      <>
        <View style={styles.registraiontalentform}>
          <Inputcomponent label={'Name'} placeholder={'Name'} />
          <Inputcomponent label={'Company Name'} placeholder={'Company Name'} />
          <Inputcomponent
            label={'Mobile Number'}
            placeholder={'Mobile Number'}
          />
          <Inputcomponent
            label={'Company Website '}
            placeholder={'Company Website'}
          />
          <Inputcomponent label={'Location'} placeholder={'Location'} />
        </View>
        <CustomeButton onPress={toggleModal} title={'Register'} nonbg={true}  />
      </>
    );
  };

  return (
    <>
      <CustomModal
        status={'profile Registered successfully '}
        statusTwo={
          'You can now configure your profile through the launcher or by adding details on the profile page later on.'
        }
        isModalVisible={isModalVisible}
        onPress={regiter}
      />

      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'paddingbottom:0'}
          style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false} style={{}}>
            <View style={styles.textContainer}>
              <Text style={styles.sProfileText}>register profile</Text>
              <Text style={styles.subTextProfile}>
                enter your information below for registration
              </Text>
            </View>
            <View style={styles.profilecontainer}>
              <View style={styles.profil}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  resizeMode="contain"
                  source={Images.pro}
                />
              </View>
              <TouchableOpacity style={styles.editprofilebutton}>
                <FontAwesome5 resizeMode="center" name="edit" color="#fff" />
              </TouchableOpacity>
            </View>
            {profileType === 'Talent' ? (
              <TalentRegistationForm />
            ) : profileType === 'Company' ? (
              <CompanyRegistationForm />
            ) : null}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
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
});
