import React from 'react';
import {
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
import {TouchableOpacity} from 'react-native';

const {width, height} = Dimensions.get('window');

const SelectProfile = ({navigation}) => {
  const navigateToRegistration = profileType => {
    navigation.navigate('registrationscreen', {profileType});
  };

  const renderProfile = (profileType, imageSource, bgColor) => {
    return (
      <TouchableOpacity
        style={styles.profileContainer}
        onPress={() => navigateToRegistration(profileType)}>
        <View style={[styles.imageContainer, {backgroundColor: bgColor}]}>
          <View style={styles.imageclass}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={imageSource}
            />
          </View>
        </View>
        <Text style={styles.sProfileText}>{`Register as ${profileType}`}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.sProfileText}>Select profile</Text>
        <Text style={styles.subTextProfile}>
          Choose your profile for registration
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        {renderProfile('talent', Images.proimage, '#26C0B2')}
        {renderProfile('company', Images.company, 'white')}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009A8C',
    padding: 20,
  },
  textContainer: {
    // paddingTop: height * 0.02,
  },
  sProfileText: {
    fontSize: calculateFontSize(25),
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    textTransform: 'capitalize',
    paddingHorizontal: width * 0.03
  },
  subTextProfile: {
    fontSize: calculateFontSize(10),
    color: '#fff',
    fontFamily: 'Poppins',
    textTransform: 'capitalize',
    paddingHorizontal: width * 0.03
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height * 0.02,
  },
  imageContainer: {
    paddingHorizontal:width*0.2,
    paddingVertical:height*0.099,
    // width: width * 0.69,
    // height: height * 0.34,
    borderRadius: 200,
    // justifyContent: "center",
    alignItems: 'center',
    // marginBottom: height * 0.02,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    marginVertical: height * 0.03,
  },
  imageclass: {
    width: width * 0.3,
    height: height * 0.12,
    // backgroundColor:"red",
    borderRadius:100
  },
});

export default SelectProfile;
