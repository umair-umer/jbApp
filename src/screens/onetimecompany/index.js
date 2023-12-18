import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native'
import { calculateFontSize } from '../../config/font'
import { CustomeButton, CustomeforgetHeader } from '../../Components'
import Images from '../../config/im'
const { width, height } = Dimensions.get("window")
const OneVerfiyscreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.miancon} >

<CustomeforgetHeader company={true} source={Images.arrow} head={"Enter OTP Code"} subhead={"OTP code has been sent to (406) 555-0120 "} />

      <View style={styles.headcon}>
        <Text style={styles.heading}>
          1 Time Verification
        </Text>
        <Text style={styles.salogan}>
          Choose your profile for registration
        </Text>
      </View>

      {/* <View style={styles.btncon}> */}

<CustomeButton nonbg={true} title={"Verify Phone"} onPress={()=>navigation.navigate("companyyprocessscreen")}/>
     

    </SafeAreaView>
  )
}

export default OneVerfiyscreen



const styles = StyleSheet.create({

  miancon: {
    flex: 1,
    padding:20,
 
    backgroundColor: 'rgba(0, 154, 140, 0.7)',
  },
  headcon: {
    flex: 1,
    paddingVertical: height * 0.07

  },
  heading: {


    color: "#fff",
    fontSize: calculateFontSize(32),
    fontWeight: "700",
    textAlign: "center"
  },
  salogan: {

    color: "#fff",
    fontSize: calculateFontSize(14),
    fontWeight: "500",
    textAlign: "center"

  },
  btncon: {
    // top: height * 0.09,
    // height: height * 0.1,
    bottom:height*0.02,
    flexDirection: "column",
    justifyContent: "flex-end",
    // paddingHorizontal: width * 0.01,
    alignItems:"center"

  },

  btn: {


    width: width * 0.9,
    height: height * 0.07,
    backgroundColor: "#1C75BC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: height * 0.02,
  },
  btntx: {


    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  }

})

