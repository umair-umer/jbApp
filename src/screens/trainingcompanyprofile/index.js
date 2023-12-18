import React, { useState } from 'react'
import { Dimensions, View, StyleSheet, Text, TextInput, FlatList, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
const { width, height } = Dimensions.get("window")
import { calculateFontSize } from '../../config/font';

import Entypo from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Images from '../../config/im';
import { CustomeButton, CustomeHeader } from '../../Components'
import { SafeAreaView } from 'react-native-safe-area-context'

const Traingcompanyprofile = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.bgstyle}>
                <ImageBackground resizeMode='cover' style={{ width: "100%", height: "100%" }} source={Images.frame}>
                    <View style={styles.hedr}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name="chevron-back" color="#fff" size={30} />
                        </TouchableOpacity>
                        <Text style={styles.headname}>Company Profile</Text>
                        <TouchableOpacity
                            style={styles.profileconainter}
                            onPress={() => navigation.openDrawer()}>
                            <Image resizeMode='contain' style={{ width: "100%", height: "100%" }} source={Images.BookmarkSimple} />
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            </View>
            <ScrollView style={{ padding: 20 }}>

                <View style={styles.fecontainer}>
                    <Text style={styles.uxhed}>UI/UX Design</Text>
                    <Text style={styles.dollar}>$65</Text>
                </View>

                <View style={styles.flexspac}>
                    <View style={styles.flex}>
                        <View style={styles.mentordiv}>
                            <Image style={{ width: "100%", height: "100%" }} resizeMode='center' source={Images.mentor} />
                        </View>
                        <View style={styles.margin}>
                            <Text style={styles.name}>Harvey J</Text>
                            <Text style={styles.designation}>UI/UX Designer</Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.icon}>
                            <Image resizeMode='center' style={{ width: "100%", height: "100%" }} source={Images.mesg} />

                        </View>
                    </View>

                </View>

                <View style={styles.bottomborder}>
                    <Text style={styles.des}>
                        Product Designers are responsible for coming up with
                        new product designs that meet the needs and wants of consumers.
                        They will have many duties, such as creating design concepts,
                        drawing ideas to determine... <Text style={styles.readmore}>Read More</Text>
                    </Text>
                </View>
                <View>
                    <Text style={styles.des}>lesson</Text>
                    <TouchableOpacity style={styles.flexspacborder}>
                        <View style={styles.flex}>
                            <View style={styles.iconplay}>
                                <Image resizeMode='center' style={{ width: "100%", height: "100%" }} source={Images.pause} />

                            </View>
                            <View style={styles.margin}>
                                <Text style={styles.intro}>
                                    Introduction
                                </Text><Text style={styles.time}>
                                    14 mins
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Entypo name="chevron-right" color="#fff" size={30} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.flexspacborder}>
                        <View style={styles.flex}>
                            <View style={styles.iconplay}>
                                <Image resizeMode='center' style={{ width: "100%", height: "100%" }} source={Images.pause} />

                            </View>
                            <View style={styles.margin}>
                                <Text style={styles.intro}>
                                    Introduction
                                </Text><Text style={styles.time}>
                                    14 mins
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Entypo name="chevron-right" color="#fff" size={30} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.flexspacborder}>
                        <View style={styles.flex}>
                            <View style={styles.iconplay}>
                                <Image resizeMode='center' style={{ width: "100%", height: "100%" }} source={Images.pause} />

                            </View>
                            <View style={styles.margin}>
                                <Text style={styles.intro}>
                                    Introduction
                                </Text><Text style={styles.time}>
                                    14 mins
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Entypo name="chevron-right" color="#fff" size={30} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>

                <View style={styles.butooncontainer}>
                    <CustomeButton title={"Buy now"} nonbg={true} onPress={()=>{navigation.navigate('checkout')}} />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Traingcompanyprofile
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#009A8C",

    },
    bgstyle: {
        height: height * 0.3,
        width: width,
        backgroundColor: "red"
    },
    hedr: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20
    },
    headname: {
        fontSize: calculateFontSize(15),
        fontWeight: "bold",
        color: "#fff",
        textTransform: "capitalize",
        marginHorizontal: width * 0.01,
        fontFamily: "Poppins",

    },
    profileconainter: {
        width: width * 0.13,
        height: height * 0.04,
        borderRadius: 100,
        padding: 3,
        borderColor: "#1EC5B6"
    },
    uxhed: {
        paddingHorizontal: width * 0.03,
        paddingVertical: height * 0.01,
        backgroundColor: "#1B5953",
        borderRadius: 10,
        color: "#FFf",
        fontSize: calculateFontSize(15),
        fontFamily: "Poppins",
    },
    fecontainer: {
        flexDirection: "row",
        justifyContent: "space-between", alignItems: "center"
    },
    dollar: {
        color: "#FFf",
        fontSize: calculateFontSize(15),
        fontFamily: "Poppins",
    },
    mentordiv: {
        width: width * 0.2,
        height: height * 0.09,
        // backgroundColor:"red"
    },
    flex: {
        flexDirection: "row",
        alignItems: "center"
    },
    name: {
        color: "#FFf",
        fontSize: calculateFontSize(25),
        fontFamily: "Poppins",
        fontWeight: "bold"
    },
    designation: {
        color: "#FFf",
        fontSize: calculateFontSize(15),
        fontFamily: "Poppins",
        // fontWeight:"bold"
    },
    margin: {
        marginHorizontal: width * 0.03,
    },
    icon: {
        width: width * 0.12,
        height: height * 0.05,
        paddingHorizontal: 10,
        backgroundColor: "#2FB5A8",
        borderRadius: 10,
    },
    flexspac: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: height * 0.03,
    },
    flexspacborder: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 0.2,
        borderBottomColor: "#fff",
        paddingBottom: height * 0.03,
        marginVertical: height * 0.02,
    },
    des: {
        color: "#FFf",
        fontSize: calculateFontSize(15),
        fontFamily: "Poppins"
    },
    readmore: {
        color: "#0DFFE8",
        fontSize: calculateFontSize(15),
        fontFamily: "Poppins",
        fontWeight: "bold"
    },
    bottomborder: {
        borderBottomWidth: 1,
        paddingBottom: height * 0.04,
        borderBottomColor: "#FFFFFF"
    },
    iconplay: {
        width: width * 0.15,
        height: height * 0.07,
        padding: 10,
        backgroundColor: "#104C47",
        borderRadius: 10,
    },
    intro: {
        color: "#fff",
        fontSize: calculateFontSize(15),
        fontFamily: "Poppins",
        fontWeight: "bold"
    },
    time: {
        color: "#fff",
        fontSize: calculateFontSize(15),
        fontFamily: "Poppins",
    },
    butooncontainer: {
        marginTop: height * 0.07,
        paddingBottom: height * 0.037,
    }
})