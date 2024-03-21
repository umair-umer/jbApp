import React, { useState, useRef, useEffect } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';
import { calculateFontSize } from '../../config/font';
const { width, height } = Dimensions.get("window");
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import InputText from '../../Components/inputText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { io } from 'socket.io-client';
import { useSelector } from 'react-redux';
import { baseprofileurl } from '../../config/utilities';

const ChatRoom = ({ route, navigation }) => {
    // const { senderName } = route?.params;
    const { token, userId } = useSelector((state) => state.auth);
    // console.log(userId, "chatwaliscree");
    const chat = route.params.chat
    const [chatdata, setchatData] = useState(chat)

    console.log(chatdata.participants, "hysdgsdjh");
        
    const SERVER_URL = baseprofileurl;
    const TOKEN = token; // 

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        // Initial messages here if any
    ]);
    const scrollViewRef = useRef();
    const socket = useRef(null);

    useEffect(() => {
        socket.current = io(SERVER_URL, {
            auth: {
                token: TOKEN, // Pass token here if your server requires authentication
            },
        });

        socket.current.on("RECEIVE_MESSAGE", (newMessage) => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            Alert.alert("Message Status", "Message sent successfully!");
        });


        return () => {
            socket.current.disconnect();
        };
    }, []);

    const handleSend = () => {
        if (message) {
            const userId = userId; // Your user's ID needs to be set here

            const receiverId = chatdata.participants.find((participant) => participant !== userId);

            console.log(receiverId,"reciverid");
            const newMessage = { text: message, isSender: true };
            socket.current.emit("SEND_MESSAGE", {
                chatId: chatdata._id,
                senderId: userId,
                receiverId:receiverId,
                content: newMessage


            }); // Modify according to your backend's expected format
            setMessages([...messages, newMessage]);
            setMessage(''); // Clear the input field after sending
        }
    };
    // Scroll to the bottom when messages change or on initial render
    useEffect(() => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    }, [messages]);
    const endVideoCall = () => {
        if (peerConnection.current) {
            peerConnection.current.close();
        }
        if (localStream) {
            localStream.release();
        }
        // Reset state
        setLocalStream(null);
        setRemoteStream(null);
        peerConnection.current = null;
    };
    const handleVideocall = () => {
        navigation.navigate("videocallscreen")
    }
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.hedr} >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" color="#fff" size={30} />
                </TouchableOpacity>

                <Text style={styles.headname}>Messages</Text>

                <TouchableOpacity onPress={handleVideocall} >
                    <MaterialCommunityIcons name="video-outline" size={30} color={'white'} />
                </TouchableOpacity>


            </View>

            <View style={{ flex: 1, paddingVertical: height * 0.03, }}>
                <ScrollView
                    ref={scrollViewRef}
                    contentContainerStyle={styles.chatContainer}
                >
                    {messages.map((msg, index) => (
                        <View
                            key={index}
                            style={msg.isSender ? styles.senderchat : styles.reciverchat}
                        >
                            <Text style={msg.isSender ? styles.sendertext : styles.recivertext}>
                                {msg.text}
                            </Text>
                        </View>
                    ))}
                </ScrollView>


            </View>
            <View style={styles.inputchatcontainer}>
                <View style={styles.inputcontainer}><InputText value={message}
                    onChangeText={(text) => setMessage(text)}
                    placeholder="Type a message" /></View>
                <TouchableOpacity style={styles.iconsendcontainer} onPress={handleSend}>
                    <FontAwesome name="send" size={calculateFontSize(23)} color="#009A8C" />
                </TouchableOpacity>
                <TouchableOpacity onPress={endVideoCall}>
                    {/* <Text>End Call</Text> */}
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default ChatRoom
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#009A8C",
        paddingHorizontal: width * 0.02

    },

    recivertext: {
        color: "#fff",
        fontSize: calculateFontSize(15),
        textTransform: "capitalize",
        fontFamily: "Poppins"
    },
    senderchat: {
        width: width * 0.8,
        backgroundColor: "#F1F1F1",
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.01,

        borderRadius: 10,

        marginVertical: height * 0.02,
        borderTopRightRadius: 0
    },
    sendertext: {
        color: "#9E9E9E",
        fontSize: calculateFontSize(15),
        textTransform: "capitalize",
        fontFamily: "Poppins"
    },
    inputchatcontainer: {
        flexDirection: "row",
        alignItems: "center",
        // justifyContent:"space-between"
    },
    inputcontainer: {
        width: width * 0.8
    },
    iconsendcontainer: {
        width: width * 0.15,
        height: height * 0.07,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        marginLeft: width * 0.01,
    },
    chatContainer: {
        flexGrow: 1,
        paddingVertical: height * 0.03,
        alignItems: 'flex-end',
    },
    reciverchat: {
        width: width * 0.8,
        backgroundColor: "#1C75BC",
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.01,
        borderRadius: 10,
        borderTopLeftRadius: 0,
        marginBottom: height * 0.01,
    },
    hedr: {
        flexDirection: "row",
        marginVertical: height * 0.03,
        alignItems: "center",
        // justifyContent:"center",

    },
    headname: {
        fontSize: calculateFontSize(15),
        fontWeight: "bold",
        color: "#fff",
        textTransform: "capitalize",
        // alignItems:"center",
        // justifyContent:"center",
        marginHorizontal: width * 0.3,
        fontFamily: "Poppins",


    },
})