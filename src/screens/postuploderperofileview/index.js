
import React, { useState } from 'react';
import {
    TouchableOpacity,
    TextInput,
    View,
    Text,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView,
} from 'react-native';
import Images from '../../config/im';
import { calculateFontSize } from '../../config/font';
import { CustomeforgetHeader } from '../../Components';
const { width, height } = Dimensions.get('window');

export const POstUPloderprofile = ({ navigation }) => {


    return (
        <SafeAreaView style={styles.conatiner}>
            <Image style={{
                width: "100%", bottom: 14, ...Platform.select({
                    ios: {
                        // padding:10,
                        bottom: height * 0.03,

                    },

                })
            }} resizeMode='contain' source={Images.b} />
            <View style={styles.arrowbox}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.arrowimage}>
                    <Image
                        resizeMode="center"
                        style={{ width: '100%', height: '100%' }}
                        source={Images.arrow}
                    />
                </TouchableOpacity >
            </View>
            <View style={styles.proimg}>
                <Image source={Images.pro} style={{ width: "100%", height: "100%" }} resizeMode='cover' />
            </View>
            <ScrollView style={styles.scrollcontain}>
                <View>
                    <Text style={styles.prname}>John Doe </Text>
                    <Text style={styles.position}>Creative Director </Text>
                    <Text style={styles.companyname}>The Company Media Office </Text>
                    <Text style={styles.location}>New York City, United States of America </Text>

                </View>
                <View style={{ paddingHorizontal: width * 0.01 }}>
              <Text style={styles.workexperdive}>experience </Text>
              {Array.isArray(userData.experience) && userData.experience.map((exp, index) => (
                <>
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View style={styles.wrkexperience}>
                      <View style={styles.dpPic}>
                        <Image
                          resizeMode="center"
                          source={Images.user}
                          style={styles.img}
                        />
                      </View>
                      <View style={{ paddingHorizontal: width * 0.03 }}>
                        <Text style={styles.aboutmehead}>Gate Guard</Text>
                        <Text style={styles.wrkexp}>PeopleReady    Eagle Pass, TX</Text>
                        <Text style={styles.wrkexp}>
                        Dec 2022 - Present
                        </Text>
                      </View>
                    </View>

                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('UpdateProfiletalent')
                      }>
                      <Feather
                        name="edit"
                        color="#fff"
                        size={calculateFontSize(20)}
                      />
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{
                      borderBottomWidth: 1,
                      marginVertical: height * 0.04,
                      borderBottomColor: '#fff',
                    }}></View>
                </>
              ))}

            </View>


            </ScrollView>


        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: "#2BADA1",
        ...Platform.select({
            ios: {
                padding: 10,
            },

        })


    },
    arrowimage: {
        width: width * 0.03,
        height: height * 0.03,


    },
    arrowbox: {
        position: "absolute",
        paddingHorizontal: width * 0.02,
        paddingVertical: height * 0.02,
        ...Platform.select({
            ios: {
                paddingHorizontal: width * 0.02,
                paddingVertical: height * 0.06,
            },

        })
    },
    proimg: {
        width: width * 0.20,
        height: height * 0.10,
        // backgroundColor:"red",
        alignItems: "center",
        position: "absolute",
        top: height * 0.13,
        bottom: 0,
        borderRadius: 100,
        left: width * 0.06,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "#fff"

    }, scrollcontain: {
        flex: 1,
        paddingHorizontal: width * 0.04,
    },
    prname: {
        fontSize: calculateFontSize(20),
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        textTransform: 'capitalize',
    },
    position: {
        fontSize: calculateFontSize(10),
        color: '#fff',
        fontWeight: '500',
        fontFamily: 'Poppins',
        textTransform: 'capitalize',
    },
    companyname: {
        fontSize: calculateFontSize(10),
        color: '#fff',
        fontWeight: '500',
        fontFamily: 'Poppins',
        textTransform: 'capitalize',
    },
    location: {
        fontSize: calculateFontSize(10),
        color: '#fff',
        fontWeight: '500',
        fontFamily: 'Poppins',
        textTransform: 'capitalize',
    }

})