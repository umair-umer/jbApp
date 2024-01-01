import React from 'react';
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
function Myprofilesettingscreen({navigation}) {
  return (
    <SafeAreaView style={styles.mainCon}>
      <CustomeforgetHeader
        onPress={() => navigation.goBack()}
        company={true}
        source={Images.arrow}
        heading={'My Profile Settings'}
      />

      <View
        style={{
          borderBottomWidth: 0.2,
          marginVertical: height * 0.01,
          borderBottomColor: '#fff',
        }}
      />
      <TouchableOpacity style={{marginHorizontal: width * 0.04}} onPress={()=>navigation.navigate('Purchaseprofilescreen')} >
        <Text style={styles.cvtxtt}>Course Management</Text>
      </TouchableOpacity>

      <View
        style={{
          borderBottomWidth: 0.2,
          marginVertical: height * 0.01,
          borderBottomColor: '#fff',
        }}
      />
      <TouchableOpacity style={{marginHorizontal: width * 0.04}} onPress={()=>navigation.navigate('mypaymentscreen')} >
        <Text style={styles.cvtxtt}>Payment And Payouts</Text>
      </TouchableOpacity>


      <View
        style={{
          borderBottomWidth: 0.2,
          marginVertical: height * 0.01,
          borderBottomColor: '#fff',
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    // padding: 20,
    paddingHorizontal: width * 0.035,
    backgroundColor: 'rgba(0, 154, 140,0.9)',
  },
  pendview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cvtxtt: {
    fontSize: calculateFontSize(14),
    color: '#fff',
    fontWeight: '400',
    fontFamily: 'popin',
    marginVertical: height * 0.01,
  },
});

export default Myprofilesettingscreen;
