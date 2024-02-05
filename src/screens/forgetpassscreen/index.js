import React,{useEffect,useState} from 'react';
import { TouchableOpacity, View, Text, ImageBackground, SafeAreaView, StyleSheet, Image, Dimensions,Alert } from 'react-native';
import Images from '../../config/im';
import { calculateFontSize } from '../../config/font';
import { CustomeButton, Inputcomponent,CustomeforgetHeader } from '../../Components';
import  axios  from 'axios';
const { width, height } = Dimensions.get('window');
const ForgetPassWord = ({navigation}) => {

    const [email, setEmail] = useState('');

    const sendForgotPasswordRequest = () => {
        axios.post('https://jobbookbackend.azurewebsites.net/api/v1/jobbook/auth/forgot', {
            email: email,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            console.log(response);
            Alert.alert("Check your email", "If your email is registered with us, you will receive instructions to reset your password.");
            navigation.navigate("otpscreen",{email})
        })
        .catch((error) => {
            console.log(error);
            Alert.alert("Error", "An error occurred. Please try again later.");
        });
    };
    return (
        <SafeAreaView style={styles.container}>
           <CustomeforgetHeader source={Images.arrow} head={"Forgot Password"} subhead={"Select which contact details should we use to reset your password"}/>
                <View style={styles.inputheight}>
                <Inputcomponent placeholder={"Send OTP via SMS"} iconInput={true} icon={Images.sms} />
                <Inputcomponent placeholder={"Send OTP via Email"} iconInput={true} icon={Images.emailicon}  onChange={text => setEmail(text)}
                    value={email} />
                </View>

                <CustomeButton title={"Continue"} nonbg={true} onPress={sendForgotPasswordRequest}/>

        </SafeAreaView>
    )
}

export default ForgetPassWord
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#009A8C",
        padding: 20
    },
    arrowimage: {
        width: width * 0.03,
        height: height * 0.03,

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
        fontWeight:"600"
    },
    forgotpasshead:{
        marginVertical:height*0.03,
    },
    inputheight:{
        height:height*0.68
    }
})