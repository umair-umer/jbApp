import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Modal, View, Text, ImageBackground, SafeAreaView, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
import Images from '../../config/im';
import { calculateFontSize } from '../../config/font';
import { CustomeButton, Inputcomponent, CustomeforgetHeader, CustomModal, CustomeHeader } from '../../Components';
import { useSelector } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import { baseprofileurl } from '../../config/utilities';
import { useFocusEffect } from '@react-navigation/native';
import Loader from '../../Components/Loader';

const { width, height } = Dimensions.get('window');
const NewsFeed = ({ navigation, onPress, route }) => {
    const [show, setshow] = useState(false)
    const [isModalVisible, setModalVisible] = useState(false);
    const [userData, setUserData] = useState({
        // name: '',
        // email: '',
        picture: "",
        // Add other user data properties here
    });
    const [isload, setload] = useState();

    const [posts, setPosts] = useState([]);
    const profileType = route.params
    console.log(route, "===>newsfeed");
    const { token } = useSelector((state) => state.auth); // Get the token from Redux store
    console.log(token, "reduxtokennewsfeed");
    const fetchUserData = async () => {
        setload(true)
        try {
            const response = await axios.get('https://jobbookbackend.azurewebsites.net/api/v1/jobbook/auth/profile', {
                headers: { "Authorization": `Bearer ${token}` },
            });
            // Update userData with the fetched data
            setUserData({ picture: response.data.data.picture });
            setload(false)
        } catch (error) {
            console.error('Error fetching user data:', error.response);
            setload(false)

        }
    };

    const fetchPosts = async () => {
        setload(true)

        try {
            const response = await axios.get('https://jobbookbackend.azurewebsites.net/api/v1/jobbook/talent/news/fetch', {
                headers: { "Authorization": `Bearer ${token}` },
            });
            setPosts(response.data.data);
        setload(false)

        } catch (error) {
            console.error('Error fetching post data:', error);
        setload(false)

        }
    };

    useFocusEffect(
        React.useCallback(() => {

            fetchUserData();
            fetchPosts();
            return () => {

            };
        }, [token])
    );

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        // console.log(isModalVisible);
    };


    const sliderData = Array.from({ length: 10 }, (_, index) => ({
        id: `slider_${index}`,
        offer: '50% off',
        description: 'Take any courses',
    }));


 

    const renderSliderItem = ({ item }) => (
        <View style={styles.sliedercontaintbox}>
            <View style={styles.texrtcontant}>
                <Text style={styles.offer}>{item.offer}</Text>
                <Text style={styles.offer}>{item.description}</Text>
                <TouchableOpacity style={styles.containr}>
                    <Text style={styles.textbutton}>Join Now</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.clientimage}>
                <Image resizeMode='contain' style={{ width: "100%", height: "100%" }} source={Images.client} />
            </View>
        </View>
    );
  
    //     // Fetch user data as before

    //     // Fetch post data
    //     const fetchPosts = async () => {
    //         try {
    //             const response = await axios.get('https://jobbookbackend.azurewebsites.net/api/v1/jobbook/talent/news/fetch', {
    //                 headers: {
    //                     "Authorization": `Bearer ${token}`,
    //                 },
    //             });
    //             setPosts(response.data.data);
    //             console.log(response.data.data, "====> newsdata");
    //             // If you want to log a specific item, ensure the array is not empty

    //         } catch (error) {
    //             console.error('Error fetching post data:', error);
    //         }
    //     };

    //     fetchPosts();
    // }, [token]);

    const renderPostItem = ({ item }) =>{
        const createdAtTimestamp = moment(item.createdAt)
        const currentTime = moment();
        const hoursAgo = currentTime.diff(createdAtTimestamp, 'hours');
        return(  (
            <View style={styles.postcontainermain}>
                <View style={styles.postcontainer}>
                    <View style={styles.mianrow}>
                        <View style={styles.gcontainer}>
                            <View style={styles.googimagecontainer}>
                                <Image resizeMode="contain" style={{ width: "100%", height: "100%" }} source={{ uri: `${baseprofileurl}${item.user.picture}` }} />
                            </View>
                            <View style={styles.texcontainer}>
                                <Text style={styles.gtext}>{item.user.name}</Text>
                                <View style={styles.timercontainer}>
                                    <View style={styles.timerimage}>
                                        <Image resizeMode="center" style={{ width: "100%", height: "100%" }} source={Images.timericon} />
                                    </View>
                                    <Text style={styles.gtextime}>{hoursAgo === 0 ? 'just now' : `${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.viewprocontainer}>
                            <View style={styles.proview}>
                                <Image style={{ width: "100%", height: "100%" }} resizeMode='center' source={Images.viewpro} />
                            </View>
                            <Text style={styles.vietext}>view profile</Text>
                        </View>
                    </View>
                    <View style={styles.typcontainer}>
                        <Text style={styles.textphyra}>
                            {item.description}{show ? <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco labo.</Text> : ""}<Text onPress={() => setshow(!show)}>{show ? `Read less` : `Readmore`}</Text>
                        </Text>
                    </View>
                    <View style={styles.googleaddscontainer}>
                        <Image resizeMode='center' style={{ width: "100%", height: "100%" }} source={{ uri: `${baseprofileurl}${item.picture}` }} />
                    </View>
                    <View>
                        <Text style={styles.googleques}>{item.title}</Text>
                        <Text style={styles.youlink}>{item.tags}</Text>
                    </View>
    
                </View>
                <View style={styles.feedbackcontainer}>
                    <View style={styles.pcontainer}>
                        <TouchableOpacity style={styles.hert} >
                            <Image resizeMode='center' style={{ width: "100%", height: "100%" }} source={Images.heart} />
                        </TouchableOpacity>
                        <Text style={styles.textfeed}>12</Text>
                    </View>
                    <View style={styles.pcontainer}>
                        <TouchableOpacity style={styles.hert} >
                            <Image resizeMode='center' style={{ width: "100%", height: "100%" }} source={Images.comenticon} />
                        </TouchableOpacity>
                        <Text style={styles.textfeed}>10</Text>
                    </View>
                </View>
            </View>
        ))
    }
    
  


    return (
        <>
            {isload ? <Loader /> : <SafeAreaView style={styles.container}>


                <CustomeHeader source={{ uri: `${baseprofileurl}${userData.picture}` }} title={"jobbooks"} iconsource1={Images.searchicon} onPressNotification={() => navigation.navigate('notifyscreen')} iconsource2={Images.notificationicon} iconsource3={Images.fobox} />
                <View>
                    <FlatList
                        data={sliderData}
                        renderItem={renderSliderItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={{ paddingBottom: 210 }}>

                    <FlatList
                        data={posts}
                        renderItem={renderPostItem}
                        keyExtractor={(item) => item.user._id}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                <TouchableOpacity onPress={toggleModal} style={styles.modalbutton}>
                    <Text style={styles.plus}>+</Text>
                </TouchableOpacity>
                <CustomModal home={true} isModalVisible={isModalVisible} onPress={toggleModal} onPressNewfeed={() => navigation.navigate("addnewfeedscreen")}
                    Addnewpost={() => { navigation.navigate("addnewfroumscreen") }}
                    onPressGeneratecv={() => navigation.navigate("oneverfy")}
                />
            </SafeAreaView>}
        </>

    )
}

export default NewsFeed
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#009A8C",
        padding: 10,
    },
    sliedercontaintbox: {
        backgroundColor: "#FF9228",
        width: width * 0.7,
        height: height * 0.150,
        flexDirection: "row",
        justifyContent: "space-between", borderRadius: 10,
        marginHorizontal: width * 0.01,
        marginVertical: height * 0.03

    },
    textbutton: {
        fontSize: calculateFontSize(10),
        fontWeight: "500",
        color: "#fff",
        textTransform: "capitalize",
        fontFamily: "Poppins",

    },
    containr: {
        backgroundColor: "#104C47",
        alignItems: "center",
        paddingVertical: height * 0.01,
        borderRadius: 5,
        marginTop: height * 0.02,
    },
    texrtcontant: {
        flexDirection: "column",
        paddingLeft: width * 0.03,
        paddingVertical: height * 0.02,

    },
    clientimage: {
        width: width * 0.35,
        height: height * 0.190,
        overflow: "hidden",
        top: -(width * 0.068),
    },
    offer: {
        fontSize: calculateFontSize(15),
        fontWeight: "500",
        color: "#fff",
        textTransform: "capitalize",
        fontFamily: "Poppins",

    },
    postcontainermain: {
        backgroundColor: "#fff",
        borderRadius: 20,
        marginVertical: height * 0.01
    },
    postcontainer: {

        padding: 20.26,

    },
    mianrow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    googimagecontainer: {
        width: width * 0.10,
        height: height * 0.05,
        overflow: "hidden",
        borderRadius: 100,

    },
    gcontainer: {
        flexDirection: "row",

    },
    texcontainer: {
        justifyContent: "flex-start",
        paddingHorizontal: width * 0.03,

    },
    gtext: {
        fontSize: calculateFontSize(15),
        fontWeight: "500",
        color: "#000",
        fontFamily: "Poppins",


    },
    gtextime: {
        fontSize: calculateFontSize(8),
        fontWeight: "500",
        color: "#AFAFAF",
        fontFamily: "Poppins",
        marginHorizontal:width*0.01,


    },
    timerimage: {
        width: width * 0.05,
        height: height * 0.02,
        overflow: "hidden",

    },
    timercontainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    proview: {
        width: width * 0.07,
        height: height * 0.07,

    },
    vietext: {
        fontSize: calculateFontSize(12),
        fontWeight: "500",
        color: "#434343",
        fontFamily: "Poppins",
        paddingHorizontal: width * 0.01,
        textTransform: "capitalize"
    },
    viewprocontainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        width: width * 0.33,
        height: height * 0.05,
        justifyContent: "center",
        paddingVertical: height * 0.003,
        borderColor: "#2BADA1",
        borderRadius: 10,
        paddingHorizontal: width * 0.02,
    },
    typcontainer: {
        // alignItems: "center",
        marginVertical: height * 0.02,
    },
    textphyra: {
        fontSize: calculateFontSize(12),
        fontWeight: "500",
        color: "#434343",
        textTransform: "capitalize",
        fontFamily: "Poppins",
    },
    googleaddscontainer: {
        width: width * 0.85,
        height: height * 0.22,
    },
    googleques: {
        fontSize: calculateFontSize(15),
        fontWeight: "500",
        color: "#000",
        fontFamily: "Poppins",
        textTransform: "capitalize"

    },
    youlink: {
        fontSize: calculateFontSize(15),
        fontWeight: "300",
        color: "#000",
        textTransform: "capitalize",
        fontFamily: "Poppins",

    },
    feedbackcontainer: {
        flexDirection: "row",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 10,
        backgroundColor: "#D9D9D9"
    },
    pcontainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: width * 0.03,
    },
    hert: {
        width: width * 0.05,
        height: height * 0.02,
        // backgroundColor:"red"
    },
    textfeed: {
        fontSize: calculateFontSize(12),
        fontWeight: "500",
        color: "#000",
        textTransform: "capitalize",
        marginHorizontal: width * 0.02,
        fontFamily: "Poppins",

    },
    modalbutton: {
        width: width * 0.2,
        height: height * 0.09,
        backgroundColor: "#009A8C",
        position: "absolute",
        bottom: height * 0.15,
        right: width * 0.07,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center", shadowColor: "#000",
        zIndex: 1,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 4,

    },
    plus: {
        fontSize: calculateFontSize(30),
        fontWeight: "500",
        color: "#fff",
        fontFamily: "Poppins",

    }


})