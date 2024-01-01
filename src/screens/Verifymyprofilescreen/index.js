import React,{useState} from 'react';
import {
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  TextInput,
} from 'react-native';
import Images from '../../config/im';
import {calculateFontSize} from '../../config/font';
import {CustomeButton, CustomeforgetHeader} from '../../Components';
const {width, height} = Dimensions.get('window');
function Verfymyprofilesettingscreen() {
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
    <SafeAreaView style={styles.mainCon}>
      <CustomeforgetHeader
        onPress={() => navigation.goBack()}
        company={true}
        source={Images.arrow}
        heading={'My Profile Settings'}
      />

      <View>
        <Text style={styles.txt}>Verify your card</Text>
      </View>
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
}

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    paddingHorizontal: width * 0.03,
    backgroundColor: 'rgba(0, 154, 140,0.9)',
  },
  txt: {
    fontSize: calculateFontSize(19),
    color: '#fff',
    fontWeight: '700',
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
    marginVertical:height*0.5
  },
});

export default Verfymyprofilesettingscreen;
