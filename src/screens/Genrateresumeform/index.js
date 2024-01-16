import React, {useState, useEffect} from 'react';
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
  TextInput,
} from 'react-native';
import Images from '../../config/im';
import {calculateFontSize} from '../../config/font';
const {width, height} = Dimensions.get('window');
import {CustomeButton, CustomeHeader} from '../../Components';
import Icon from 'react-native-vector-icons/MaterialIcons';
function Genrateresumeform({navigation}) {
    const [isSummaryVisible, setSummaryVisible] = useState(false);
    const [isExperienceVisible, setExperienceVisible] = useState(false);
    const [isEducationVisible, setEducationVisible] = useState(false);
  
    const toggleSummaryVisibility = () => {
      setSummaryVisible(!isSummaryVisible);
    };
  
    const toggleExperienceVisibility = () => {
      setExperienceVisible(!isExperienceVisible);
    };
  
    const toggleEducationVisibility = () => {
      setEducationVisible(!isEducationVisible);
    };
  

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={Images.jsbg}
      resizeMode="cover">
      <View style={styles.line}></View>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <CustomeHeader iconsource3={Images.setting} />
        <View style={styles.heading}>
          <Text style={styles.headingtxt}>Fill in your Data</Text>
        </View>

        <View style={styles.formCon}>
          <Text style={styles.txt}>
            Personal Data
          </Text>
          <Text style={styles.txtdata}>
            Complete your personal data to make your resume even better{' '}
          </Text>

          <View style={styles.inp}>
            <TextInput
              placeholder="Full Name"
              placeholderTextColor={'#8B8B8B'}
              style={{color: '#000', paddingHorizontal: width * 0.03}}
            />
          </View>

          <View style={styles.inp}>
            <TextInput
              placeholder="Emailexample@gmail.com"
              placeholderTextColor={'#8B8B8B'}
              style={{color: '#000', paddingHorizontal: width * 0.03}}
            />
          </View>

          <View style={styles.inp}>
            <TextInput
              placeholder="Location"
              placeholderTextColor={'#8B8B8B'}
              style={{color: '#000', paddingHorizontal: width * 0.03}}
            />
          </View>

          <View style={styles.dateofbirthcon}>
            <View style={styles.date}>
              <TextInput
                placeholder="Date"
                placeholderTextColor={'#8B8B8B'}
                style={{color: '#000'}}
              />
            </View>

            <View style={styles.month}>
              <TextInput
                placeholder="Month"
                placeholderTextColor={'#8B8B8B'}
                style={{color: '#000'}}
              />
            </View>

            <View style={styles.year}>
              <TextInput
                placeholder="Year"
                placeholderTextColor={'#8B8B8B'}
                style={{color: '#000'}}
              />
            </View>
          </View>

          <View style={styles.sumary}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.txt}>Summary</Text>
              <TouchableOpacity onPress={toggleSummaryVisibility} style={styles.arrowContainer}>
                <Icon
                  name={isSummaryVisible ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                  size={30}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
            {isSummaryVisible && (
              <TextInput
                placeholder="ADD A DESCRIPTION..."
                placeholderTextColor={'#fff'}
                style={styles.summaryInput}
              />
            )}
          </View>

          <View style={styles.sumary}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.txt}>Experience</Text>
              <TouchableOpacity onPress={toggleExperienceVisibility} style={styles.arrowContainer}>
                <Icon
                  name={isExperienceVisible ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                  size={30}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
            {isExperienceVisible && (
              <TextInput
                placeholder="ADD YOUR EXPERIENCE..."
                placeholderTextColor={'#fff'}
                style={styles.expInput}
              />
            )}
          </View>

          <View style={styles.sumary}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.txt}>Education</Text>
              <TouchableOpacity onPress={toggleEducationVisibility} style={styles.arrowContainer}>
                <Icon
                  name={isEducationVisible ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                  size={30}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
            {isEducationVisible && (
              <TextInput
                placeholder="ADD YOUR EDUCATION.."
                placeholderTextColor={'#fff'}
                style={styles.expInput}
              />
            )}
          </View>
          <CustomeButton title={'Preview'} nonbg={true} onPress={()=>navigation.navigate('resumepreviewscreen')}/>
        </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between', // To create space between top and bottom items
  },
  bgImage: {
    width: width * 0.9,
    height: height * 0.257,
    // overflow:"hidden",
    alignSelf: 'center',
    top: 20,
    borderRadius: 20,
    // backgroundColor:"red"
  },
  line: {
    width: width,
    height: height * 0.001,
    backgroundColor: '#0BECD8',
    position: 'absolute',
    top: height * 0.123,
    opacity: 0.2,
  },
  jobsrch: {
    fontSize: calculateFontSize(29),
    color: '#ffff',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
  heading: {
    alignItems: 'center',
  },
  headingtxt: {
    fontSize: calculateFontSize(18),
    color: '#fff',
    fontWeight: '700',
  },
  formCon: {
    marginVertical: height * 0.03,
  },
  inp: {
    backgroundColor: '#fff',
    marginVertical: height * 0.02,
    borderRadius: 10,
  },
  dateofbirthcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    paddingHorizontal: width * 0.07,
    height: height * 0.06,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  month: {
    paddingHorizontal: width * 0.07,
    height: height * 0.06,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  year: {
    paddingHorizontal: width * 0.07,
    height: height * 0.06,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  sumary: {
    width: width * 0.95,
    alignSelf: 'center',
    marginVertical: height * 0.03,
    borderTopWidth: 1,
    borderTopColor: '#0DFFE8',
  },
  summaryInput:{

    backgroundColor: '#1B5953',
    paddingHorizontal: width * 0.04,
    borderRadius: 10,

  },
  expInput:{

    backgroundColor: '#1B5953',
    paddingHorizontal: width * 0.04,
    borderRadius: 10,

  },
  txt:{
    color:"#fff",
    fontSize:calculateFontSize(18),
    fontWeight:"700",
    marginVertical: height * 0.01
  },
  txtdata:{
    color:"#fff",
    fontSize:calculateFontSize(14),
    fontWeight:"600"
  }
});

export default Genrateresumeform;
