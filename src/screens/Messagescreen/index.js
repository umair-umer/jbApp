import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, ImageBackground, SafeAreaView, StyleSheet, Image, Dimensions, TouchableOpacity, FlatList, TextInput } from 'react-native';
import Images from '../../config/im';
const { width, height } = Dimensions.get('window');
import { calculateFontSize } from '../../config/font';
import InputWithLeftIcon from '../../Components/InputWithLeftIcon';
import recruiter from '../../assets/recruiter.png'
import { useSelector } from 'react-redux';
import { base,baseprofileurl } from '../../config/utilities';
import axios from 'axios';
const chatData = [
  {
    id: '1',
    senderName: 'Opu Hassan',
    lastMessage: 'Hello, how are you?',
    time: '5 mins',
    unreadCount: 3,
    image: require('../../assets/recruiter.png'),
  },
  {
    id: '2',
    senderName: 'Opu Hassan',
    lastMessage: 'Hello, how are you?',
    time: '5 mins',
    unreadCount: 3,
    image: require('../../assets/recruiter.png'),
  },
  {
    id: '3',
    senderName: 'Opu Hassan',
    lastMessage: 'Hello, how are you?',
    time: '5 mins',
    unreadCount: 3,
    image: require('../../assets/recruiter.png'),
  },
  {
    id: '4',
    senderName: 'Opu Hassan',
    lastMessage: 'Hello, how are you?',
    time: '5 mins',
    unreadCount: 3,
    image: require('../../assets/recruiter.png'),
  },
  {
    id: '5',
    senderName: 'Opu Hassan',
    lastMessage: 'Hello, how are you?',
    time: '5 mins',
    unreadCount: 3,
    image: require('../../assets/recruiter.png'),
  },
  {
    id: '6',
    senderName: 'Opu Hassan',
    lastMessage: 'Hello, how are you?',
    time: '5 mins',
    unreadCount: 3,
    image: require('../../assets/recruiter.png'),
  },
  {
    id: '7',
    senderName: 'Opu Hassan',
    lastMessage: 'Hello, how are you?',
    time: '5 mins',
    unreadCount: 3,
    image: require('../../assets/recruiter.png'),
  },
  {
    id: '8',
    senderName: 'Opu Hassan',
    lastMessage: 'Hello, how are you?',
    time: '5 mins',
    unreadCount: 3,
    image: require('../../assets/recruiter.png'),
  },
  {
    id: '9',
    senderName: 'Opu Hassan',
    lastMessage: 'Hello, how are you?',
    time: '5 mins',
    unreadCount: 3,
    image: require('../../assets/recruiter.png'),
  },
  // Add more chat data as needed
];

const Messagesscreen = ({ navigation }) => {
  const { token, userId } = useSelector((state) => state.auth); // Assuming this is how you get the userId
  const [chats, setChats] = useState([]);
  const [chatboxid,setchatboxid]=useState("")
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const config = {
        method: 'get',
        url: `${base}/chat/getMyChats`,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
  
      try {
        const response = await axios.request(config);
        setChats(response.data.chats);
        console.log(response.data.chats[0]._id,"000");
        setchatboxid(response.data.chats[0]._id,)
       
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, [token]);

  const renderChatItem = ({ item }) => {
    const otherParticipant = item.participants.find(participant => participant._id !== userId);
console.log(otherParticipant ,"holaa");
const navigateToChatRoom = () => {
  navigation.navigate('userchatroomscreen', { Chatid: chatboxid,otherparticepat: otherParticipant._id });
};
    return (

      <TouchableOpacity style={styles.chatbox}
        onPress={navigateToChatRoom}
      >
        <View style={styles.chatroomboxcontaint}>
          <View style={styles.recprofile}>
          {otherParticipant.picture == ""?<Image style={{ width: "100%", height: "100%" }} resizeMode="cover"    source={Images.avtr}/>  :  <Image style={{ width: "100%", height: "100%" }} resizeMode="cover"  source={{uri:`${baseprofileurl}${otherParticipant.picture}` }} />}
          </View>
          <View>
            <Text style={styles.recruname}>{otherParticipant?.name}</Text>
            {/* <Text style={styles.lastMessage}>{item.lastMessage}</Text> */}
          </View>
        </View>
        <View>
          <Text style={styles.time}>{item.time}</Text>
          <View style={styles.messageCounter}>
            <Text style={styles.messgecounter}>{item.unreadCount}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.myjobstext}>message</Text>
      </View>
      <InputWithLeftIcon icon="search" placeholder={"Search"} onChangeText={(text) => console.log(text)} value={""} />
      {/* <View style={styles.chatbox}>
            <View style={styles.chatroomboxcontaint}>
              <View style={styles.recprofile}>
                <Image style={{ width: "100%", height: "100%" }} resizeMode="center" source={recruiter} />
              </View>
              <Text style={styles.recruname}>Opu Hassan</Text>
            </View>
            <View>
              <Text style={styles.time}>5 mins</Text>
              <Text style={styles.messgecounter}>3</Text>
            </View>
          </View> */}
      <FlatList
        data={chats}
        keyExtractor={(item) => item._id}
        renderItem={renderChatItem}
        showsVerticalScrollIndicator={false}
      />




    </SafeAreaView>
  )
}
export default Messagesscreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009A8C",
    paddingHorizontal: width * 0.04

  },
  header: {
    paddingVertical: height * 0.04,
    justifyContent: "center",
    alignItems: "center"
  },
  myjobstext: {
    color: "#fff",
    fontSize: calculateFontSize(15),
    textTransform: "capitalize",
    fontFamily: "Poppins"
  },
  recprofile: {
    width: width * 0.1,
    height: height * 0.05,
    borderRadius:200,
    overflow:"hidden"
  },
  chatroomboxcontaint: {
    flexDirection: "row",
    alignItems: "center",

  },
  chatbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingTop: height * 0.001,
    borderBottomColor: "#fff",
    //   marginVertical:height*0.001,
  },
  messgecounter: {
    backgroundColor: "#fff",
    alignSelf: "center",
    paddingVertical: height * 0.002,
    paddingHorizontal: width * 0.019,
    borderRadius: 100,
    color: "#009A8C",
    marginVertical: height * 0.02,
  },
  time: {
    color: "#fff",
    fontSize: calculateFontSize(12),
    textTransform: "capitalize",
    fontFamily: "Poppins",
    marginLeft: width * 0.03,
    alignSelf: "center"
  },
  recruname: {
    color: "#fff",
    fontSize: calculateFontSize(15),
    textTransform: "capitalize",
    fontFamily: "Poppins",
    marginLeft: width * 0.03,
  }
})


