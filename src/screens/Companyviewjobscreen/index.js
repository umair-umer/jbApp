import React, {useState} from 'react';
import {
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  Button,
} from 'react-native';
import Images from '../../config/im';
import {calculateFontSize} from '../../config/font';
import {CustomeforgetHeader} from '../../Components';
const {width, height} = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';
import Bg from '../../assets/shape.png';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

function Companymyjob({navigation}) {
  return (
    <SafeAreaView style={styles.mainCon}>
      <CustomeforgetHeader
        onPress={() => navigation.goBack()}
        company={true}
        source={Images.arrow}
        heading={'My Jobs'}
      />
      <View style={styles.header}>
        <View>
          <Text style={styles.headertxt}>2 Active Jobs</Text>
        </View>
        <TouchableOpacity style={styles.btnstyle}>
          <Text style={styles.btntxtstyle}>Post new job</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.shap}>
          <ImageBackground
            style={{
              width: width * 0.91,
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
                onPress={() => navigation.navigate('statusview')}
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
            <View style={{flexDirection: 'row', marginVertical: height * 0.01}}>
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
                marginTop: height * 0.04,
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
                <Text style={styles.postsalary}>$25K/mo</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.shap}>
          <ImageBackground
            style={{
              width: width * 0.91,
              height: height * 0.3,
              paddingTop: height * 0.039,
              paddingHorizontal: width * 0.03,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.39,
              shadowRadius: 8.3,

              elevation: 13,
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
                onPress={() => navigation.navigate('statusview')}
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
            <View style={{flexDirection: 'row', marginVertical: height * 0.01}}>
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
                marginTop: height * 0.04,
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
                <Text style={styles.postsalary}>$25K/mo</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.shap}>
          <ImageBackground
            style={{
              width: width * 0.91,
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
                onPress={() => navigation.navigate('statusview')}
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
            <View style={{flexDirection: 'row', marginVertical: height * 0.01}}>
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
                marginTop: height * 0.04,
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
                <Text style={styles.postsalary}>$25K/mo</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.shap}>
          <ImageBackground
            style={{
              width: width * 0.91,
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
                onPress={() => navigation.navigate('statusview')}
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
            <View style={{flexDirection: 'row', marginVertical: height * 0.01}}>
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
                marginTop: height * 0.04,
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
                <Text style={styles.postsalary}>$25K/mo</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0, 154, 140,1)',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headertxt: {
    fontSize: calculateFontSize(16),
    color: '#fff',
    fontWeight: '700',
  },
  btnstyle: {
    paddingHorizontal: width * 0.06,
    paddingVertical: height * 0.01,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  btntxtstyle: {
    color: 'rgba(9, 130, 118, 1)',
    fontSize: calculateFontSize(12),
  },
  shap: {
    alignItems: 'center',
    // backgroundColor: "red",
    marginVertical: height * 0.001,
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

export default Companymyjob;
