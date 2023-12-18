import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Images from '../../config/im';
import Bg from '../../assets/shape.png';
import {calculateFontSize} from '../../config/font';
const {width, height} = Dimensions.get('window');
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Ionicons from 'react-native-vector-icons/Ionicons';

const CompanyProfileScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('About us');
  const [show, setshow] = useState(false);

  const handleTabPress = tabName => {
    setActiveTab(tabName);
  };

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

  const postData = Array.from({length: 10}, (_, index) => ({
    id: `post_${index}`,
    companyName: 'Google Inc',
    timeAgo: '21 minutes ago',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...',
    readMore: show,
  }));
  const renderPostItem = ({item}) => (
    <View style={styles.postcontainermain}>
      <View style={styles.postcontainer}>
        <View style={styles.mianrow}>
          <View style={styles.gcontainer}>
            <View style={styles.googimagecontainer}>
              <Image
                resizeMode="contain"
                style={{width: '100%', height: '100%'}}
                source={Images.Google}
              />
            </View>
            <View style={styles.texcontainer}>
              <Text style={styles.gtext}>Google Inc</Text>
              <View style={styles.timercontainer}>
                <View style={styles.timerimage}>
                  <Image
                    resizeMode="center"
                    style={{width: '100%', height: '100%'}}
                    source={Images.timericon}
                  />
                </View>
                <Text style={styles.gtextime}>21 minuts ago</Text>
              </View>
            </View>
          </View>
          <View style={styles.viewprocontainer}>
            <View style={styles.proview}>
              <Image
                style={{width: '100%', height: '100%'}}
                resizeMode="center"
                source={Images.viewpro}
              />
            </View>
            <Text style={styles.vietext}>view profile</Text>
          </View>
        </View>
        <View style={styles.typcontainer}>
          <Text style={styles.textphyra}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco labo...
            {show ? (
              <Text>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco labo.
              </Text>
            ) : (
              ''
            )}
            <Text onPress={() => setshow(!show)}>
              {show ? `Read less` : `Readmore`}
            </Text>
          </Text>
        </View>
        <View style={styles.googleaddscontainer}>
          <Image
            resizeMode="contain"
            style={{width: '100%', height: '100%'}}
            source={Images.goolgeadds}
          />
        </View>
        <View>
          <Text style={styles.googleques}>
            What's it like to work at Google?
          </Text>
          <Text style={styles.youlink}>Youtube.com</Text>
        </View>
      </View>
      <View style={styles.feedbackcontainer}>
        <View style={styles.pcontainer}>
          <TouchableOpacity style={styles.hert}>
            <Image
              resizeMode="center"
              style={{width: '100%', height: '100%'}}
              source={Images.heart}
            />
          </TouchableOpacity>
          <Text style={styles.textfeed}>12</Text>
        </View>
        <View style={styles.pcontainer}>
          <TouchableOpacity style={styles.hert}>
            <Image
              resizeMode="center"
              style={{width: '100%', height: '100%'}}
              source={Images.comenticon}
            />
          </TouchableOpacity>
          <Text style={styles.textfeed}>10</Text>
        </View>
      </View>
    </View>
  );

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Vpost', {post: item})}
      style={{marginVertical: height * 0.02, marginHorizontal: width * 0.01}}>
      <View style={styles.postmaincontainer}>
        <View style={styles.flex}>
          <View style={styles.posttimename}>
            <View style={styles.propst}>
              <Image
                style={{width: '100%', height: '100%'}}
                resizeMode="center"
                source={Images.profpost}
              />
            </View>
            <View>
              <Text style={styles.tname}>{item.title}</Text>
              <Text style={styles.tpostname}>
                {item.author} {item.time}
              </Text>
            </View>
          </View>
          <View style={styles.savicon}>
            <Image
              resizeMode="center"
              style={{width: '100%', height: '100%'}}
              source={Images.sicon}
            />
          </View>
        </View>
        <View style={styles.payracontainer}>
          <Text style={styles.formdes}>{item.description}</Text>
          {/* <Text style={styles.descri}>{item.description}</Text> */}
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
  );
  return (
    <View style={{flex: 1, backgroundColor: '#009A8C'}}>
      <ImageBackground
        style={{width: '100%', zIndex: 1}}
        resizeMode="cover"
        source={Images.companyimage}>
        <View style={styles.hedr}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" color="#fff" size={30} />
          </TouchableOpacity>
          <Text style={styles.headname}>Company Profile</Text>
          <TouchableOpacity
            // style={styles.profileconainter}
            onPress={() => navigation.openDrawer()}>
            {/* <Image resizeMode='contain' style={{ width: "100%", height: "100%" }} source={Images.BookmarkSimple} /> */}
          </TouchableOpacity>
        </View>
        <View style={styles.companylogoview}>
          <View style={styles.logoimagecompany}>
            <Image
              resizeMode="cover"
              style={{width: '100%', height: '100%'}}
              source={Images.companyprofilelogo}
            />
          </View>
          <View style={styles.companydeta}>
            <Text style={styles.batch}>Pro account</Text>
            <Text style={styles.companyname}>CodeZen</Text>
            <Text style={styles.location}>New York, USA</Text>
          </View>
        </View>
      </ImageBackground>

      <View style={{marginTop: height * 0.05, alignItems: 'center'}}>
        <View style={styles.tabcontainer}>
          <TouchableOpacity
            style={[
              styles.tabtextcontainer,
              activeTab === 'About us' && styles.tabtextcontaineractive,
            ]}
            onPress={() => handleTabPress('About us')}>
            <Text
              style={[
                styles.tab,
                activeTab === 'About us' && styles.activeTab,
              ]}>
              About us
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabtextcontainer,
              activeTab === 'Company Posts' && styles.tabtextcontaineractive,
            ]}
            onPress={() => handleTabPress('Company Posts')}>
            <Text
              style={[
                styles.tab,
                activeTab === 'Company Posts' && styles.activeTab,
              ]}>
              Company Posts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabtextcontainer,
              activeTab === 'Job Openings' && styles.tabtextcontaineractive,
            ]}
            onPress={() => handleTabPress('Job Openings')}>
            <Text
              style={[
                styles.tab,
                activeTab === 'Job Openings' && styles.activeTab,
              ]}>
              Job Openings
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {activeTab === 'About us' && (
        <ScrollView style={{height: height * 0.2, backgroundColor: 'red'}}>
          <SafeAreaView style={styles.container}>
            <View>
              <Text style={styles.companyabout}>About Company</Text>
              <Text style={styles.companyaboutdes}>
                Our mission is to innovate and deliver high-quality software
                solutions that empower businesses and individuals. We believe in
                collaboration, ethics, and positive impact. Join us on the
                journey to digital transformation
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginVertical: height * 0.02,
              }}>
              <Text style={styles.galertrxt}>Company Gallery</Text>
              <Text style={styles.galerViewmore}>View more</Text>
            </View>
          </SafeAreaView>
          <View style={styles.galerycontainer}>
            <View style={styles.glryimage}>
              <Image
                style={{width: '100%', height: '100%'}}
                resizeMode="cover"
                source={Images.galry}
              />
            </View>
            <View style={styles.igaleryrap}>
              <View style={styles.glryimage4}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  resizeMode="cover"
                  source={Images.galry}
                />
              </View>
              <View style={styles.glryimage4}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  resizeMode="cover"
                  source={Images.galry}
                />
              </View>
              <View style={styles.glryimage4}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  resizeMode="cover"
                  source={Images.galry}
                />
              </View>
              <View style={styles.glryimage4}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  resizeMode="cover"
                  source={Images.galry}
                />
              </View>
            </View>
          </View>
          <SafeAreaView style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.containercountempl}>
                <Text style={styles.adject}>There are</Text>
                <Text style={styles.num}>100 - 240</Text>
                <Text style={styles.employee}>Employees in the company</Text>
              </View>
              <View style={styles.containercountempl}>
                <Text style={styles.adject}>There are</Text>
                <Text style={styles.num}>100 - 240</Text>
                <Text style={styles.employee}>Employees in the company</Text>
              </View>
            </ScrollView>
          </SafeAreaView>
        </ScrollView>
      )}
      {activeTab === 'Company Posts' && (
        <ScrollView showsVerticalScrollIndicator={false} style={{padding: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.newsfeed}>Forum</Text>
            <Text>View all</Text>
          </View>
          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={postdata}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
          <Text style={styles.newsfeed}>News feed</Text>

          <View style={{paddingBottom: height * 0.14}}>
            <FlatList
              data={postData}
              renderItem={renderPostItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      )}
      {activeTab === 'Job Openings' && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.shap}>
            <ImageBackground
              style={{
                width: width * 0.94,
                height: height * 0.3,
                paddingTop: height * 0.039,
                paddingHorizontal: width * 0.03,
              }}
              resizeMode="contain"
              source={Bg}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.iconimage}>
                    <Image
                      style={{width: '100%', height: '100%'}}
                      resizeMode="center"
                      source={Images.dp}
                    />
                  </View>
                  <View style={{marginHorizontal: width * 0.03}}>
                    <Text style={styles.designation}>Software Engineer</Text>
                    <Text style={styles.companyname}>SumatoSoft</Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('jobdeatilview')}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: height * 0.035,
                    marginRight: width * 0.01,
                  }}>
                  <Text style={styles.vietex}>View</Text>
                  <Feather name="arrow-up-right" size={20} />
                </TouchableOpacity>
              </View>
              <View
                style={{flexDirection: 'row', marginVertical: height * 0.01}}>
                <View style={styles.descri}>
                  <Feather name="map-pin" />
                  <Text style={styles.tstyle}>New York</Text>
                </View>
                <View style={styles.descri}>
                  <Entypo name="graduation-cap" />
                  <Text style={styles.tstyle}>3 years exp.</Text>
                </View>
                <View style={styles.descri}>
                  <Ionicons name="time-outline" />
                  <Text style={styles.tstyle}>Fulltime</Text>
                </View>
              </View>

              <View>
                <Text style={styles.description}>
                  SumatoSoft is an award-winning mobile and web app development
                  company with its headquarters in Karachi. We are currently on
                  the lookout for highly motivated Software Engineers.
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: height * 0.05,
                  paddingHorizontal: width * 0.02,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Entypo name="back-in-time" size={20} color={'#000'} />
                  <Text style={styles.postduration}>Posted 5 days ago</Text>
                </View>
                <View>
                  {/* <Text style={styles.postsalary}>$25K/mo</Text> */}
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.shap}>
            <ImageBackground
              style={{
                width: width * 0.94,
                height: height * 0.3,
                paddingTop: height * 0.039,
                paddingHorizontal: width * 0.03,
              }}
              resizeMode="contain"
              source={Bg}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.iconimage}>
                    <Image
                      style={{width: '100%', height: '100%'}}
                      resizeMode="center"
                      source={Images.dp}
                    />
                  </View>
                  <View style={{marginHorizontal: width * 0.03}}>
                    <Text style={styles.designation}>Software Engineer</Text>
                    <Text style={styles.companyname}>SumatoSoft</Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('jobdeatilview')}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: height * 0.035,
                    marginRight: width * 0.01,
                  }}>
                  <Text style={styles.vietex}>View</Text>
                  <Feather name="arrow-up-right" size={20} />
                </TouchableOpacity>
              </View>
              <View
                style={{flexDirection: 'row', marginVertical: height * 0.01}}>
                <View style={styles.descri}>
                  <Feather name="map-pin" />
                  <Text style={styles.tstyle}>New York</Text>
                </View>
                <View style={styles.descri}>
                  <Entypo name="graduation-cap" />
                  <Text style={styles.tstyle}>3 years exp.</Text>
                </View>
                <View style={styles.descri}>
                  <Ionicons name="time-outline" />
                  <Text style={styles.tstyle}>Fulltime</Text>
                </View>
              </View>

              <View>
                <Text style={styles.description}>
                  SumatoSoft is an award-winning mobile and web app development
                  company with its headquarters in Karachi. We are currently on
                  the lookout for highly motivated Software Engineers.
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: height * 0.05,
                  paddingHorizontal: width * 0.02,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Entypo name="back-in-time" size={20} color={'#000'} />
                  <Text style={styles.postduration}>Posted 5 days ago</Text>
                </View>
                <View>
                  {/* <Text style={styles.postsalary}>$25K/mo</Text> */}
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.shap}>
            <ImageBackground
              style={{
                width: width * 0.94,
                height: height * 0.3,
                paddingTop: height * 0.039,
                paddingHorizontal: width * 0.03,
              }}
              resizeMode="contain"
              source={Bg}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.iconimage}>
                    <Image
                      style={{width: '100%', height: '100%'}}
                      resizeMode="center"
                      source={Images.dp}
                    />
                  </View>
                  <View style={{marginHorizontal: width * 0.03}}>
                    <Text style={styles.designation}>Software Engineer</Text>
                    <Text style={styles.companyname}>SumatoSoft</Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('jobdeatilview')}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: height * 0.035,
                    marginRight: width * 0.01,
                  }}>
                  <Text style={styles.vietex}>View</Text>
                  <Feather name="arrow-up-right" size={20} />
                </TouchableOpacity>
              </View>
              <View
                style={{flexDirection: 'row', marginVertical: height * 0.01}}>
                <View style={styles.descri}>
                  <Feather name="map-pin" />
                  <Text style={styles.tstyle}>New York</Text>
                </View>
                <View style={styles.descri}>
                  <Entypo name="graduation-cap" />
                  <Text style={styles.tstyle}>3 years exp.</Text>
                </View>
                <View style={styles.descri}>
                  <Ionicons name="time-outline" />
                  <Text style={styles.tstyle}>Fulltime</Text>
                </View>
              </View>

              <View>
                <Text style={styles.description}>
                  SumatoSoft is an award-winning mobile and web app development
                  company with its headquarters in Karachi. We are currently on
                  the lookout for highly motivated Software Engineers.
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: height * 0.05,
                  paddingHorizontal: width * 0.02,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Entypo name="back-in-time" size={20} color={'#000'} />
                  <Text style={styles.postduration}>Posted 5 days ago</Text>
                </View>
                <View>
                  {/* <Text style={styles.postsalary}>$25K/mo</Text> */}
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default CompanyProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009A8C',
    padding: 20,
  },
  hedr: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  headname: {
    fontSize: calculateFontSize(15),
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'capitalize',
    marginHorizontal: width * 0.01,
    fontFamily: 'Poppins',
  },
  profileconainter: {
    borderWidth: 1,
    width: width * 0.13,
    height: height * 0.06,
    borderRadius: 100,
    padding: 3,
    borderColor: '#1EC5B6',
    // overflow:"hidden"
  },
  companylogoview: {
    flexDirection: 'row',
    paddingVertical: height * 0.02,
    alignItems: 'center',
    padding: 20,
    zIndex: 1,
  },
  logoimagecompany: {
    width: width * 0.29,
    height: height * 0.12,
    borderWidth: 1,
    borderColor: '#2BADA1',
    borderRadius: 15,
    overflow: 'hidden',
    zIndex: 1,
    top: height * 0.04,
  },
  companydeta: {
    top: height * 0.028,
    // height:height*0.09,
    // backgroundColor:"red",
    overflow: 'hidden',
    marginHorizontal: width * 0.02,
    // paddingVertical:height*0.0110,
    // marginTop:height*0.09,
  },
  batch: {
    borderWidth: 1,
    textAlign: 'center',
    borderColor: '#FFA14A',
    color: '#FFA14A',
    fontSize: calculateFontSize(10),
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    width: width * 0.19,
    padding: 3,
    borderRadius: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  formdes: {
    color: '#FFf',
    fontSize: calculateFontSize(12),
    fontFamily: 'Poppins',
  },
  companyname: {
    color: '#FFf',
    fontSize: calculateFontSize(25),
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
  location: {
    color: '#FFf',
    fontSize: calculateFontSize(13),
    fontFamily: 'Poppins',
  },
  tabcontainer: {
    backgroundColor: '#104C47',
    flexDirection: 'row',
    width: width * 0.92,
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.013,
    borderRadius: 10,
  },
  tab: {
    color: '#FFf',
    fontSize: calculateFontSize(12),
    fontFamily: 'Poppins',
  },
  tabtextcontainer: {
    // backgroundColor: '#2BADA1',
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
    width: width * 0.27,
    height: height * 0.04,
  },
  tabtextcontaineractive: {
    backgroundColor: '#2BADA1',
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
    width: width * 0.27,
    height: height * 0.04,
  },
  companyabout: {
    color: '#FFf',
    fontSize: calculateFontSize(20),
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  companyaboutdes: {
    color: '#FFf',
    fontSize: calculateFontSize(15),
    fontFamily: 'Poppins',
  },
  companygalertextcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  galerycontainer: {
    backgroundColor: '#009A8C',
    flexDirection: 'row',
    // top:8,
  },
  galertrxt: {
    color: '#FFf',
    fontSize: calculateFontSize(15),
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  galerViewmore: {
    color: '#2BADA1',
    fontSize: calculateFontSize(14),
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  glryimage: {
    width: width * 0.5,
    height: height * 0.18,
    backgroundColor: 'red',
  },
  igaleryrap: {
    width: width * 0.5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: width * 0.011,
  },
  glryimage4: {
    width: width * 0.24,
    height: height * 0.09,
    // marginVertical:height*0.002,
    // marginHorizontal:width*0.002,
    padding: 1,
  },
  containercountempl: {
    backgroundColor: '#2BADA1',
    width: width * 0.6,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
    borderRadius: 15,
    height: height * 0.17,
    marginHorizontal: width * 0.02,
  },
  adject: {
    color: '#FFf',
    fontSize: calculateFontSize(15),
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  num: {
    color: '#FFf',
    fontSize: calculateFontSize(25),
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    marginVertical: height * 0.01,
  },
  employee: {
    color: '#FFf',
    fontSize: calculateFontSize(15),
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },

  postmaincontainer: {
    backgroundColor: '#2BADA1',
    width: width * 0.8,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 10,
    // paddingHorizontal: width * 0.01,
    // paddingVertical: height * 0.01,
    shadowColor: '#000',
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
    width: width * 0.1,
    height: height * 0.03,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descri: {
    fontSize: calculateFontSize(12),
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
    paddingVertical: height * 0.011,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: width * 0.03,
    // padding:10
  },
  like: {
    fontSize: calculateFontSize(10),
    color: '#2D5B57',
    marginHorizontal: width * 0.02,
    fontFamily: 'Poppins',
  },
  fle: {
    flexDirection: 'row',
  },
  tname: {
    fontSize: calculateFontSize(12),
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: width * 0.02,
    fontFamily: 'Poppins',
  },
  tpostname: {
    fontSize: calculateFontSize(10),
    color: '#fff',
    marginHorizontal: width * 0.02,
    fontFamily: 'Poppins',
  },

  postcontainermain: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: height * 0.01,
  },
  postcontainer: {
    padding: 10,
  },
  mianrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  googimagecontainer: {
    width: width * 0.1,
    height: height * 0.05,
    overflow: 'hidden',
  },
  gcontainer: {
    flexDirection: 'row',
  },
  texcontainer: {
    justifyContent: 'flex-start',
    paddingHorizontal: width * 0.03,
  },
  gtext: {
    fontSize: calculateFontSize(15),
    fontWeight: '500',
    color: '#000',
    fontFamily: 'Poppins',
  },
  gtextime: {
    fontSize: calculateFontSize(8),
    fontWeight: '500',
    color: '#AFAFAF',
    fontFamily: 'Poppins',
  },
  timerimage: {
    width: width * 0.05,
    height: height * 0.02,
    overflow: 'hidden',
  },
  timercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  proview: {
    width: width * 0.07,
    height: height * 0.07,
  },
  vietext: {
    fontSize: calculateFontSize(12),
    fontWeight: '500',
    color: '#434343',
    fontFamily: 'Poppins',
    paddingHorizontal: width * 0.01,
    textTransform: 'capitalize',
  },
  viewprocontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    width: width * 0.33,
    height: height * 0.05,
    justifyContent: 'center',
    paddingVertical: height * 0.003,
    borderColor: '#2BADA1',
    borderRadius: 10,
    paddingHorizontal: width * 0.01,
  },
  typcontainer: {
    alignItems: 'center',
    marginVertical: height * 0.01,
  },
  textphyra: {
    fontSize: calculateFontSize(12),
    fontWeight: '500',
    color: '#434343',
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
  },
  googleaddscontainer: {
    width: width * 0.85,
    height: height * 0.22,
  },
  googleques: {
    fontSize: calculateFontSize(15),
    fontWeight: '500',
    color: '#000',
    fontFamily: 'Poppins',
    textTransform: 'capitalize',
  },
  youlink: {
    fontSize: calculateFontSize(15),
    fontWeight: '300',
    color: '#000',
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
  },
  feedbackcontainer: {
    flexDirection: 'row',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    backgroundColor: '#D9D9D9',
  },
  pcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: width * 0.03,
  },
  hert: {
    width: width * 0.05,
    height: height * 0.02,
    // backgroundColor:"red"
  },
  textfeed: {
    fontSize: calculateFontSize(12),
    fontWeight: '500',
    color: '#000',
    textTransform: 'capitalize',
    marginHorizontal: width * 0.02,
    fontFamily: 'Poppins',
  },
  newsfeed: {
    fontSize: calculateFontSize(15),
    fontWeight: '300',
    color: '#fff',
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
  },
  shap: {
    alignItems: 'center',
    // backgroundColor: "red",
    // marginVertical: height * 0.01
    // padding:10,
  },
  iconimage: {
    width: width * 0.13,
    height: height * 0.06,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  designation: {
    fontSize: calculateFontSize(15),
    color: '#ffff',
    fontWeight: 'bold',
  },
  companyname: {
    fontSize: calculateFontSize(10),
    color: '#ffff',
    fontWeight: 'bold',
  },
  vietex: {
    fontSize: calculateFontSize(15),
    color: '#ffff',
    fontWeight: 'bold',
  },
  descri: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: width * 0.2,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    borderRadius: 100,
    padding: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: width * 0.01,
  },
  tstyle: {
    fontSize: calculateFontSize(10),
    color: '#ffff',
    fontWeight: 'bold',
  },
  description: {
    fontSize: calculateFontSize(10),
    color: '#ffff',
  },
  postduration: {
    fontSize: calculateFontSize(15),
    color: '#000',
    marginHorizontal: width * 0.01,
  },
  postsalary: {
    fontSize: calculateFontSize(15),
    color: '#000',
  },
});
