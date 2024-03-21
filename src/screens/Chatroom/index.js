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
import { base, baseprofileurl, basewithoutv1 } from '../../config/utilities';
import axios from 'axios';
const ChatRoom = ({ route, navigation }) => {

    const { token, userId } = useSelector((state) => state.auth);

    const chatId = route.params.Chatid;
    const [chatid, setchatid] = useState(route.params.Chatid);
    const otherparticepat = route.params.otherparticepat
    console.log("otherparticepat",otherparticepat);








    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([

    ]);
    console.log(message, "message");
    const scrollViewRef = useRef();
    const socket = useRef();
    useEffect(() => {
        const fetchChatHistory = async () => {
            const response = await axios.get(`${base}/chat/history/${chatId}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            console.log(response, "gdhjsadf");
            if (response.data.messages) {
                setMessages(response.data.messages);
            } else {
                setMessages([]);
            }
        };

        fetchChatHistory().catch(console.error);
    }, [token, chatId]);





    useEffect(() => {
        socket.current = io(basewithoutv1, {
            auth: { token: token },
        });
        socket.current.emit('JOIN_CHAT', chatId);
        socket.current.on('RECEIVE_MESSAGE', (message) => {
            setMessages(prevMessages => [...prevMessages, message]);

        });
       

       


        return () => {
            socket.current.disconnect();
        };
    }, [chatId, userId]);



    useEffect(() => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    }, [messages]);
    const handleSend = () => {
        console.log(chatId, "chatid", otherparticepat, "particenptid");


        socket.current.emit('SEND_MESSAGE', {
            chatId: chatid,
            senderId: userId,
            receiverId: otherparticepat,
            content: message
        }

        );
        setMessage('');

        console.log(message, "messagesmessages");
    };
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
                    contentContainerStyle={styles.chatContainer}>
                    {messages?.map((msg, index) => (
                        <View
                            key={index}
                            style={msg.senderId === userId ? styles.senderchat : styles.reciverchat}
                        >
                            <Text style={msg.senderId === userId ? styles.sendertext : styles.recivertext}>
                                {msg.content}
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