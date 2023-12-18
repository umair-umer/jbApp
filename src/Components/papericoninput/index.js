import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import {calculateFontSize} from '../../config/font';
import Images from '../../config/im';
import { useNavigation } from '@react-navigation/native';

const CustomeforgetHeader = ({
  source,
  head,
  subhead,
  company,
  heading,
  skip,
}) => {
   const navigation=useNavigation()
  return (
    <>
      {company ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: height * 0.03,
          }}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.arrowimage}>
            <Image
              resizeMode="center"
              style={{width: '100%', height: '100%'}}
              source={source}
            />
          </TouchableOpacity >
          <Text style={styles.hedtext}>{heading}</Text>
          <TouchableOpacity>
            <Text style={styles.hedtextskip}>{skip}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            justifyContent: 'space-between',
            marginVertical: height * 0.03,
          }}>
          <View style={styles.arrowimage}>
            <Image
              resizeMode="center"
              style={{width: '100%', height: '100%'}}
              source={source}
            />
          </View>
          <View style={styles.forgotpasshead}>
            <Text style={styles.sProfileText}>{head}</Text>
            <Text style={styles.subTextProfile}>{subhead}</Text>
          </View>
        </View>
      )}
    </>
  );
};

export default CustomeforgetHeader;

const styles = StyleSheet.create({
  arrowimage: {
    width: width * 0.04,
    height: height * 0.04,
  },
  sProfileText: {
    fontSize: calculateFontSize(30),
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    textTransform: 'capitalize',
  },
  subTextProfile: {
    fontSize: calculateFontSize(14),
    color: '#fff',
    fontFamily: 'Poppins',
    textTransform: 'capitalize',
    fontWeight: '600',
    marginVertical: height * 0.01,
  },
  forgotpasshead: {
    marginTop: height * 0.02,
  },
  hedtext: {
    marginHorizontal: width * 0.3,
    fontSize: calculateFontSize(14),
    color: '#fff',
    fontFamily: 'Poppins',
  },
  hedtextskip: {
    fontSize: calculateFontSize(14),
    color: '#fff',
    fontFamily: 'Poppins',
  },
});
