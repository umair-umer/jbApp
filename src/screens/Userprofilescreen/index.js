import React, { useState,useEffect } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
const { width, height } = Dimensions.get("window");
import { calculateFontSize } from '../../config/font';
import Feather from 'react-native-vector-icons/dist/Feather';
import Images from '../../config/im';
import DocumentPicker from 'react-native-document-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { baseprofileurl } from '../../config/utilities';

const Profilescreen = ({ navigation,route }) => {
 
    const [show, setshow] = useState(false)
    const [selectedTab, setSelectedTab] = useState('About_me');
    const [uploadedDocument, setUploadedDocument] = useState('');
    const [attachedCertificate, setAttachedCertificate] = useState('');
    const { token } = useSelector((state) => state.auth); 
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        picture:"",
        phone:""
        // Add other user data properties here
      });
    
      useEffect(() => {
        // Make an Axios GET request to your API endpoint with the token
        axios
          .get('https://jobbookbackend.azurewebsites.net/api/v1/jobbook/auth/profile', {
            headers: {
              "Authorization": `Bearer ${token}`,
            },
          })
          .then((response) => {
            console.log(response.data.data,"====>getprofile")
            // Handle the successful response and update userData state
            // const { name, email ,picture} = response.data.data; // Update this with your actual response structure
            const name= response.data.data.name;
            const email= response.data.data.email;
            const picture= response.data.data.picture;
            const phone= response.data.data.phone;
            phone
            setUserData({ name, email ,picture,phone});
          })
          .catch((error) => {
            // Handle any errors here
            console.error('Error fetching user data:', error);
          });
      }, [token]);
    const handleTabPress = (tab) => {
        setSelectedTab(tab);
    };
    const renderTabContent = () => {
        switch (selectedTab) {
            case 'About_me':
                return (

                    <View style={{ paddingHorizontal: width * 0.03, }}>
                        <View style={styles.aboutparacontainer}>
                            <Text style={styles.aboutmehead}>about me</Text>
                            <Text style={styles.textpara}>I am a dedicated and vigilant security professional with a strong commitment to ensuring the safety and security of people and property.{show ? <Text style={styles.textpara}>I am a dedicated and vigilant security professional with a strong commitment to ensuring the safety and security of people and property</Text> : null}<Text style={styles.readmore} onPress={() => setshow(!show)}> Read More</Text> </Text>
                        </View>


                        <View style={styles.skillscontainer}>
                            <View >
                                <Text style={styles.aboutmehead}>Skills</Text>
                            </View>
                            <TouchableOpacity>
                                <Feather name="edit" color="#fff" size={calculateFontSize(20)} onPress={() => navigation.navigate('myprofileditskillsscreen')} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.skillpoincontainer}>
                            <View style={styles.skilsscon}>
                                <Text style={styles.skilltext}>Software Engineer</Text>
                            </View>
                            <View style={styles.skilsscon}>
                                <Text style={styles.skilltext}>Communication</Text>
                            </View>
                            <View style={styles.skilsscon}>
                                <Text style={styles.skilltext}>Self-Defense</Text>
                            </View>
                            <View style={styles.skilsscon}>
                                <Text style={styles.skilltext}>Conflict Resolution</Text>
                            </View>
                            <View style={styles.skilsscon}>
                                <Text style={styles.skilltext}>Teamwork</Text>
                            </View>
                            <View style={styles.skilsscon}>
                                <Text style={styles.skilltext}>Valid Security License</Text>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: width * 0.02 }}>
                            <Text style={styles.workexperdive}>work experience </Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <View style={styles.wrkexperience}>
                                    <View style={styles.dpPic}>
                                        <Image resizeMode="center" source={Images.user} style={styles.img} />
                                    </View>
                                    <View style={{ paddingHorizontal: width * 0.03, }}>
                                        <Text style={styles.aboutmehead}>Gate Guard</Text>
                                        <Text style={styles.wrkexp}>PeopleReady Eagle Pass, TX</Text>
                                        <Text style={styles.wrkexp}>Dec 2022 - Present</Text>
                                    </View>

                                </View>

                                <TouchableOpacity
                                    onPress={() => navigation.navigate("myprofileditexperiancescreen")}
                                >
                                    <Feather name="edit" color="#fff" size={calculateFontSize(20)} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ borderBottomWidth: 1, marginVertical: height * 0.04, borderBottomColor: "#fff" }}></View>




                        </View>

                    </View>

                );
            case 'Post':
                return (

                    <View style={{ paddingHorizontal: width * 0.03, }}>

                        <View style={{ paddingHorizontal: width * 0.02 }}>
                            {/* <Text style={styles.workexperdive}>work experience </Text> */}
                            <View style={{ borderBottomWidth: 1, marginVertical: height * 0.02, borderBottomColor: "grey" }}></View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <View style={styles.wrkexperience}>
                                    <View style={styles.dpPic}>
                                        <Image resizeMode="center" source={Images.user} style={styles.img} />
                                    </View>
                                    <View style={{ paddingHorizontal: width * 0.03, }}>
                                        <Text style={styles.aboutmehead}>Gate Guard</Text>
                                        <Text style={styles.wrkexp}>PeopleReady Eagle Pass, TX</Text>
                                        <Text style={styles.wrkexp}>Dec 2022 - Present</Text>
                                    </View>

                                </View>

                                <TouchableOpacity
                                    onPress={() => navigation.navigate("workedit")}
                                >
                                    <Feather name="edit" color="#fff" size={calculateFontSize(20)} />
                                </TouchableOpacity>
                            </View>





                        </View>

                        <View style={{ padding: 10 }}>
                            <Text style={styles.cvtxt}>
                                My CV’s
                            </Text>
                        </View>

                        <View style={styles.uploadSection}>
                            <TouchableOpacity style={styles.uploadButton} onPress={() => handleDocumentPick('uploadDocument')}>
                                <Image source={Images.Iconupload} style={styles.iconImage} />
                                <Text style={styles.uploadButtonText}>{uploadedDocument ? 'Document Selected' : 'upload cv'}</Text>
                            </TouchableOpacity>
                        </View>


                        <TouchableOpacity style={styles.cvbtn}>
                            <View>
                                <FontAwesome5 name="crown" color={"#FFB545"} size={15} />
                            </View>
                            <View >
                                <Text style={styles.cvtxtt}>
                                    Generate Pro cv
                                </Text>
                            </View>
                        </TouchableOpacity>


                    </View>

                );
            case 'Jobs':
                return (

                    <View style={{ paddingHorizontal: width * 0.03, }}>

                        <View style={{ padding: 10 }}>
                            <Text style={styles.cvtxt}>
                                I’m Looking For
                            </Text>

                            <Text style={styles.cvtxtt}>
                                I’m open for headhunting from companies
                                those offers match the following criteria.
                            </Text>
                        </View>

                        <View style={{ borderBottomWidth: 0.2, marginVertical: height * 0.02, borderBottomColor: "#fff" }}></View>

                        <View style={{ height: height * 0.07, flexDirection: "row", paddingHorizontal: width * 0.03, alignItems: "center" }}>
                            <View style={styles.iconimg}>
                                <Image source={Images.Icon} style={{ width: "100%", height: "100%" }} resizeMode='center' />
                            </View>
                            <View style={{ marginHorizontal: width * 0.04 }}>
                                <Text style={styles.cvtxtt}>
                                    offers for
                                </Text>
                            </View>
                        </View>
                        <View style={{ borderBottomWidth: 0.2, marginVertical: height * 0.02, borderBottomColor: "#fff" }}></View>

                        <View style={{ height: height * 0.07, flexDirection: "row", paddingHorizontal: width * 0.03, alignItems: "center" }}>
                            <View style={styles.iconimg}>
                                <Image source={Images.Icon2} style={{ width: "100%", height: "100%" }} resizeMode='center' />
                            </View>
                            <View style={{ marginHorizontal: width * 0.04 }}>
                                <Text style={styles.cvtxtt}>
                                    My specialties are
                                </Text>
                            </View>
                        </View>
                        <View style={{ borderBottomWidth: 0.2, marginVertical: height * 0.02, borderBottomColor: "#fff" }}></View>


                        <View style={{ height: height * 0.07, flexDirection: "row", paddingHorizontal: width * 0.03, alignItems: "center" }}>
                            <View style={styles.iconimg}>
                                <Image source={Images.Icon3} style={{ width: "100%", height: "100%" }} resizeMode='center' />
                            </View>
                            <View style={{ marginHorizontal: width * 0.04 }}>
                                <Text style={styles.cvtxtt}>
                                    And im experienced in
                                </Text>
                            </View>
                        </View>
                        <View style={{ borderBottomWidth: 0.2, marginVertical: height * 0.02, borderBottomColor: "#fff" }}></View>

                        <View style={{ height: height * 0.07, flexDirection: "row", paddingHorizontal: width * 0.03, alignItems: "center" }}>
                            <View style={styles.iconimg}>
                                <Image source={Images.Icon4} style={{ width: "100%", height: "100%" }} resizeMode='center' />
                            </View>
                            <View style={{ marginHorizontal: width * 0.04 }}>
                                <Text style={styles.cvtxtt}>
                                    my level is
                                </Text>
                            </View>
                        </View>
                        <View style={{ borderBottomWidth: 0.2, marginVertical: height * 0.02, borderBottomColor: "#fff" }}></View>

                        <View style={{ height: height * 0.07, flexDirection: "row", paddingHorizontal: width * 0.03, alignItems: "center" }}>
                            <View style={styles.iconimg}>
                                <Image source={Images.Icon5} style={{ width: "100%", height: "100%" }} resizeMode='center' />
                            </View>
                            <View style={{ marginHorizontal: width * 0.04 }}>
                                <Text style={styles.cvtxtt}>
                                    My minimum required salary is
                                </Text>
                            </View>
                        </View>
                        <View style={{ borderBottomWidth: 0.2, marginVertical: height * 0.02, borderBottomColor: "#fff" }}></View>

                        <View style={{ height: height * 0.07, flexDirection: "row", paddingHorizontal: width * 0.03, alignItems: "center" }}>
                            <View style={styles.iconimg}>
                                <Image source={Images.Icon6} style={{ width: "100%", height: "100%" }} resizeMode='center' />
                            </View>
                            <View style={{ marginHorizontal: width * 0.04 }}>
                                <Text style={styles.cvtxtt}>
                                    located in
                                </Text>
                            </View>
                        </View>
                        <View style={{ borderBottomWidth: 0.2, marginVertical: height * 0.02, borderBottomColor: "#fff" }}></View>
                    </View>

                );

            default:
                return null;
        }
    };
    const handleDocumentPick = async (field) => {
        try {
            const result = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });

            // Set the picked document to the appropriate state based on the field
            if (field === 'uploadDocument') {
                setUploadedDocument(result.uri); // You may want to use 'result.uri' to display or upload later
            } else if (field === 'attachCertificate') {
                setAttachedCertificate(result.uri); // You may want to use 'result.uri' to display or upload later
            }
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker
            } else {
                console.error('Error picking document: ', err);
            }
        }
    };


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.bgresi}>

                <ImageBackground resizeMode='cover' style={[{ width: "100%", height: "100%", }, styles.bg]} source={Images.Profileimgbg}>
                
                <View style={{paddingVertical:height*0.02,paddingHorizontal:width*0.03}}>
                <TouchableOpacity
                onPress={()=>navigation.goBack()}>
            <AntDesign name="left" color={"#fff"} size={22}/>        
            </TouchableOpacity>
                </View>
                    <View style={styles.heder}>
                       
                        <Text style={styles.profiletextheader}>Profile</Text>

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: width * 0.04 }}>
                        <View style={styles.prof}>
                            <View style={styles.profileimage}>
                                <Image resizeMode='cover' style={{ width: "1005", height: "100%" }} source={{uri:`${baseprofileurl}${userData.picture}`}} />
                            </View>
                            <View style={{ marginHorizontal: width * 0.05 }}>
                                <Text style={styles.prname}>{userData.name}</Text>
                                <Text style={styles.premail}>{userData.email}</Text>
                                <Text style={styles.prnumb} >{userData.phone}</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <AntDesign name="setting" color="#fff" size={calculateFontSize(22)} onPress={() => navigation.navigate('userprofilesetting')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: width * 0.04, marginTop: height * 0.02, }}>
                        <View style={styles.vbgcon}><Text style={styles.probgtext}>80</Text><Text style={styles.probgtext}>Job Applied</Text></View>
                        <View style={styles.vbgcon1}><Text style={styles.probgtext}>19/20/2023</Text><Text style={styles.probgtext}>member Since</Text></View>

                        <View style={styles.vbgcon}><Text style={styles.probgtext}>30</Text><Text style={styles.probgtext}>interview</Text></View>

                    </View>

                </ImageBackground>
            </View>
            <View style={{ marginTop: height * 0.02, alignItems: "center" }}>
                <View style={styles.tabcontainer}>
                    <TouchableOpacity
                        style={[
                            styles.tabtextcontainer,
                            selectedTab === 'About_me' && { backgroundColor: "#2BADA1", },
                        ]}
                        onPress={() => handleTabPress('About_me')}


                    ><Text style={styles.tab}>About Me</Text></TouchableOpacity>
                    <TouchableOpacity style={[
                        styles.tabtextcontainer,
                        selectedTab === 'Post' && { backgroundColor: "#2BADA1", },
                    ]}
                        onPress={() => handleTabPress('Post')}><Text style={styles.tab}>Post</Text></TouchableOpacity>
                    <TouchableOpacity style={[
                        styles.tabtextcontainer,
                        selectedTab === 'Jobs' && { backgroundColor: "#2BADA1", },
                    ]}
                        onPress={() => handleTabPress('Jobs')}><Text style={styles.tab}>Jobs</Text></TouchableOpacity>
                </View>


            </View>
            <ScrollView>

                {renderTabContent()}
            </ScrollView>


        </SafeAreaView>
    )
}

export default Profilescreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(0,154,140)"


    },
    bgresi: {
        width: width,
        height: height * 0.3,
        backgroundColor: "rgb(0,154,140)",
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        overflow:"hidden",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,

    },
    heder: {
        paddingVertical: height * 0.01,
        // paddingHorizontal:width*0.04,
        justifyContent: "center",
        alignItems: "center"
    },
    profiletextheader: {
        color: "#fff",
        fontSize: calculateFontSize(18),
        textTransform: "capitalize",
        fontFamily: "Poppins",
        fontWeight: "700",
        
    },
    profileimage: {
        width: width * 0.20,
        height: height * 0.10,
        overflow: "hidden",
        borderRadius: 100,
        ...Platform.select({
            ios: {
                width: width * 0.32,
                height: height * 0.18,
                overflow: "hidden",
                borderRadius: 100,

            },
        },),
    },
    prof: {
        flexDirection: "row"
    },
    prname: {
        color: "#fff",
        fontSize: calculateFontSize(20),
        textTransform: "capitalize",
        fontFamily: "Poppins",
        fontWeight: "700"
    },
    premail: {
        marginTop: height * 0.01,
        color: "#fff",
        fontSize: calculateFontSize(13),
        textTransform: "capitalize",
        fontFamily: "Poppins",
        // fontWeight:"700"
    },
    prnumb: {
        color: "#fff",
        fontSize: calculateFontSize(13),
        textTransform: "capitalize",
        fontFamily: "Poppins",
        // fontWeight:"700"
    },
    vbgcon: {
        justifyContent: "center",
        alignItems: "center",

        paddingHorizontal: width * 0.03,

    },
    vbgcon1: {
        justifyContent: "center",
        alignItems: "center",
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "#fff",
        paddingHorizontal: width * 0.09,
    },
    probgtext: {
        color: "#fff",
        fontSize: calculateFontSize(13),
        textTransform: "capitalize",
        fontFamily: "Poppins",
    },
    aboutmehead: {
        color: "#fff",
        fontSize: calculateFontSize(25),
        textTransform: "capitalize",
        fontFamily: "Poppins",
        fontWeight: "700"
    },
    workexperdive: {
        color: "#fff",
        fontSize: calculateFontSize(25),
        textTransform: "capitalize",
        fontFamily: "Poppins",
        fontWeight: "700",
        marginTop: height * 0.03,
    },
    textpara: {
        color: "#fff",
        fontSize: calculateFontSize(13),
        textTransform: "capitalize",
        fontFamily: "Poppins",
    },
    aboutparacontainer: {
        // paddingHorizontal: width * 0.03,
        paddingVertical: height * 0.03,
        borderBottomWidth: 1,
        borderBottomColor: "#CACACA"
    },
    readmore: {
        color: "#2BADA1",
        fontSize: calculateFontSize(13),
        textTransform: "capitalize",
        fontFamily: "Poppins",
    },
    skillscontainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: height * 0.02,
    },
    skillpoincontainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        borderBottomWidth: 1,
        borderBottomColor: "#CACACA",
        paddingBottom: height * 0.02,
        paddingTop: height * 0.02,
    },
    skilsscon: {
        backgroundColor: '#3C948B',
        marginHorizontal: width * 0.01,
        padding: 5,
        marginVertical: height * 0.009,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 4,
    },
    skilltext: {
        color: "#fff",
        fontSize: calculateFontSize(12),
        textTransform: "capitalize",
        fontFamily: "Poppins",
        fontWeight: "300"
    },
    dpPic: {

        width: width * 0.15,
        height: height * 0.06,
        backgroundColor: "#ffff",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",

    },

    img: {
        width: "100%",
        height: "100%",
    },
    wrkexperience: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: height * 0.02,

    },
    wrkexp: {
        color: "#fff",
        fontSize: calculateFontSize(13),
        textTransform: "capitalize",
        fontFamily: "Poppins",

    },
    badgeimagecontainer: {
        width: width,
        height: height * 0.35,
        // paddingVertical:height*0.03,


    },
    badgeimagecontainerpareent: {
        width: width,
        height: height * 0.25,
        backgroundColor: "#EAEAEA",
        justifyContent: "center",
        alignItems: "center"
    },
    idimage: {
        width: width,
        height: height * 0.2,
        overflow: "hidden",
        right: width * 0.05,
    },
    btcontainer: {
        bottom: height * 0.05,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    btn: {

        width: width * 0.9,
        height: height * 0.06,
        backgroundColor: "#206CB3",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: width * 0.04,
        borderRadius: 10
    },
    iconbtn: {

        flexDirection: "row",

    },
    tabsmain: {
        paddingHorizontal: width * 0.04,
        marginVertical: height * 0.02
    },

    txttabs: {
        color: "#fff",
        fontSize: calculateFontSize(12),
        fontWeight: "500"
    },

    tabscon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 15,
        padding: 10,
        backgroundColor: '#104C47',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedTab: {
        height: height * 0.04,
        backgroundColor: '#2BADA1', // Apply selected tab background color
        borderRadius: 10,
    },
    selectedTabText: {
        color: '#fff', // Apply selected tab text color
    },
    tabcontainer: {
        backgroundColor: "#104C47",
        flexDirection: "row",
        width: width * 0.92,
        justifyContent: "space-between",
        paddingHorizontal: width * 0.03,
        paddingVertical: height * 0.005,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    tab: {
        color: "#FFf",
        fontSize: calculateFontSize(15),
        fontFamily: "Poppins",
    },
    tabtextcontainer: {

        width: width * 0.25,
        alignItems: "center",
        height: height * 0.04,
        justifyContent: "center",
        borderRadius: 5,
    },
    dpPic: {

        width: width * 0.15,
        height: height * 0.06,
        backgroundColor: "#ffff",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",

    },

    img: {
        width: "100%",
        height: "100%",
    },
    uploadSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: '#fff',
        borderRadius: 5,
        padding: height * 0.06,
        marginTop: height * 0.019,
    },
    uploadButton: {
        flex: 1,
    },
    uploadButtonText: {
        color: '#fff',
        fontWeight: '400',
        textAlign: "center",
        fontSize: calculateFontSize(16)

    },
    iconImage: {

        width: 24,
        height: 24,
        marginHorizontal: width * 0.3
    },
    cvtxt: {

        fontSize: calculateFontSize(16),
        color: "#fff",
        fontWeight: "600"
    },
    cvbtn: {

        backgroundColor: "#2BADA1",
        width: width * 0.94,
        height: height * 0.07,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderCurve: "circular",
        borderRadius: 30,
        flexDirection: "row",
        marginVertical: height * 0.02

    },
    cvtxtt: {

        fontSize: calculateFontSize(14),
        color: "#fff",
        fontWeight: "400",
        marginHorizontal: width * 0.008
    },
    iconimg: {

        width: width * 0.06,
        height: height * 0.03
    }

})