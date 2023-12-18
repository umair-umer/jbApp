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
} from 'react-native'
import Images from '../../config/im';
import {calculateFontSize} from '../../config/font';
import {CustomeforgetHeader} from '../../Components';
const {width, height} = Dimensions.get('window');
function Companyrejectedjob({navigation}) {
  return (
    <SafeAreaView style={styles.mainCon}>
    <CustomeforgetHeader
      onPress={() => navigation.goBack()}
      company={true}
      source={Images.arrow}
      heading={'Rejected applicants'}
    />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    mainCon: {
      flex: 1,
      // padding: 20,
      paddingHorizontal:width*0.035,
      backgroundColor: 'rgba(0, 154, 140,0.9)',
    },
    pendview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderBottomWidth:2,
        // paddingBottom:height*0.02,
        // borderStyle: 'dotted'
      },
    })

export default Companyrejectedjob
