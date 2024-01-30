import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { calculateFontSize } from '../../config/font';
import Feather from 'react-native-vector-icons/dist/Feather';
import Images from '../../config/im';
import DocumentPicker from 'react-native-document-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { launchImageLibrary } from 'react-native-image-picker';
import { useRoute } from '@react-navigation/native';
import { baseprofileurl } from '../../config/utilities';
import moment from 'moment';
const Profilescreen = ({ navigation }) => {

  const [employmentType, setEmploymentType] = useState('');
  const [employmentPlace, setEmploymentPlace] = useState('');
  const [employmentDate, setEmploymentDate] = useState('');
  const [skills, setSkills] = useState([]);
  const [newsData, setNewsData] = useState([]);

  // useEffect(() => {
  //   if (route.params?.selectedJobs) {
  //     setSkills(route.params.selectedJobs);
  //   }

  //   // Update the state for work experience if the new data is passed
  //   if (route.params?.employmentType) {
  //     setEmploymentType(route.params.employmentType);
  //   }
  //   if (route.params?.employmentPlace) {
  //     setEmploymentPlace(route.params.employmentPlace);
  //   }
  //   if (route.params?.employmentDate) {
  //     setEmploymentDate(route.params.employmentDate);
  //   }
  // }, [route.params]);

  // ... rest of the useEffect logic

  const [show, setshow] = useState(false);
  const [selectedTab, setSelectedTab] = useState('About_me');
  const [uploadedDocument, setUploadedDocument] = useState('');
  const [attachedCertificate, setAttachedCertificate] = useState('');
  const { token } = useSelector(state => state.auth);
  const [userData, setUserData] = useState([{
    name: '',
    email: '',
    picture: '',
    phone: '',
    appliedJobsCount: ''
    // Add other user data properties here
  }]);
  const fetchNews = () => {
    const config = {
      method: 'get',
      url: 'https://jobbookbackend.azurewebsites.net/api/v1/jobbook/talent/home/news?userId=true',
      headers: {
        'Authorization': `Bearer ${token}`, // Use the token from your Redux store
      },
    };

    axios(config)
      .then((response) => {
        console.log('News data:', response.data);
        setNewsData(response.data.data); // Update your state with the news data
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  };

  useEffect(() => {
    // Make an Axios GET request to your API endpoint with the token
    axios
      .get(
        'https://jobbookbackend.azurewebsites.net/api/v1/jobbook/auth/profile',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(response => {
        console.log(response.data.data[0].experience

          , '====>getprofile');
        // Handle the successful response and update userData state
        // const { name, email ,picture} = response.data.data; // Update this with your actual response structure
        const name = response.data.data[0].name;
        const email = response.data.data[0].email;
        const picture = response.data.data[0].picture;
        const phone = response.data.data[0].phone;
        const appliedJobsCount = response.data.data[0].appliedJobsCount;
        const skills = response.data.data[0].skills;
        const about = response.data.data[0].about;
        const experience = Array.isArray(response.data.data[0].experience)
        ? response.data.data[0].experience
        : []; // Default to an empty array if not already an array
        phone;
        setUserData({ name, email, picture, phone, appliedJobsCount, skills, experience, about });


      })
      .catch(error => {
        // Handle any errors here
        console.error('Error fetching user data:', error);
      });
    fetchNews();
  }, [token]);

  const handleTabPress = tab => {
    setSelectedTab(tab);
  };
  const [profileImage, setProfileImage] = useState(null);
  const handleChoosePhoto = () => {
    launchImageLibrary({ noData: true }, response => {
      if (response.assets && response.assets.length > 0) {
        const asset = response.assets[0];
        setProfileImage({
          uri: asset.uri,
          name: response.assets.fileName || 'profile.jpg', // Fallback name if fileName is not available
          type: response.assets.type || 'image/jpeg', // Fallback type if not available
        });
      }
    });
  };
  useEffect(() => {
    // ... your existing code
    if (userData.skills && typeof userData.skills === 'string') {
      setUserData(prevUserData => ({
        ...prevUserData,
        skills: prevUserData.skills.split(','),
      }));
    }
  }, [userData.skills]);
  const renderTabContent = () => {
    switch (selectedTab) {
      case 'About_me':
        return (
          <View style={{ paddingHorizontal: width * 0.03 }}>
            <View style={styles.aboutparacontainer}>
              <Text style={styles.aboutmehead}>about me</Text>
              <Text style={styles.textpara}>
                {userData.about}

              </Text>
            </View>

            <View style={styles.skillscontainer}>
              <View>
                <Text style={styles.aboutmehead}>Skills</Text>
              </View>
              <TouchableOpacity>
                <Feather
                  name="edit"
                  color="#fff"
                  size={calculateFontSize(20)}
                  onPress={() =>
                    navigation.navigate('UpdateProfiletalent')
                  }
                />
              </TouchableOpacity>
            </View>

            <View style={styles.skillpoincontainer}>
              {Array.isArray(userData.skills) ? (
                userData.skills.map((skill, index) => (
                  <View key={index} style={styles.skilsscon}>
                    <Text style={styles.skilltext}>{skill}</Text>
                  </View>
                ))
              ) : null}
            </View>
            <View style={{ paddingHorizontal: width * 0.02 }}>
              <Text style={styles.workexperdive}>work experience </Text>
              {Array.isArray(userData.experience) && userData.experience.map((exp, index) => (
             <>
                <View
                key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View style={styles.wrkexperience}>
                  <View style={styles.dpPic}>
                    <Image
                      resizeMode="center"
                      source={Images.user}
                      style={styles.img}
                    />
                  </View>
                  <View style={{ paddingHorizontal: width * 0.03 }}>
                    <Text style={styles.aboutmehead}>{exp.company}</Text>
                    <Text style={styles.wrkexp}>{exp.title}</Text>
                    <Text style={styles.wrkexp}>
  {moment(exp.from).format('YYYY-MM-DD')} - {moment(exp.to).format('YYYY-MM-DD')}
</Text>
                  </View>
                </View>

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('UpdateProfiletalent')
                  }>
                  <Feather
                    name="edit"
                    color="#fff"
                    size={calculateFontSize(20)}
                  />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  borderBottomWidth: 1,
                  marginVertical: height * 0.04,
                  borderBottomColor: '#fff',
                }}></View>
             </>
              ))}
           
            </View>
          </View>
        );
      case 'Post':
        return (
          <>

            {newsData?.length > 0 ? (
              newsData.map((item, index) => (
                <View key={index} style={styles.postcontainermain}>
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
                            {/* <Text style={styles.gtextime}>{hoursAgo === 0 ? 'just now' : `${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`}</Text> */}
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
            ) : (
              <Text>No news to display</Text>
            )}

          </>
        );
      case 'Jobs':
        return (
          <View style={{ paddingHorizontal: width * 0.03 }}>
            <View style={{ padding: 10 }}>
              <Text style={styles.cvtxt}>I’m Looking For</Text>

              <Text style={styles.cvtxtt}>
                I’m open for headhunting from companies those offers match the
                following criteria.
              </Text>
            </View>

            <View
              style={{
                borderBottomWidth: 0.2,
                marginVertical: height * 0.02,
                borderBottomColor: '#fff',
              }}></View>

            <View
              style={{
                height: height * 0.07,
                flexDirection: 'row',
                paddingHorizontal: width * 0.03,
                alignItems: 'center',
              }}>
              <View style={styles.iconimg}>
                <Image
                  source={Images.Icon}
                  style={{ width: '100%', height: '100%' }}
                  resizeMode="center"
                />
              </View>
              <View style={{ marginHorizontal: width * 0.04 }}>
                <Text style={styles.cvtxtt}>offers for</Text>
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 0.2,
                marginVertical: height * 0.02,
                borderBottomColor: '#fff',
              }}></View>

            <View
              style={{
                height: height * 0.07,
                flexDirection: 'row',
                paddingHorizontal: width * 0.03,
                alignItems: 'center',
              }}>
              <View style={styles.iconimg}>
                <Image
                  source={Images.Icon2}
                  style={{ width: '100%', height: '100%' }}
                  resizeMode="center"
                />
              </View>
              <View style={{ marginHorizontal: width * 0.04 }}>
                <Text style={styles.cvtxtt}>My specialties are</Text>
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 0.2,
                marginVertical: height * 0.02,
                borderBottomColor: '#fff',
              }}></View>

            <View
              style={{
                height: height * 0.07,
                flexDirection: 'row',
                paddingHorizontal: width * 0.03,
                alignItems: 'center',
              }}>
              <View style={styles.iconimg}>
                <Image
                  source={Images.Icon3}
                  style={{ width: '100%', height: '100%' }}
                  resizeMode="center"
                />
              </View>
              <View style={{ marginHorizontal: width * 0.04 }}>
                <Text style={styles.cvtxtt}>And im experienced in</Text>
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 0.2,
                marginVertical: height * 0.02,
                borderBottomColor: '#fff',
              }}></View>

            <View
              style={{
                height: height * 0.07,
                flexDirection: 'row',
                paddingHorizontal: width * 0.03,
                alignItems: 'center',
              }}>
              <View style={styles.iconimg}>
                <Image
                  source={Images.Icon4}
                  style={{ width: '100%', height: '100%' }}
                  resizeMode="center"
                />
              </View>
              <View style={{ marginHorizontal: width * 0.04 }}>
                <Text style={styles.cvtxtt}>my level is</Text>
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 0.2,
                marginVertical: height * 0.02,
                borderBottomColor: '#fff',
              }}></View>

            <View
              style={{
                height: height * 0.07,
                flexDirection: 'row',
                paddingHorizontal: width * 0.03,
                alignItems: 'center',
              }}>
              <View style={styles.iconimg}>
                <Image
                  source={Images.Icon5}
                  style={{ width: '100%', height: '100%' }}
                  resizeMode="center"
                />
              </View>
              <View style={{ marginHorizontal: width * 0.04 }}>
                <Text style={styles.cvtxtt}>My minimum required salary is</Text>
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 0.2,
                marginVertical: height * 0.02,
                borderBottomColor: '#fff',
              }}></View>

            <View
              style={{
                height: height * 0.07,
                flexDirection: 'row',
                paddingHorizontal: width * 0.03,
                alignItems: 'center',
              }}>
              <View style={styles.iconimg}>
                <Image
                  source={Images.Icon6}
                  style={{ width: '100%', height: '100%' }}
                  resizeMode="center"
                />
              </View>
              <View style={{ marginHorizontal: width * 0.04 }}>
                <Text style={styles.cvtxtt}>located in</Text>
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 0.2,
                marginVertical: height * 0.02,
                borderBottomColor: '#fff',
              }}></View>
          </View>
        );

      default:
        return null;
    }
  };
  const handleDocumentPick = async field => {
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
        <ImageBackground
          resizeMode="cover"
          style={[{ width: '100%', height: '100%' }, styles.bg]}
          source={Images.Profileimgbg}>
          <View
            style={{
              paddingVertical: height * 0.01,
              paddingHorizontal: width * 0.03,
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="left" color={'#fff'} size={22} />
            </TouchableOpacity>
          </View>
          <View style={styles.heder}>
            <Text style={styles.profiletextheader}>Profile</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: width * 0.04,
            }}>
            <View style={styles.prof}>
              <View>
                <View style={styles.profileimage}>
                  {profileImage ? (
                    <Image
                      style={{ width: '100%', height: '100%', borderRadius: 100 }}
                      source={{ uri: `${baseprofileurl}${userData.picture}` }}
                      resizeMode="cover"
                    />
                  ) : (
                    <Image
                      resizeMode="cover"
                      style={{ width: '1005', height: '100%', borderRadius: 100 }}
                      source={{ uri: `${baseprofileurl}${userData.picture}` }}
                    />
                  )}
                </View>
                <TouchableOpacity
                  style={styles.editprofilebutton}
                  onPress={handleChoosePhoto}>
                  <FontAwesome5 name="edit" color="#fff" />
                </TouchableOpacity>
              </View>
              <View style={{ marginHorizontal: width * 0.05 }}>
                <Text style={styles.prname}>{userData.name}</Text>
                <Text style={styles.premail}>{userData.email}</Text>
                <Text style={styles.prnumb}>{userData.phone}</Text>
              </View>
            </View>
            <TouchableOpacity>
              <AntDesign
                name="setting"
                color="#fff"
                size={calculateFontSize(22)}
                onPress={() => navigation.navigate('userprofilesetting')}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: width * 0.04,
              marginTop: height * 0.02,
            }}>
            <View style={styles.vbgcon}>
              <Text style={styles.probgtext}>{userData.appliedJobsCount}</Text>
              <Text style={styles.probgtext}>Job Applied</Text>
            </View>
            <View style={styles.vbgcon1}>
              <Text style={styles.probgtext}>19/20/2023</Text>
              <Text style={styles.probgtext}>member Since</Text>
            </View>

            <View style={styles.vbgcon}>
              <Text style={styles.probgtext}>30</Text>
              <Text style={styles.probgtext}>interview</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={{ marginTop: height * 0.02, alignItems: 'center' }}>
        <View style={styles.tabcontainer}>
          <TouchableOpacity
            style={[
              styles.tabtextcontainer,
              selectedTab === 'About_me' && { backgroundColor: '#2BADA1' },
            ]}
            onPress={() => handleTabPress('About_me')}>
            <Text style={styles.tab}>About Me</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabtextcontainer,
              selectedTab === 'Post' && { backgroundColor: '#2BADA1' },
            ]}
            onPress={() => handleTabPress('Post')}>
            <Text style={styles.tab}>Post</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabtextcontainer,
              selectedTab === 'Jobs' && { backgroundColor: '#2BADA1' },
            ]}
            onPress={() => handleTabPress('Jobs')}>
            <Text style={styles.tab}>Jobs</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>{renderTabContent()}</ScrollView>
    </SafeAreaView>
  );
};

export default Profilescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0,154,140)',

  },
  bgresi: {
    width: width,
    height: height * 0.3,
    backgroundColor: 'rgb(0,154,140)',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  profiletextheader: {
    color: '#fff',
    fontSize: calculateFontSize(18),
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  profileimage: {
    width: width * 0.2,
    height: height * 0.1,
    overflow: 'hidden',
    borderRadius: 100,
    borderWidth: 1,
    ...Platform.select({
      ios: {
        width: width * 0.32,
        height: height * 0.18,
        overflow: 'hidden',
        borderRadius: 100,
      },
    }),
  },
  prof: {
    flexDirection: 'row',
  },
  prname: {
    color: '#fff',
    fontSize: calculateFontSize(20),
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  premail: {
    marginTop: height * 0.01,
    color: '#fff',
    fontSize: calculateFontSize(13),
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
    // fontWeight:"700"
  },
  prnumb: {
    color: '#fff',
    fontSize: calculateFontSize(13),
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
    // fontWeight:"700"
  },
  vbgcon: {
    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: width * 0.03,
  },
  vbgcon1: {
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: width * 0.09,
  },
  probgtext: {
    color: '#fff',
    fontSize: calculateFontSize(13),
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
  },
  aboutmehead: {
    color: '#fff',
    fontSize: calculateFontSize(25),
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  workexperdive: {
    color: '#fff',
    fontSize: calculateFontSize(25),
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
    fontWeight: '700',
    marginTop: height * 0.01,
  },
  textpara: {
    color: '#fff',
    fontSize: calculateFontSize(13),
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
  },
  aboutparacontainer: {
    // paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.03,
    borderBottomWidth: 1,
    borderBottomColor: '#CACACA',
  },
  readmore: {
    color: '#2BADA1',
    fontSize: calculateFontSize(13),
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
  },
  skillscontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: height * 0.02,
  },
  skillpoincontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomWidth: 1,
    borderBottomColor: '#CACACA',
    paddingBottom: height * 0.02,
    paddingTop: height * 0.02,
  },
  skilsscon: {
    backgroundColor: '#3C948B',
    marginHorizontal: width * 0.01,
    padding: 5,
    marginVertical: height * 0.009,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 4,
  },
  skilltext: {
    color: '#fff',
    fontSize: calculateFontSize(12),
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
    fontWeight: '300',
  },
  dpPic: {
    width: width * 0.15,
    height: height * 0.06,
    backgroundColor: '#ffff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: '100%',
    height: '100%',
  },
  wrkexperience: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: height * 0.034,
  },
  wrkexp: {
    color: '#fff',
    fontSize: calculateFontSize(12),
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
  },
  badgeimagecontainer: {
    width: width,
    height: height * 0.35,
    // paddingVertical:height*0.03,
  },
  badgeimagecontainerpareent: {
    width: width,
    height: height * 0.25,
    backgroundColor: '#EAEAEA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  idimage: {
    width: width,
    height: height * 0.2,
    overflow: 'hidden',
    right: width * 0.05,
  },
  btcontainer: {
    bottom: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  btn: {
    width: width * 0.9,
    height: height * 0.06,
    backgroundColor: '#206CB3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
    borderRadius: 10,
  },
  iconbtn: {
    flexDirection: 'row',
  },
  tabsmain: {
    paddingHorizontal: width * 0.04,
    marginVertical: height * 0.02,
  },

  txttabs: {
    color: '#fff',
    fontSize: calculateFontSize(12),
    fontWeight: '500',
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
    backgroundColor: '#104C47',
    flexDirection: 'row',
    width: width * 0.92,
    justifyContent: 'space-between',
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
    color: '#FFf',
    fontSize: calculateFontSize(15),
    fontFamily: 'Poppins',
  },
  tabtextcontainer: {
    width: width * 0.25,
    alignItems: 'center',
    height: height * 0.04,
    justifyContent: 'center',
    borderRadius: 5,
  },
  dpPic: {
    width: width * 0.15,
    height: height * 0.06,
    backgroundColor: '#ffff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: '100%',
    height: '100%',
  },
  uploadSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
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
    textAlign: 'center',
    fontSize: calculateFontSize(16),
  },
  iconImage: {
    width: 24,
    height: 24,
    marginHorizontal: width * 0.3,
  },
  cvtxt: {
    fontSize: calculateFontSize(16),
    color: '#fff',
    fontWeight: '600',
  },
  cvbtn: {
    backgroundColor: '#2BADA1',
    width: width * 0.94,
    height: height * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderCurve: 'circular',
    borderRadius: 30,
    flexDirection: 'row',
    marginVertical: height * 0.02,
  },
  cvtxtt: {
    fontSize: calculateFontSize(14),
    color: '#fff',
    fontWeight: '400',
    marginHorizontal: width * 0.008,
  },
  iconimg: {
    width: width * 0.06,
    height: height * 0.03,
  },

  editprofilebutton: {
    width: width * 0.05,
    height: height * 0.023,
    backgroundColor: '#2BADA1',
    // overflow:"hidden",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    bottom: height * 0.03,
    left: width * 0.14,
  },
  postcontainer: {
    backgroundColor: "#fff",
    padding: 20.26,

  },
  mianrow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  gcontainer: {
    flexDirection: "row",

  },
  googimagecontainer: {
    width: width * 0.10,
    height: height * 0.05,
    overflow: "hidden",
    borderRadius: 100,

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
    marginHorizontal: width * 0.01,


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
  postcontainermain: {
    // backgroundColor:"#fff",
    padding: 10,
  }

});
