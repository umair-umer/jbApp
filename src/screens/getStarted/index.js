import React from 'react';
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native';
import Images from '../../config/im';
import { calculateFontSize } from '../../config/font';
import { CustomeButton } from '../../Components';

const { width, height } = Dimensions.get('window');

export const GetStarted = ({navigation}) => {
  return (
    <ImageBackground style={styles.backgroundImage} source={Images.bg} resizeMode='cover'>
      <SafeAreaView style={styles.container}>
        <View style={styles.centerContainer}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <View style={styles.logoContainer}>
            <Image resizeMode="cover" style={styles.logo} source={Images.logo} />
          </View>
          <Text style={styles.jobText}>Jobbooks</Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomeButton title={"Lets get started"} onPress={()=>navigation.navigate("logreg")} nonbg={true}/>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between', // To create space between top and bottom items
  },
  centerContainer: {
    alignItems: 'center',
    marginTop: height * 0.3, // Adjust the marginTop to place the content
  },
  welcomeText: {
    fontSize: calculateFontSize(25),
    color: '#fff',
    fontWeight: '600',
    fontFamily:"Poppins",

    textTransform: 'capitalize',
  },
  jobText: {
    fontSize: calculateFontSize(35),
    color: '#fff',
    fontWeight: 'bold',
    fontFamily:"Poppins",

  },
  logoContainer: {
    width: width * 0.3,
    height: height * 0.15,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
});

export default GetStarted;
