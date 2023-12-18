import React, { useState, useRef, useEffect } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';
import { calculateFontSize } from '../../config/font';
const { width, height } = Dimensions.get("window");
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import InputText from '../../Components/inputText';
import Ionicons from 'react-native-vector-icons/Ionicons';
const ChatRoom = ({ route,navigation }) => {
    const { senderName } = route.params;

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        // Initial messages here if any
    ]);
    const scrollViewRef = useRef();
    const handleSend = () => {
        if (message) {
            const newMessage = { text: message, isSender: true };
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
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.hedr} >
            <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back" color="#fff" size={30} />
                    </TouchableOpacity>
                 
                    <Text style={styles.headname}>Messages</Text>
            
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

                {/* <View style={styles.Reciverchat}>
                    <Text style={styles.recivertext}>The main body of matter in a manuscript, book,
                    </Text>
                </View>
      
            <View style={{ alignItems: 'flex-end' }}>
                <View style={styles.senderchat}>
                    <Text style={styles.sendertext}>The main body of matter in a manuscript, book,
                    </Text>
                </View>
            </View> */}
            </View>
            <View style={styles.inputchatcontainer}>
                <View style={styles.inputcontainer}><InputText value={message}
                    onChangeText={(text) => setMessage(text)}
                    placeholder="Type a message" /></View>
                <TouchableOpacity style={styles.iconsendcontainer} onPress={handleSend}>
                    <FontAwesome name="send" size={calculateFontSize(23)} color="#009A8C"  />
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
        marginVertical:height*0.03,
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