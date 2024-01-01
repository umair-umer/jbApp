import React from 'react';
import {
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import Images from '../../config/im';
import {calculateFontSize} from '../../config/font';
import {CustomeButton, CustomeforgetHeader} from '../../Components';
const {width, height} = Dimensions.get('window');

function Letsaddyourcard({navigation}) {
  return (
    <SafeAreaView style={styles.mainCon}>
      <CustomeforgetHeader
        onPress={() => navigation.goBack()}
        company={true}
        source={Images.arrow}
        heading={'My Profile Settings'}
      />

      <View style={styles.imgcon}>
      <View style={styles.img}>
      <Image
      source={Images.Addcard}
      styles={{width:"100%",height:"100%"}}
      resizeMode='center'
      />
      </View>
      </View>
      <Text style={styles.paymentmethod}>Let’s add your card</Text>
  <View style={styles.butcontainer}>

      <CustomeButton title={'+ Add New Card'} nonbg={true} onPress={()=>navigation.navigate('addcardlist')}/>
  </View>
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
  imgcon:{

      width:width*0.92,
      height:height*0.6,
      alignItems:"center",
      justifyContent:"center",
 
  },
  paymentmethod: {
    color: '#fff',
    fontSize: calculateFontSize(28),
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    textAlign:"center"
  },
  butcontainer: {
    marginVertical:height*0.05
  },
  
});

export default Letsaddyourcard;
