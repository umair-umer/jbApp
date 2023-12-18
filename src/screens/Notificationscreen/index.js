import React, { useState } from 'react'
import { Dimensions, View, StyleSheet, Text, TextInput, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
const { width, height } = Dimensions.get("window")
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { calculateFontSize } from '../../config/font'
import { CustomeHeader } from '../../Components'

function Notificationscreen({navigation,onPress}) {


    const massegeData = [
        {
            id: 1,
            icon: 'send',
            color: '#0BA0FF',
            title: 'Application sent to Twitter',
            description: 'Applications for the position of UI/UX Designer have been submitted to be shortlisted',
            timestamp: 'March 28 2022, 1:03 PM',
        },
        // {
        //     id: 2,
        //     icon: 'send',
        //     color: '#0BA0FF',
        //     title: 'Application sent to Twitter',
        //     description: 'Applications for the position of UI/UX Designer have been submitted to be shortlisted',
        //     timestamp: 'March 28 2022, 1:03 PM',
        // },

        // Add more notification data as needed
    ];
    const NotificationItem = ({ item }) => (
        <View style={styles.Notmain}>
            <View style={styles.container}>
                <View style={styles.userinfo}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={styles.Iconcon}>
                            <FontAwesome name={item.icon} size={23} color={item.color} />
                        </View>
                        <View style={styles.txtcon}>
                            <Text style={styles.heading}>{item.title}</Text>
                            <Text style={styles.nottext}>{item.description}</Text>
                            <Text style={styles.nottext}>{item.timestamp}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );


    const notificationsData = [
        {
            id: 1,
            image: require('../../assets/folderIconnn.png'),
            color: '#fff',
            title: 'Apply to the shortlist Google!',
            description: 'Applications for the position of UI/UX Designer have been submitted to be shortlisted',
            timestamp: 'March 8 2022, 6:25 AM',
        },
        {
            id: 2,
            image: require('../../assets/CrossIcon.png'),
            color: '#fff',
            title: 'Application is not on shortlist Facebook!',
            description: 'Applications for UI/UX Designer positions did not make the shortlist',
            timestamp: 'March 8 2022, 6:25 AM',
        },
        {
            id: 3,
            image: require('../../assets/Findjob.png'),
            color: '#fff',
            title: 'New job Matches on December!',
            description: 'Take a look at some of the newest jobs in December, hopefully there\'s one that matches your profile',
            timestamp: 'March 8 2022, 6:25 AM',
        },
        {
            id: 4,
            image: require('../../assets/displayIcon.png'),
            color: '#fff',
            title: 'Enter the interview list on Figma!',
            description: 'Applications for the position of UI/UX Designer have been shortlisted for interviews',
            timestamp: 'March 8 2022, 6:25 AM',
        },
        // Add more notification data as needed
    ];

    const renderNotificationItem = ({ item }) => {
        let IconComponent;
        switch (item.iconType) {
            case 'FontAwesome':
                IconComponent = FontAwesome;
                break;
            case 'Fontisto':
                IconComponent = Fontisto;
                break;
            case 'Entypo':
                IconComponent = Entypo;
                break;

            case 'FontAwesome6':
                IconComponent = FontAwesome6;
                break;

            case 'MaterialIcons':
                IconComponent = MaterialIcons;
                break;
            // Add more cases for other icon types if needed
            default:
                IconComponent = FontAwesome;
        }

        return (
            <View style={styles.containermonth}>
                <View style={styles.userinfo}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View
                            style={[
                                styles.Iconcon,
                                { backgroundColor: item.color, overflow: "hidden" },
                            ]}
                        >
                            <Image
                                source={item.image}
                                style={{ width: '60%', height: '50%' }}
                                resizeMode="center"
                            />
                        </View>
                        <View style={styles.txtcon}>
                            <Text style={styles.heading}>{item.title}</Text>
                            <Text style={styles.nottext}>{item.description}</Text>
                            <Text style={styles.nottext}>{item.timestamp}</Text>
                        </View>
                    </View>
                </View>
                {item.id !== notificationsData.length && (
                    <View style={{ borderBottomWidth: 1, borderColor: "#fff", opacity: 0.4 }}></View>
                )}
            </View>
        );
    };

    return (
        <View style={styles.main}>
            <View style={styles.header}>
         
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    
                <TouchableOpacity
                onPress={()=>navigation.goBack()}
                >
            <AntDesign name="left" color={"#fff"} size={22}/>        
            </TouchableOpacity>
                    
                    <View>

                        <Text style={styles.heading}>
                            Notification
                        </Text>
                    </View>

                    <TouchableOpacity>
                        <Entypo name='dots-three-horizontal' size={20} color={"#fff"} />
                    </TouchableOpacity>


                </View>

            </View>

            <View style={styles.subshead}>
                <View style={styles.subheading}>
                    <Text style={styles.heading}>
                        New
                    </Text>
                </View>

            </View>


            <FlatList
                showsVerticalScrollIndicator={false}
                data={massegeData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <NotificationItem item={item} />}
            />


            <View style={styles.subshead}>
                <View style={styles.subheading}>
                    <Text style={styles.heading}>
                        This month
                    </Text>
                </View>

            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.container1}>

                <FlatList
                    data={notificationsData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderNotificationItem}
                />
                <View style={{ borderBottomWidth: 1, borderColor: "#fff", opacity: 0.4 }}>
                </View>
            </ScrollView>



        </View>

    )
}

const styles = StyleSheet.create({

    main: {

        flex: 1,
        backgroundColor: "#1B5953",

    },
    header: {

        height: height * 0.1,
        paddingHorizontal: width * 0.04,
        justifyContent: "center",
    },
    heading: {
        fontWeight: "600",
        color: "#fff",
        fontSize:calculateFontSize(14)
    },
    nottext: {
        color: "#fff",
        fontWeight: "600",
        fontSize: calculateFontSize(12),
        marginVertical: height * 0.002,
    },
    icon: {

        color: "#fff"
    },
    subheading: {

        justifyContent: "center",
        paddingHorizontal: width * 0.05,
        marginVertical: height * 0.01


    },


    container: {
        width: width * 1,
        height: height * 0.16,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        // marginVertical: height * 0.01
    },
    containermonth: {
        flex: 1,
        height: height * 0.14,
        marginVertical: height * 0.014
    },
    userinfo: {
        marginVertical: height * 0.09,
        alignItems: "center",
    },

    Iconcon: {
        width: width * 0.15,
        height: height * 0.07,
        backgroundColor: "#fff",
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    txtcon: {
        width: width * 0.75,
        height: height * 0.11,
        paddingHorizontal: width * 0.04,
        justifyContent: "center",
    },




})


export default Notificationscreen