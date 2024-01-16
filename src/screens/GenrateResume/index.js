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
} from 'react-native';
import Images from '../../config/im';
import {calculateFontSize} from '../../config/font';
const {width, height} = Dimensions.get('window');
import {CustomeHeader} from '../../Components';
function ResumeGanratescreen({navigation}) {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={Images.jsbg}
      resizeMode="cover">
      <View style={styles.line}></View>
      <SafeAreaView style={styles.container}>
        <CustomeHeader iconsource3={Images.setting} />
        <View style={styles.heading}>
          <Text style={styles.headingtxt}>Select Your Resume</Text>
        </View>

      
       <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.tempCon}>
          <View style={styles.cvshowCon}>
            <TouchableOpacity style={styles.imgcon} 
            onPress={()=>navigation.navigate('resumegenrateformscreen')}>
              <Image
              source={Images.Resume1}
              style={{width:"100%",height:"100%"}}
              resizeMode='center'
              />
            </TouchableOpacity>
          </View>
          <View style={styles.cvshowCon}>
            <TouchableOpacity style={styles.imgcon}
             onPress={()=>navigation.navigate('resumegenrateformscreen')}
            >
            <Image
              source={Images.Resume2}
              style={{width:"100%",height:"100%"}}
              resizeMode='center'
              />
            </TouchableOpacity>
          </View>

          <View style={styles.cvshowCon}>
            <TouchableOpacity style={styles.imgcon}  
            onPress={()=>navigation.navigate('resumegenrateformscreen')}>
            <Image
              source={Images.Resume3}
              style={{width:"100%",height:"100%"}}
              resizeMode='center'
              />
            </TouchableOpacity>
          </View>

          <View style={styles.cvshowCon}>
            <TouchableOpacity style={styles.imgcon}  
            onPress={()=>navigation.navigate('resumegenrateformscreen')}>
            <Image
              source={Images.Resume4}
              style={{width:"100%",height:"100%"}}
              resizeMode='center'
              />
            </TouchableOpacity>
          </View>

          <View style={styles.cvshowCon}>
            <TouchableOpacity style={styles.imgcon} 
             onPress={()=>navigation.navigate('resumegenrateformscreen')}>
            <Image
              source={Images.Resume5}
              style={{width:"100%",height:"100%"}}
              resizeMode='center'
              />
            </TouchableOpacity>
          </View>

          <View style={styles.cvshowCon}>
            <TouchableOpacity style={styles.imgcon}
             onPress={()=>navigation.navigate('resumegenrateformscreen')}>
            <Image
              source={Images.Resume6}
              style={{width:"100%",height:"100%"}}
              resizeMode='center'
              />
            </TouchableOpacity>
          </View>


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
  tempCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap:"wrap",
    marginVertical: height * 0.03,
    
  },
  cvshowCon: {
    width: width * 0.45,
    height: height * 0.3,
    backgroundColor: '#2BADA1',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical:height*0.004
  },
  imgcon: {
    width: width * 0.4,
    height: height * 0.28,
    backgroundColor: '#fff',
    marginTop: height * 0.01,
    borderRadius: 5,
  },
});

export default ResumeGanratescreen;
