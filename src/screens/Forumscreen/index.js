import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  Modal,
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  ImageBackgroundBase,
  ScrollView,
  Platform
} from 'react-native';
import Images from '../../config/im';
import { calculateFontSize } from '../../config/font';
const { width, height } = Dimensions.get('window');
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  CustomeButton,
  Inputcomponent,
  CustomeforgetHeader,
  CustomModal,
  CustomeHeader,
} from '../../Components';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Loader from '../../Components/Loader';
import { base, baseprofileurl } from '../../config/utilities';
import moment from 'moment';
import { useFocusEffect } from '@react-navigation/native';

const ForumScreen = ({ navigation, route, onPress }) => {
  const { token } = useSelector((state) => state.auth); // Get the token from Redux store
  console.log(token, "reduxtokenforem")
  const [selectedTab, setSelectedTab] = useState('Popular');
  const [data, setData] = useState([
    { id: '1', topic: '##c', quantity: '30 post' },
    { id: '2', topic: 'Java', quantity: '10 post' },
    { id: '3', topic: 'SQL', quantity: '10 post' },
    { id: '3', topic: 'php', quantity: '10 post' },
    { id: '3', topic: 'Node', quantity: '10 post' },
    { id: '3', topic: 'React-native', quantity: '10 post' },
    // Add more data items as needed
  ]);

  const [userData, setUserData] = useState({
    // name: '',
    // email: '',
    picture: "",
    // Add other user data properties here
  });
  const [forumData, setForumData] = useState([]);
  const [isload, setload] = useState();


  const fetchForumData = async () => {
    setload(true)
    try {
      const response = await axios.get(`${base}/talent/home/fourms`, {
        headers: {
          'Authorization': ` Bearer ${token}`
        }
      });
      console.log(response.data.data, "foreumdata"); 
      setload(false)
      setForumData(response.data.data)
    } catch (error) {
      console.error('Error fetching forum data:', error);
      setload(false)
      // Handle error appropriately
    }
  };

  useFocusEffect(
    React.useCallback(() => {

      // fetchUserData();
      fetchForumData();
      return () => {

      };
    }, [token])
  );


  const renderTopicItem = ({ item }) => (
    <ImageBackground
      style={styles.bg}
      resizeMode="stretch"
      source={Images.popularbg}>
      <Text style={styles.topic}>{item.topic}</Text>
      <Text style={styles.topicquanty}>{item.quantity}</Text>
    </ImageBackground>
  );
  const [postdata, setPostData] = useState([
    {
      id: '1',
      title: 'C## in a nutshell',
      author: 'Anastasia',
      time: '1hr ago',
      description:
        'SumatoSoft is an award-winning mobile and web app development company with its headquarters in Karachi. We are currently on the lookout for highly motivated Software Engineers.',
      likes: 140,
      comments: 140,
      views: 140,
    },
    {
      id: '1',
      title: 'C## in a nutshell',
      author: 'Anastasia',
      time: '1hr ago',
      description:
        'SumatoSoft is an award-winning mobile and web app development company with its headquarters in Karachi. We are currently on the lookout for highly motivated Software Engineers.',
      likes: 140,
      comments: 140,
      views: 140,
    },
    {
      id: '1',
      title: 'C## in a nutshell',
      author: 'Anastasia',
      time: '1hr ago',
      description:
        'SumatoSoft is an award-winning mobile and web app development company with its headquarters in Karachi. We are currently on the lookout for highly motivated Software Engineers.',
      likes: 140,
      comments: 140,
      views: 140,
    },
    // Add more data items as needed


  ]);

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log(isModalVisible);
  };


  const renderItem = ({ item }) => {

    const createdAtTimestamp = moment(item.createdAt)
    const currentTime = moment();
    const hoursAgo = currentTime.diff(createdAtTimestamp, 'hours');
    return (

      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate('Vpost', { post: item })}
          style={{ marginVertical: height * 0.02 }}>
          <View style={styles.postmaincontainer}>
            <View style={styles.flex}>
              <View style={styles.posttimename}>
                <View style={styles.propst}>
                  <Image
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="center"
                    source={Images.profpost}
                  />
                </View>
                <View>
                  <Text style={styles.tname}>{item.title}</Text>
                  <Text style={styles.tpostname}>
                    {item.user.name} {hoursAgo === 0 ? 'just now' : `${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`}
                  </Text>
                </View>
              </View>
              <View style={styles.savicon}>
                <Image
                  resizeMode="center"
                  style={{ width: '100%', height: '100%',...Platform.select({
                    ios:{
                      width: '100%', height: '50%'
                    }
                  })}}
                  source={Images.sicon}
                />
              </View>
            </View>
            <View style={styles.payracontainer}>
              <Text style={styles.descri}>{item.description}</Text>
            </View>
          </View>
          <View style={styles.containerViewlikecoment}>
            <View style={styles.flex}>
              <TouchableOpacity>
                <Feather name="thumbs-up" color="#2D5B57" size={20} />
              </TouchableOpacity>
              <Text style={styles.like}>{item.likes} votes</Text>
            </View>
            <View style={styles.flex}>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="message-outline"
                  color="#2D5B57"
                  size={20}
                />
              </TouchableOpacity>
              <Text style={styles.like}>{item.comments} votes</Text>
            </View>
            <View style={styles.flex}>
              <TouchableOpacity>
                <Feather name="eye" color="#2D5B57" size={20} />
              </TouchableOpacity>
              <Text style={styles.like}>{item.views} votes</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }


  const handleTabPress = tab => {
    setSelectedTab(tab);
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
        <Image
          resizeMode="contain"
          style={{ width: '100%', height: '100%' }}
          source={Images.client}
        />
      </View>
    </View>
  );
  const renderTabContent = () => {
    switch (selectedTab) {
      case 'Popular':
        return (
          <View style={{ flex: 1, paddingBottom: height * 0.35,  ...Platform.select({
            ios: {
              paddingHorizontal:width*0.03, 
           
            },
        
          }), }}>
            <Text style={styles.popular}>Popular Topics</Text>

            <View style={{ flexDirection: 'row' }}>
              <FlatList
                data={data}
                renderItem={renderTopicItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <Text style={styles.popular}>Trending Post</Text>

            <View>
              <FlatList
                data={forumData}
                renderItem={renderItem}
                keyExtractor={(item) => item.user._id}
              />
            </View>
          </View>
        );
      case 'Newest':
        return <View></View>;
      case 'Following':
        return (
          <View>
            {/* Content for Following tab */}
            {/* You can include the logic and UI for following posts here */}
          </View>
        );
      case 'Recommended':
        return (
          <View>
            {/* Content for Recommended tab */}
            {/* You can include the logic and UI for recommended posts here */}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {isload ? <Loader /> : <SafeAreaView style={styles.container}>
        <CustomeHeader
          title={'jobbooks'}
          source={{ uri: `${baseprofileurl}${userData.picture}` }}
          iconsource1={Images.searchicon}
          iconsource2={Images.notificationicon}
          onPressNotification={() => navigation.navigate('notifyscreen')}
          iconsource3={Images.fobox}
        />
        <View>
          <FlatList
            data={sliderData}
            renderItem={renderSliderItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 20,   ...Platform.select({
      ios: {
        padding: 5, 
        borderRadius: 10,
      },
  
    }), }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={[
                styles.frommslide,
                selectedTab === 'Popular' && { backgroundColor: '#fff' },
              ]}
              onPress={() => handleTabPress('Popular')}>
              <Text
                style={{ color: selectedTab === 'Popular' ? '#009A8C' : '#fff' }}>
                Popular
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.frommslideNonactive,
                selectedTab === 'Newest' && { backgroundColor: '#fff' },
              ]}
              onPress={() => handleTabPress('Newest')}>
              <Text
                style={{ color: selectedTab === 'Newest' ? '#009A8C' : '#fff' }}>
                Newest
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.frommslideNonactive,
                selectedTab === 'Following' && { backgroundColor: '#fff' },
              ]}
              onPress={() => handleTabPress('Following')}>
              <Text
                style={{ color: selectedTab === 'Following' ? '#009A8C' : '#fff' }}>
                Following
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.frommslideNonactive,
                selectedTab === 'Recommended' && { backgroundColor: '#fff' },
              ]}
              onPress={() => handleTabPress('Recommended')}>
              <Text
                style={{
                  color: selectedTab === 'Recommended' ? '#009A8C' : '#fff',
                }}>
                Recommended
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <TouchableOpacity onPress={toggleModal} style={styles.modalbutton}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>

        {renderTabContent()}
        <CustomModal home={true}
          isModalVisible={isModalVisible} onPress={toggleModal}
          onPressNewfeed={() => { navigation.navigate("addnewfeedscreen"), setModalVisible(false) }}
          Addnewpost={() => { navigation.navigate("addnewfroumscreen"), setModalVisible(false) }}
          onPressGeneratecv={() => { navigation.navigate("resumegenratescreen"), setModalVisible(false) }}
          onPresspost={() => { navigation.navigate("codeverified"), setModalVisible(false) }}


        />

      </SafeAreaView>}
    </>
  );
};

export default ForumScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009A8C',
    padding: 10,
    ...Platform.select({
      ios: {
        padding: 10, 
     
      },
  
    }),
  },
  sliedercontaintbox: {
    backgroundColor: '#FF9228',
    width: width * 0.7,
    height: height * 0.15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginHorizontal: width * 0.01,
    marginVertical: height * 0.03,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 6,
  },
  textbutton: {
    fontSize: calculateFontSize(10),
    fontWeight: '500',
    color: '#fff',
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
  },
  containr: {
    backgroundColor: '#104C47',
    alignItems: 'center',
    paddingVertical: height * 0.01,
    borderRadius: 5,
    marginTop: height * 0.02,
  },
  texrtcontant: {
    flexDirection: 'column',
    paddingLeft: width * 0.03,
    paddingVertical: height * 0.02,
  },
  clientimage: {
    width: width * 0.35,
    height: height * 0.19,
    overflow: 'hidden',
    top: -(width * 0.068),
  },
  offer: {
    fontSize: calculateFontSize(15),
    fontWeight: '500',
    color: '#fff',
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
  },
  frommslide: {
    backgroundColor: '#2FB5A8',
    width: width * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  
  },
  frommslideNonactive: {
    backgroundColor: '#2FB5A8',
    width: width * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    ...Platform.select({
      ios: {
        padding: 5, 
        borderRadius: 10,
      },
  
    }),
  },
  popular: {
    fontSize: calculateFontSize(20),
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
  },
  bg: {
    width: width * 0.23,
    height: height * 0.1,
    borderRadius: 10,
    padding: 10,
    marginRight: width * 0.03,
    marginVertical: height * 0.03,

  },
  topic: {
    fontSize: calculateFontSize(15),
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
  },
  topicquanty: {
    fontSize: calculateFontSize(15),
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
  },
  postmaincontainer: {
    backgroundColor: '#2BADA1',
    width: width * 0.95,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.02,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 8,
  },
  propst: {
    width: width * 0.12,
    height: height * 0.05,
    
  },
  posttimename: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  savicon: {
    width: width * 0.12,
    height: height * 0.04,
    ...Platform.select({
      ios:{
        width: width * 0.12,
        height: height * 0.02,
      }
    })
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descri: {
    fontSize: calculateFontSize(15),
    color: '#fff',
    fontFamily: 'Poppins',
  },
  payracontainer: {
    paddingVertical: height * 0.01,
  },
  containerViewlikecoment: {
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingVertical: height * 0.01,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: width * 0.03,
    padding: 10
  },
  like: {
    fontSize: calculateFontSize(15),
    color: '#2D5B57',
    marginHorizontal: width * 0.02,
    fontFamily: 'Poppins',
  },
  fle: {
    flexDirection: 'row',
  },
  tname: {
    fontSize: calculateFontSize(15),
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: width * 0.02,
    fontFamily: 'Poppins',
  },
  tpostname: {
    fontSize: calculateFontSize(13),
    color: '#fff',
    marginHorizontal: width * 0.02,
    fontFamily: 'Poppins',
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

});
