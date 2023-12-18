import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {calculateFontSize} from '../../config/font';
import {CustomeButton, CustomeforgetHeader} from '../../Components';
import Images from '../../config/im';
const {width, height} = Dimensions.get('window');
function Verifyprocessscreen({navigation}) {
  return (
    <SafeAreaView style={styles.miancon}>
      <CustomeforgetHeader
        heading={'Enter code'}
        company={true}
        source={Images.arrow}
        head={'Enter OTP Code'}
        subhead={'OTP code has been sent to (406) 555-0120 '}
      />

      <View style={styles.inpcon}>
        <TextInput
          placeholder="Phone number"
          placeholderTextColor={'#fff'}
          keyboardType="numeric"
          style={styles.inp}
        />
      </View>

      <View style={{alignItems: 'center'}}>
        <CustomeButton
          nonbg={true}
          title={'Confirm'}
          onPress={() => navigation.navigate('entercodeverified')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  miancon: {
    flex: 1,
    padding: 20,

    backgroundColor: 'rgba(0, 154, 140, 0.7)',
    // flex: 1,
    // backgroundColor: "#fff",
    // paddingBottom:height*0.03,
  },
  headcon: {
    paddingVertical: height * 0.03,
  },
  heading: {
    color: '#fff',
    fontSize: calculateFontSize(18),
    fontWeight: '600',
    textAlign: 'center',
  },

  btncon: {
    height: height * 0.79,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  btn: {
    width: width * 0.9,
    height: height * 0.07,
    backgroundColor: '#1C75BC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: height * 0.02,
  },
  btntx: {
    color: '#fff',
    fontSize: calculateFontSize(16),
    fontWeight: '500',
  },
  inpcon: {
    flex: 1,
    paddingHorizontal: width * 0.04,
  },
  inp: {
    borderColor: '#fff',
    borderWidth: 1,
    paddingHorizontal: width * 0.06,
    borderRadius: 10,
    color: '#fff',
  },
});

export default Verifyprocessscreen;
