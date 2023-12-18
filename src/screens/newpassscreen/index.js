import React,{useState} from 'react';
import { TouchableOpacity, View, Text, ImageBackground, SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native';
import Images from '../../config/im';
import { calculateFontSize } from '../../config/font';
import { CustomeButton, Inputcomponent,CustomeforgetHeader,CustomModal } from '../../Components';
const { width, height } = Dimensions.get('window');

const NewpassScreen = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log(isModalVisible);
  };
    const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
    return (
        
        <>

        <CustomModal passscreen={true} status={"Password update successfully"} statusTwo={"Your password has been updated successfully"} isModalVisible={isModalVisible} onPress={toggleModal}/>
        
        <SafeAreaView style={styles.container}>
           <CustomeforgetHeader source={Images.arrow} head={"Enter new password"} subhead={"please enter new password"}/>
                <View style={styles.inputheight}>
                <Inputcomponent placeholder={"Password"} iconInput={true} icon={showPassword?Images.show:Images.noshow} right={true} secureTextEntry={!showPassword} onPress={togglePasswordVisibility} />
                <Inputcomponent placeholder={"Confirm Password"} iconInput={true} icon={showPassword?Images.show:Images.noshow} right={true} secureTextEntry={!showPassword} onPress={togglePasswordVisibility} />
                </View>

                <CustomeButton title={"Continue"} nonbg={true} onPress={toggleModal}/>

        </SafeAreaView>
        </>
    )
}

export default NewpassScreen
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
        fontFamily:"Poppins",

        textTransform: 'capitalize',
    },
    subTextProfile: {
        fontSize: calculateFontSize(14),
        color: '#fff',
        fontFamily:"Poppins",

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