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

function Companyapplicationstatus({navigation}) {
  return (
    <SafeAreaView style={styles.mainCon}>
      <CustomeforgetHeader
        company={true}
        source={Images.arrow}
        heading={'25 Applicants'}
      />

      <View style={styles.contents}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('pendingview');
          }}
          style={styles.blucontent}>
          <Text style={styles.txt}>10</Text>
          <Text style={styles.txt1}>pending</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.blucontent}
          onPress={() => {
            navigation.navigate('shortview');
          }}>
          <Text style={styles.txt}>10</Text>
          <Text style={styles.txt1}>shortlisted</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.blucontent}
          onPress={() => {
            navigation.navigate('rejectedview');
          }}>
          <Text style={styles.txt}>05</Text>
          <Text style={styles.txt1}>rejected</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.blucontent1}>
          <Text style={styles.txt}>08</Text>
          <Text style={styles.txt1}>expired</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    paddingHorizontal:width*0.04,
    backgroundColor: 'rgba(0, 154, 140,0.9)',
  },
  contents:{
      
    // backgroundColor: 'rgba(0, 154, 140,0.9)',
    alignItems:"center",
    justifyContent:"center",
},
blucontent:{

     width:width*0.9,
     height:height*0.07,
     backgroundColor:"rgba(0, 92, 84, 1)",
     flexDirection:"row",
     justifyContent:"space-between",
     alignItems:"center",
     paddingHorizontal:width*0.05,
     borderRadius:10,
     marginVertical:height*0.01
},
blucontent1:{

  width:width*0.9,
  height:height*0.07,
  backgroundColor:"rgba(0, 92, 84, 1)",
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center",
  paddingHorizontal:width*0.05,
  borderRadius:10,
  marginVertical:height*0.01,
  opacity:0.4
},

txt:{

    color:"#fff",
    fontSize:34,
    fontWeight:"800"
},
txt1:{

  color:"#fff",
  fontSize:14,
  fontWeight:"700"
}



});

export default Companyapplicationstatus;
