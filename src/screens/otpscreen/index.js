import React, {useState} from 'react';
import {
  TouchableOpacity,
  TextInput,
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import Images from '../../config/im';
import {calculateFontSize} from '../../config/font';
import {
  CustomeButton,
  Inputcomponent,
  CustomeforgetHeader,
} from '../../Components';
const {width, height} = Dimensions.get('window');
import axios from 'axios';
import qs from 'qs';
const OtpScreen = ({navigation,route}) => {
  const {email}=route.params;
  console.log(email);
  const [otp, setOtp] = useState(['', '', '', '']);
  const otpInputRefs = [];
  const [username, setUsername] = useState('');
  

  const verifyOTP = async () => {
    const data = qs.stringify({
      'username': email,
      'code': otp,
    });

    const config = {
      method: 'post',
      url: 'https://jobbookbackend.azurewebsites.net/api/v1/jobbook/auth/verify-otp',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data,
      maxBodyLength: Infinity,
    };

    try {
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
      Alert.alert("Success", "OTP verified successfully.");
      navigation.navigate('newpassscreen');
      // Here, handle the success scenario, like navigating to another screen
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to verify OTP.");
      // Here, handle the error scenario
    }
  };
  const handleOtpChange = (index, value) => {
    if (isNaN(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus to the next input field if digit is entered
    if (index < otp.length - 1 && value !== '') {
      otpInputRefs[index + 1].focus();
    }
  };

  const handleOtpKeyPress = (index, key) => {
    // Move to the previous input field if backspace is pressed and the current field is empty
    if (key === 'Backspace' && index > 0 && otp[index] === '') {
      otpInputRefs[index - 1].focus();
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <CustomeforgetHeader
        source={Images.arrow}
        head={'Enter OTP Code'}
        subhead={'OTP code has been sent to (406) 555-0120 '}
      />
      <View style={styles.otpcontainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.input}
            value={digit}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={value => handleOtpChange(index, value)}
            onKeyPress={({nativeEvent: {key}}) => handleOtpKeyPress(index, key)}
            ref={ref => (otpInputRefs[index] = ref)}
          />
        ))}
      </View>

      <View style={styles.butcontainer}>
        <CustomeButton
          title={'Verify'}
          nonbg={true}
          onPress={verifyOTP}
        />
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009A8C',
    padding: 20,
  },
  otpcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: height * 0.05,
  },
  input: {
    width: width * 0.19,
    height: height * 0.09,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 100,
    textAlign: 'center',
    fontSize: calculateFontSize(25),
    fontFamily: 'Poppins',
    color:"#fff"
  },
  butcontainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
