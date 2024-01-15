import React, {useState} from 'react';
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Modal from 'react-native-modal';
import Images from '../../config/im';
import {calculateFontSize} from '../../config/font';
import CustomeButton from '../custombutton';
import {useNavigation} from '@react-navigation/native';

// import AntDesign from 'react-native-vector-icons/AntDesign'

function CustomErrorModal({
  isModalVisible,
  error,
  onPress,
  onPressclose
}) {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, position: 'absolute'}}>
     

      <Modal isVisible={isModalVisible}>
      <View style={styles.mainContainer}>
        <Text style={styles.mainHeading}>{error}</Text>
        <TouchableOpacity onPress={onPressclose} style={{marginVertical:height*0.02,backgroundColor:"#0E746B",padding:14,borderRadius:10,}}><Text style={{color:"#fff",fontWeight:"bold"}}>ok</Text></TouchableOpacity>
      </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    // width: width * 0.9,
    // height: height ,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent:"center",
    alignItems: 'center',
    padding: 9,
  },
  mainContainer2: {
    width: width * 0.9,
    height: height * 0.33,
    backgroundColor: 'transparent',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    zIndex: -1,
  },
  iconCon: {
    width: width * 0.26,
    height: height * 0.12,
    // backgroundColor: "red",
    borderRadius: 50,
    // marginVertical: height * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
  },

  txtCon: {
    paddingVertical: height * 0.01,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainHeading: {
    fontSize: calculateFontSize(29),
    textAlign: 'center',
    fontWeight: '700',
    color: '#0E746B',
  },
  mainHeadinjobposted: {
    fontSize: calculateFontSize(27),
    textAlign: 'center',
    fontWeight: '700',
    color: '#0E746B',
  },

  nonebutton: {
    paddingHorizontal: width * 0.3,
    paddingVertical: height * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 100,

    backgroundColor: '#0E746B',
    marginVertical: height * 0.01,
  },
  nonebuttonbg:{
    paddingHorizontal: width * 0.3,
    paddingVertical: height * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 100,

    borderWidth:1,
    borderColor:"rgba(13, 120, 110, 1)",
    marginVertical: height * 0.01,
  },
  noncolorbg: {
    color:'rgba(13, 120, 110, 1)',
    fontFamily: 'Poppins',
    fontWeight: '300',
  },
  colorbg: {
    color: '#fff',
    fontFamily: 'Poppins',
    fontWeight: '300',
  },
  updstetext: {
    fontSize: calculateFontSize(19),
    textAlign: 'center',
    fontWeight: '400',
    color: '#0E746B',
    marginVertical: height * 0.03,
  },
  regbut: {
    paddingHorizontal: width * 0.1,
    paddingVertical: height * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#0E746B',
    backgroundColor: '#fff',

    marginVertical: height * 0.01,
  },
  laterbut: {
    paddingHorizontal: width * 0.14,
    paddingVertical: height * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 100,
    backgroundColor: '#0E746B',
    marginVertical: height * 0.01,
  },
  butto: {
    backgroundColor: '#0E746B',
    width: width * 0.7,
    height: height * 0.07,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  postnewjbtext: {
    fontSize: calculateFontSize(19),
    textAlign: 'center',
    fontWeight: '400',
    color: '#fff',
  },
  cross: {position: 'absolute', top: -(width * 0.59), left: 0},
  crosstext: {
    color: '#fff',
    fontSize: calculateFontSize(30),
    fontWeight: 'bold',
  },
});

export default CustomErrorModal;
