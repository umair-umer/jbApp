import React, { useState } from 'react';
import { ScrollView,TouchableOpacity, Modal, View, Text, ImageBackground, SafeAreaView, StyleSheet, Image, Dimensions, FlatList, ImageBackgroundBase, TextInput } from 'react-native';
import Images from '../../config/im';
import { calculateFontSize } from '../../config/font';
const { width, height } = Dimensions.get('window');
import Ionicons from "react-native-vector-icons/Ionicons"
import Icon from '../../assets/tump.png'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const ViewPost = ({ route, navigation }) => {
    const { post } = route.params;
    console.log(post, "==>");
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.hedr}><Ionicons name="chevron-back" color="#fff" size={30} />
            <Text style={styles.headname}>View Post</Text></TouchableOpacity>
            <View style={styles.containjob}>
                <View style={styles.flex}>
                    <View style={styles.posttimename}>
                        <View style={styles.propst}>
                            <Image style={{ width: "100%", height: "100%" }} resizeMode='center' source={Images.profpost} />
                        </View>
                        <View>
                            <Text style={styles.tname}>{post.user.name} </Text>
                            <Text style={styles.tpostname}>{post.createdAt}</Text>
                        </View>
                    </View>
                    <View style={styles.savicon}>
                        <Image resizeMode='center' style={{ width: "100%", height: "100%" }} source={Images.sicon} />
                    </View>
                </View>
                <View style={styles.payracontainer}>
                    <Text style={styles.tnametitle}>{post.title} </Text>
                    <Text style={styles.descri}>
                        {post.description}</Text>
                </View>
            </View>
            <View style={{paddingHorizontal:width*0.02}}>
            <Text style={styles.rep}>Replies(80)</Text>
            </View>

                <ScrollView style={styles.scrollstyle}>
            <View style={styles.ReplyCon}>


                    <View style={styles.Repicon}>
                        <View style={styles.img}>
                            <MaterialIcons name="mode-edit-outline" color={"#2BADA1"} size={25} />
                        </View>

                        <View style={styles.txtcon}>
                            <Text style={styles.txt}>
                                James Brown
                            </Text>
                            <Text style={styles.txttime}>
                                1 hr ago
                            </Text>
                        </View>
                    </View>

                    <View style={styles.replyTxt}>
                        <Text style={styles.textrep}>
                            Hey there! C## is quite interesting.
                            It's designed to be a versatile language with a focus on
                            simplicity and performance. It's gaining popularity in some
                            niche areas like embedded systems and robotics. Whether it's worth
                            learning depends on your goals and the projects you're interested in.
                            Give it a shot if you like exploring new tech!
                        </Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.tump}>
                            <Image
                                source={Icon}
                                style={{ width: "100%", height: "100%", resizeMode: "center" }}

                            />
                        </View>

                        <View style={{ marginHorizontal: width * 0.01, marginVertical: height * 0.014 }}>
                            <Text style={styles.vote}> 140 Votes</Text>
                        </View>
                    </View>
                    

                    <View style={styles.line}></View>
                    
                    <View style={styles.Repicon}>
                        <View style={styles.img}>
                            <MaterialIcons name="mode-edit-outline" color={"#2BADA1"} size={25} />
                        </View>

                        <View style={styles.txtcon}>
                            <Text style={styles.txt}>
                                James Brown
                            </Text>
                            <Text style={styles.txttime}>
                                1 hr ago
                            </Text>
                        </View>
                    </View>

                    <View style={styles.replyTxt}>
                        <Text style={styles.textrep}>
                            Hey there! C## is quite interesting.
                            It's designed to be a versatile language with a focus on
                            simplicity and performance. It's gaining popularity in some
                            niche areas like embedded systems and robotics. Whether it's worth
                            learning depends on your goals and the projects you're interested in.
                            Give it a shot if you like exploring new tech!
                        </Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.tump}>
                            <Image
                                source={Icon}
                                style={{ width: "100%", height: "100%", resizeMode: "center" }}

                            />
                        </View>

                        <View style={{ marginHorizontal: width * 0.01, marginVertical: height * 0.014 }}>
                            <Text style={styles.vote}> 140 Votes</Text>
                        </View>
                    </View>
                    

                    <View style={styles.line}></View>
                    <View style={styles.Repicon}>
                        <View style={styles.img}>
                            <MaterialIcons name="mode-edit-outline" color={"#2BADA1"} size={25} />
                        </View>

                        <View style={styles.txtcon}>
                            <Text style={styles.txt}>
                                James Brown
                            </Text>
                            <Text style={styles.txttime}>
                                1 hr ago
                            </Text>
                        </View>
                    </View>

                    <View style={styles.replyTxt}>
                        <Text style={styles.textrep}>
                            Hey there! C## is quite interesting.
                            It's designed to be a versatile language with a focus on
                            simplicity and performance. It's gaining popularity in some
                            niche areas like embedded systems and robotics. Whether it's worth
                            learning depends on your goals and the projects you're interested in.
                            Give it a shot if you like exploring new tech!
                        </Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={styles.tump}>
                            <Image
                                source={Icon}
                                style={{ width: "100%", height: "100%", resizeMode: "center" }}

                            />
                        </TouchableOpacity>

                        <View style={{ marginHorizontal: width * 0.01, marginVertical: height * 0.014 }}>
                            <Text style={styles.vote}> 140 Votes</Text>
                        </View>
                    </View>
                    

                    <View style={styles.line}></View>
               
            </View>
                </ScrollView>
            <View style={{
                flexDirection: "row",
                 alignItems: "center",
                 position:"absolute",
                //  top:0,
                 bottom:height*0.02,
                 right:0,left:width*0.053,
                    
                   
                     }}>
                        <View style={styles.inpCon}>
                            <TextInput
                                placeholder='Write Somethings'
                                placeholderTextColor={"#000"}
                                style={styles.inp}
                            />
                        </View>


                        <View style={styles.sent}>

                            <FontAwesome name='send' color={"#1A776E"} size={20} />

                        </View>

                    </View>
        </View>
    )
}

export default ViewPost
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#009A8C",
        paddingTop:10,
        paddingHorizontal:width*0.02
    },
    hedr: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: height * 0.03,
    },
    headname: {
        fontSize: calculateFontSize(18),
        fontWeight: "600",
        color: "#fff",
        textTransform: "capitalize",
        marginHorizontal: width * 0.01,
        fontFamily:"Poppins",

    },
    flex: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    posttimename: {
        flexDirection: "row",
        alignItems: "center"
    },
    propst: {
        width: width * 0.12,
        height: height * 0.05,

    },
    tname: {
        fontSize: calculateFontSize(15),
        color: "#fff",
        fontWeight: "bold",
        marginHorizontal: width * 0.02,
        fontFamily:"Poppins",
    },
    tpostname: {
        fontSize: calculateFontSize(13),
        color: "#fff",
        marginHorizontal: width * 0.02,
        fontFamily:"Poppins",
    },
    savicon: {
        width: width * 0.12,
        height: height * 0.05,
    },
    payracontainer: {
        paddingVertical: height * 0.02,
    },
    descri: {
        fontSize: calculateFontSize(15),
        color: "#fff",
        // textTransform: "capitalize",
        fontFamily:"Poppins",
    },
    tnametitle: {
        fontSize: calculateFontSize(25),
        color: "#fff",
        fontWeight: "bold",
        fontFamily:"Poppins",
    },
    containjob: {
        backgroundColor: "#2BADA1",
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.02,
        borderRadius: 15,
        marginBottom: height * 0.02,
    },
    rep: {
        fontSize: calculateFontSize(25),
        color: "#fff",
        fontWeight: "bold",
        fontFamily:"Poppins",
    },
    ReplyCon: {

        flex: 1,
        // height:height*0.9,
        paddingHorizontal: width * 0.04,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor:"#104C47",
        paddingBottom:height*0.13,
        marginTop:height*0.03,


    },
    scrollstyle:{
        // borderTopLeftRadius: 30,
        // borderTopRightRadius: 30,
        // backgroundColor:"#104C47",
        // marginTop:height*0.03,
        // paddingHorizontal: width * 0.04,
        flex: 1,

    },
    Repicon: {

        flexDirection: "row",
        marginVertical: height * 0.02,
    },
    img: {

        width: width * 0.1,
        height: height * 0.045,
        backgroundColor: "#fff",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    txt: {
        marginHorizontal: width * 0.03,
        fontSize: calculateFontSize(18),
        fontWeight: "700",
        color: "#fff",
        fontFamily:"Poppins",
    },
    txttime: {
        marginHorizontal: width * 0.04,
        fontSize: calculateFontSize(12),
        fontWeight: "700",
        color: "#fff",
        fontFamily:"Poppins",

    },

    textrep: {

        fontSize: calculateFontSize(13),
        color: "#fff",
        fontFamily:"Poppins",
    },
    tump: {

        width: width * 0.06,
        height: height * 0.05
    },
    vote: {

        fontSize: calculateFontSize(15),
        fontWeight: "500",
        color: "#fff",
        fontFamily:"Poppins",
    },

    line: {

        borderBottomColor: "#fff",
        borderBottomWidth: 1
    },

    inpCon: {

        width: width * 0.75,
        backgroundColor: "#fff",
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    inp: {
     paddingLeft:width*0.05,
        color: "#000",
        // width: width * 0.75,
    },
    sent: {

        width: width * 0.12,
        height: height * 0.055,
        borderRadius: 30,
        backgroundColor: '#fff',
        marginHorizontal:width*0.019,
        alignItems: "center",
        justifyContent: "center",
        //   padding:2

    }
})