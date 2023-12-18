import React from 'react';
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native';
import Images from '../../config/im';
import { calculateFontSize } from '../../config/font';
import { CustomeButton } from '../../Components';
const { width, height } = Dimensions.get('window');


const RegLogButton = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.centerContainer}>
                <View style={styles.logoContainer}>
                    <Image resizeMode="cover" style={styles.logo} source={Images.logo} />
                </View>
                <Text style={styles.jobText}>Jobbooks</Text>
                <Text style={styles.welcomeText}>Powering Your Career Success</Text>


            </View>
            <View style={styles.buttonContainer}>
                <CustomeButton title={"Log in"} onPress={() => navigation.navigate("loginscreen")} nonbg={true} />
                <CustomeButton title={"Register now"} onPress={() => navigation.navigate("seclectproscreen")} />
            </View>
        </SafeAreaView>
    )
}

export default RegLogButton
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#009A8C"
    },
    centerContainer: {
        alignItems: 'center',
        marginTop: height * 0.3, // Adjust the marginTop to place the content
    },
    welcomeText: {
        fontSize: calculateFontSize(20),
        color: '#fff',
        fontWeight: '600',
        fontFamily: 'Poppins',
        textTransform: 'capitalize',
    },
    jobText: {
        fontSize: calculateFontSize(35),
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'Poppins',
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
})