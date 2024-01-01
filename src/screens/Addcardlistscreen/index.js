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
  TextInput,
} from 'react-native';
import Images from '../../config/im';
import {calculateFontSize} from '../../config/font';
import {CustomeButton, CustomeforgetHeader} from '../../Components';
const {width, height} = Dimensions.get('window');
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
function Addcardlistscreen({navigation}) {
  return (
    <SafeAreaView style={styles.mainCon}>
      <CustomeforgetHeader
        onPress={() => navigation.goBack()}
        company={true}
        source={Images.arrow}
        heading={'My Profile Settings'}
      />
      <View>
        <Text style={styles.txt}>Card List</Text>
        <Text style={styles.slogan}>
          Enter your card info into the box below
        </Text>
      </View>

      <View style={styles.inpcon}>
        <View style={styles.img}>
          <Image
            source={Images.Mastercard}
            style={{width: '100%', height: '100%'}}
            resizeMode="center"
          />
        </View>
        <View style={{marginRight: width * 0.09}}>
          <TextInput
            placeholder="467 434332 3434 232"
            placeholderTextColor={'#fff'}
            style={{color: '#fff'}}
          />
        </View>

        <TouchableOpacity style={styles.delcon}>
          <MaterialIcons name="delete-outline" size={23} color={'#fff'} />
        </TouchableOpacity>
      </View>

      <View style={styles.butcontainer}>

<CustomeButton title={'+ Add New Card'} nonbg={true} onPress={()=>navigation.navigate('myprofileverifyscreen')}/>
</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    paddingHorizontal: width * 0.03,
    backgroundColor: 'rgba(0, 154, 140,0.9)',
  },
  imgcon: {
    width: width * 0.92,
    height: height * 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: calculateFontSize(19),
    color: '#fff',
    fontWeight: '700',
  },
  slogan: {
    fontSize: calculateFontSize(13),
    fontWeight: '400',
    color: '#fff',
  },
  inpcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: height * 0.02,
  },
  img: {
    width: width * 0.07,
    height: height * 0.06,
    marginHorizontal: width * 0.04,
  },
  delcon: {
    width: width * 0.15,
    height: height * 0.06,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  butcontainer: {
    marginVertical:height*0.5
  },
});

export default Addcardlistscreen;
