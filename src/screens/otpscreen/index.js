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

const OtpScreen = ({navigation}) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const otpInputRefs = [];

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
          onPress={() => {
            navigation.navigate('newpassscreen');
          }}
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
  },
  butcontainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
