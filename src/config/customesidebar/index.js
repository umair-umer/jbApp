import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import Images from '../../config/im';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {calculateFontSize} from '../../config/font';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');

const CusTomDrawer = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.procon}>
        <TouchableOpacity style={styles.image}
          onPress={() => navigation.navigate('userprofilescreen')}>
      
          <Image
            resizeMode="contain"
            style={{width: '100%', height: '100%'}}
            source={Images.pro}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.closeDrawer();
          }}>
          <Entypo size={40} name="cross" color={'#fff'} />
        </TouchableOpacity>
      </View>

      <Text style={styles.sProfileText}>Alex Hudson</Text>
      <Text style={styles.emailtext}>Alex Hudson@gmail.com</Text>
      <View style={styles.viewiconsrout}>
        <TouchableOpacity
          style={styles.buttonroutes}
          onPress={() => navigation.navigate('userprofilescreen')}>
          <Feather color={'#fff'} size={20} name="edit" />
          <Text style={styles.editbutton}>Edit profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonroutes} onPress={()=>navigation.navigate('notifyscreen')} >
          <Ionicons color={'#fff'} size={25} name="notifications" />
          <Text style={styles.editbutton}>notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonroutes}>
          <Ionicons color={'#fff'} size={25} name="document-text-outline" />
          <Text style={styles.editbutton}>Generate CV </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonroutes}>
          <Ionicons color={'#fff'} size={25} name="bookmarks-outline" />
          <Text style={styles.editbutton}>saved</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonroutes}>
          <Ionicons color={'#fff'} size={25} name="settings-outline" />
          <Text style={styles.editbutton}>settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonroutes}>
          <Feather color={'#fff'} size={25} name="send" />
          <Text style={styles.editbutton}>share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonroutes}>
          <MaterialIcons color={'#fff'} size={25} name="error-outline" />
          <Text style={styles.editbutton}>fAQ</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginVertical: height * 0.07}}>
        <TouchableOpacity style={styles.logbutton}>
          <AntDesign color={'#fff'} size={20} name="logout" />
          <Text style={styles.editbutton}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CusTomDrawer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009A8C',
    padding: 20,
  },
  procon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: height * 0.03,
  },
  image: {
    borderWidth: 1,
    width: width * 0.33,
    height: height * 0.15,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
  },
  sProfileText: {
    fontSize: calculateFontSize(25),
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    textTransform: 'capitalize',
    lineHeight: height * 0.05,
  },
  emailtext: {
    fontSize: calculateFontSize(15),
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    textTransform: 'capitalize',
  },
  editbutton: {
    fontSize: calculateFontSize(20),
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Poppins',
    textTransform: 'capitalize',
    marginHorizontal: width * 0.03,
  },
  buttonroutes: {flexDirection: 'row', marginVertical: height * 0.01},
  viewiconsrout: {
    marginVertical: height * 0.07,
  },
  logbutton: {
    borderWidth: 2,
    flexDirection: 'row',
    width: width * 0.4,
    justifyContent: 'space-evenly',
    borderColor: '#fff',
    padding: 10,
    borderRadius: 100,
    alignItems: 'center',
  },
});
