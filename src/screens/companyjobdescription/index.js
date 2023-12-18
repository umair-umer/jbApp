import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { calculateFontSize } from '../../config/font';
import { CustomeforgetHeader ,CustomeButton} from '../../Components';
const {width, height} = Dimensions.get('window');
import Images from '../../config/im';

function Jobdescriptionscreen({navigation}) {
  return (
    <SafeAreaView style={styles.miancon}>
      <CustomeforgetHeader
        company={true}
        source={Images.arrow}
        heading={'Job Category'}
      />

      <Text style={styles.heading}>Job Description</Text>

      <View style={styles.inpcon}>
        <TextInput
          placeholder="Type Title"
          placeholderTextColor={'#fff'}
          style={styles.inp}
        />

        <TextInput
          placeholder="Add Company website URL"
          placeholderTextColor={'#fff'}
          style={styles.inp}
        />

        <TextInput
          placeholder="Description"
          placeholderTextColor={'#fff'}
          style={styles.inp1}
        />
      </View>

      <CustomeButton
          nonbg={true}
          title={'Next'}
          onPress={() => navigation.navigate('locationphot')}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  miancon: {
    flex: 1,
    backgroundColor:'#0F7369',
    // justifyContent: 'center',
    padding:10,
  },

  heading: {
    // marginHorizontal: width * 0.03,
    paddingHorizontal: width * 0.02,
    color: '#fff',
    fontSize: calculateFontSize(35),
    fontWeight: '600',
  },
  btncon: {
    height: height * 0.45,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

 

  inpcon: {
    flex:1,
    paddingVertical:height*0.02,
    // paddingHorizontal: width * 0.04,
  },
  inp: {
    borderColor: '#fff',
    borderWidth: 1,
    paddingHorizontal: width * 0.06,
    borderRadius: 10,
    marginVertical: height * 0.01,
    color: '#fff',
  },
  inp1: {
    borderColor: '#ffff',
    borderWidth: 1,
    height: height * 0.2,
    paddingHorizontal: width * 0.06,
    paddingBottom: height * 0.15,
    borderRadius: 10,
    color: '#fff',
    marginVertical:height*0.02,
  },
});

export default Jobdescriptionscreen;
