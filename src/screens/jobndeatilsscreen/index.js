import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ScrollView,View, Text, ImageBackground, SafeAreaView, StyleSheet, Image, Dimensions, TouchableOpacity, FlatList, TextInput } from 'react-native';
import Images from '../../config/im';
import { calculateFontSize } from '../../config/font';
import { CustomeButton, CustomeHeader } from '../../Components';
const { width, height } = Dimensions.get('window');
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'

import Ionicons from 'react-native-vector-icons/Ionicons'
import IMG from '../../assets/dp.png'
import ICON from '../../assets/icon.png'
import { useSelector } from 'react-redux';
const Jobdetail = ({ navigation ,route}) => {
    const {id}=route.params;
    console.log(id,"viewjobdetail");
    const { token, type } = useSelector((state) => state.auth);
 
    const [isSaved, setIsSaved] = useState(false); 
    const jobDetailsData = {
        title: 'Ux Designer',
        company: 'SumatoSoft',
        location: 'New York',
        experience: '3 years exp',
        jobType: 'Full time',
        postedAgo: '5 days ago',
        salary: '$25K/mo',
    };

    const userInformation = {
        name: 'James Brown',
        description: 'In a UX Designer job, you\'ll need both types of skills to develop the next generation of products. You\'ll partner with Researchers and Designers to define and deliver new features.',
    };

    const skillsRequirements = [
        '3 years experience',
        'Degree in Computer Science, Psychology, Design, or any other related fields.',
        'Proficiency in User Personas, Competitive Analysis, Empathy Maps, and Information Architecture.',
    ];
    const Role = [
        '8 years experience',
        'Degree in Computer Science, Psychology, Design, or any other related fields.',
        'Proficiency in User Personas, Competitive Analysis, Empathy Maps, and Information Architecture.',
    ];

    const RenderSkillsRequirements = ({ item }) => (
        <View style={styles.expflex}>
            <Entypo name='dot-single' />
            <Text style={styles.textdes}>{item}</Text>
        </View>
    );
    const handleToggleSave = async () => {
        try {
            let action = isSaved ? "unsave" : "save"; // Determine action based on current state
            const response = await axios.post(
                `https://jobbookbackend.azurewebsites.net/api/v1/jobbook/talent/home/saveToggle/${id}`,
                JSON.stringify({ action }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`, // Use your actual token
                    },
                }
            );
            console.log(response.data);
            setIsSaved(!isSaved); 
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ImageBackground style={styles.backgroundImage} source={Images.jsbg} resizeMode='cover'>
            <SafeAreaView style={styles.container}>
                {/* Header Section */}
                <View style={styles.hedr}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back" color="#fff" size={30} />
                    </TouchableOpacity>
                    <Text style={styles.headname}>Job Details</Text>
                    <TouchableOpacity style={styles.profileconainter} onPress={() => navigation.openDrawer()}>
                        <Image resizeMode='contain' style={{ width: "100%", height: "100%" }} source={Images.pro} />
                    </TouchableOpacity>
                </View>

                {/* Main Section */}
                <ScrollView showsVerticalScrollIndicator={false} >
                    {/* Job Details Section */}
                    <View style={styles.main}>
                        <View style={styles.uxCon}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: width * 0.04, alignItems: "center" }}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>

                                    <TouchableOpacity onPress={()=>navigation.navigate("companyprofile")} style={styles.img}>
                                        <Image
                                            source={IMG}
                                            style={{ width: "100%", height: "100%" }}
                                            resizeMode="center"
                                        />
                                    </TouchableOpacity>
                                    <View style={{ marginHorizontal: width * 0.02, marginVertical: height * 0.015 }}>
                                        <Text style={{ fontWeight: "700", color: "#fff", fontSize: calculateFontSize(14) }}>{jobDetailsData.title}</Text>
                                        <Text style={{ fontWeight: "700", color: "#fff", fontSize: calculateFontSize(12) }}>{jobDetailsData.company}</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.icon} onPress={handleToggleSave}>
                                    <Image
                                      source={isSaved?Images.saveicon :ICON}
                                        style={{ width: "100%", height: "100%",color:"black" }}
                                        resizeMode="center"
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: "row", marginVertical: height * 0.006, paddingHorizontal: width * 0.05 }}>
                                <View style={styles.location}>
                                    <Entypo name="location-pin" color={"#fff"} size={15} />
                                    <Text style={styles.loctxt}>
                                        {jobDetailsData.location}
                                    </Text>
                                </View>
                                <View style={styles.exp}>
                                    <Entypo name="graduation-cap" color={"#fff"} size={15} />
                                    <Text style={styles.loctxt}>
                                        {jobDetailsData.experience}
                                    </Text>
                                </View>
                                <View style={styles.time}>
                                    <Ionicons name="time-outline" size={15} color={"#fff"} />
                                    <Text style={styles.loctxt}>
                                        {jobDetailsData.jobType}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.btmm}>

                                <View style={{ flexDirection: "row" }}>
                                    <Entypo name="back-in-time" size={18} color={"#292929"} />
                                    <Text style={styles.txt1}>
                                        {jobDetailsData.postedAgo}
                                    </Text>
                                </View>

                                <View>
                                    <Text style={styles.txt}>
                                        {jobDetailsData.salary}
                                    </Text>
                                </View>

                            </View>

                        </View>

                    </View>



                    {/* User Information Section */}
                    <View style={styles.containerrep}>
                        <View style={styles.Repicon}>
                            <View style={styles.img}>
                                <MaterialIcons name="mode-edit-outline" color={"#2BADA1"} size={25} />
                            </View>
                            <Text style={styles.txttt}>{userInformation.name}</Text>
                        </View>
                        <View>
                            <Text style={styles.destext}>{userInformation.description}</Text>
                        </View>
                    </View>

                    {/* Skills & Requirements Section */}
                    <View style={styles.containerrep}>
                        <View style={styles.Repicon}>
                            <View style={styles.img}>
                                <Feather name="check-circle" color={"#2BADA1"} size={25} />
                            </View>
                            <Text style={styles.txttt}>Skills & Requirements</Text>
                        </View>
                        <FlatList
                            data={skillsRequirements}
                            renderItem={RenderSkillsRequirements}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                    <View style={styles.containerrep}>
                        <View style={styles.Repicon}>
                            <View style={styles.img}>
                                <Feather name="check-circle" color={"#2BADA1"} size={25} />
                            </View>
                            <Text style={styles.txttt}>Your Role</Text>
                        </View>
                        <FlatList
                            data={Role}
                            renderItem={RenderSkillsRequirements}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                        
</ScrollView>

       <View style={styles.btnbox}> 
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntxt}>
                Save
            </Text>
        </TouchableOpacity>
     
        <TouchableOpacity style={styles.btnn} onPress={()=>navigation.navigate('applyjobform',{id})}>
        <Text style={styles.btnntxt}> Apply this job</Text>
        </TouchableOpacity>

       </View>
              
            </SafeAreaView>
        </ImageBackground>
    )
}

export default Jobdetail
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between', // To create space between top and bottom items
    },
    hedr: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: height * 0.03,
        justifyContent: "space-between"
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
        borderWidth: 1,
        width: width * 0.13,
        height: height * 0.06,
        borderRadius: 100,
        padding: 3,
        borderColor: "#1EC5B6"
        // overflow:"hidden"
    },
    main: {

        // alignItems:"center"
    },
    uxCon: {

        width: width * 0.95,
        height: height * 0.24,
        backgroundColor: "#2BADA1",
        borderRadius: 20,
        opacity: 0.9,
        marginVertical: height * 0.03
    },
    img: {

        width: width * 0.09,
        height: height * 0.04,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginVertical: height * 0.02
    },
    icon: {

        width: width * 0.07,
        height: height * 0.05
    },
    location: {

        width: width * 0.26,
        height: height * 0.035,
        borderRadius: 20,
        borderColor: "#fff",
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderWidth: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",

    },
    loctxt: {

        fontSize: 12,
        fontWeight: "700",
        color: "#fff",
        marginHorizontal: width * 0.004
    },
    exp: {

        width: width * 0.26,
        height: height * 0.035,
        borderRadius: 20,
        borderColor: "#fff",
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderWidth: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        marginHorizontal: width * 0.01
    },
    time: {
        width: width * 0.26,
        height: height * 0.035,
        borderRadius: 20,
        borderColor: "#fff",
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderWidth: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        // marginHorizontal:width*0.0

    },
    btmm: {
        width: width * 0.95,
        height: height * 0.055,
        backgroundColor: "#fff",
        marginVertical: height * 0.069,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        // alignItems:"center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: width * 0.04,


    },

    txt: {
        fontSize: calculateFontSize(13),
        color: "#000",
        marginHorizontal: width * 0.01,
        color: "#104C47",
        fontWeight: "700"

    },
    txt1: {
        fontSize: calculateFontSize(13),
        color: "#292929",
        marginHorizontal: width * 0.01,
        fontWeight: "400"

    },
    containerrep: {
        backgroundColor: "#104C47",
        paddingHorizontal: width * 0.02,
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.02,
        borderRadius: 15,
        marginVertical: height * 0.01,
    },
    Repicon: {

        flexDirection: "row",
        marginVertical: height * 0.01,
        alignItems: "center"
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
        color: "#104C47",
        fontFamily: "Poppins",
    },
    txttt: {
        marginHorizontal: width * 0.03,
        fontSize: calculateFontSize(18),
        fontWeight: "700",
        color: "#fff",
        fontFamily: "Poppins",
    },
    destext: {
        fontSize: calculateFontSize(12),
        fontWeight: "300",
        color: "#fff",
        fontFamily: "Poppins",
    },
    textdes: {
        fontSize: calculateFontSize(12),
        fontWeight: "400",
        color: "#fff",
        fontFamily: "Poppins",

    },
    expflex: {
        flexDirection: "row",
        justifyContent: "flex-start"
    },

    btnbox:{
        width:width*0.93,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:10
    },
    btn:{
//    borderWidth:1,
   backgroundColor:"#2BADA1",
   padding:10,
   width:width*0.35,
   height:height*0.06,
   borderRadius:30,
   justifyContent:"center",
   alignItems:"center"
       
    },
    btnn:{

        // borderWidth:1,
        padding:10,
        width:width*0.46,
        height:height*0.06,
        borderRadius:30,
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center"
    
    },
    btntxt:{
        color:"#fff",
        fontSize:calculateFontSize(15),
        fontWeight:"400"
    },
    btnntxt:{
        color:"#28918F",
        fontSize:calculateFontSize(15),
        fontWeight:"400"
    }
})