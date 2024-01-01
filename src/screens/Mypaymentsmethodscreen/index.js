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
import {CustomeButton, CustomeforgetHeader} from '../../Components';
const {width, height} = Dimensions.get('window');

function Mypaymentscreen({navigation}) {
  const [selectMaster, setSelectMaster] = useState(false);
  const [selectPaypal, setSelectPaypal] = useState(false);

  const handleSelect = paymentMethod => {
    if (paymentMethod === 'Mastercard') {
      setSelectMaster(true);
      setSelectPaypal(false);
    } else if (paymentMethod === 'Paypal') {
      setSelectMaster(false);
      setSelectPaypal(true);
    }
    console.log(paymentMethod, '===>');
  };
  return (
    <SafeAreaView style={styles.mainCon}>
      <CustomeforgetHeader
        onPress={() => navigation.goBack()}
        company={true}
        source={Images.arrow}
        heading={'My Profile Settings'}
      />

      <View style={{paddingHorizontal: width * 0.02}}>
        <Text style={styles.paymentmethod}>Payment Method</Text>
        <View style={styles.flexspacborder}>
          <View style={styles.flex}>
            <View style={styles.iconplay}>
              <Image
                resizeMode="center"
                style={{width: '100%', height: '100%'}}
                source={Images.Mastercard}
              />
            </View>
            <View style={styles.margin}>
              <Text style={styles.intro}>Master Card</Text>
              <Text style={styles.time}>467 434332 3434 232</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => handleSelect('Mastercard')}>
            <Text
              style={selectMaster ? styles.backgroundradio : styles.circleradio}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.flexspacborder}>
          <View style={styles.flex}>
            <View style={styles.iconplay}>
              <Image
                resizeMode="center"
                style={{width: '100%', height: '100%'}}
                source={Images.paypal}
              />
            </View>
            <View style={styles.margin}>
              <Text style={styles.intro}>Paypal</Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => handleSelect('Paypal')}>
            <Text
              style={selectPaypal ? styles.backgroundradio : styles.circleradio}
            />
          </TouchableOpacity>
        </View>

        <CustomeButton title={'+Add New Card'} nonbg={true} onPress={()=>navigation.navigate('letpayment')}/>
      </View>

      <View style={styles.hrd}>
        <Text style={styles.paymentmethod}>Transactions</Text>
        <Text style={styles.viewall}>View all</Text>
      </View>
      <View
        style={{
          borderBottomWidth: 0.2,
          marginVertical: height * 0.001,
          borderBottomColor: '#fff',
        }}
      />
      <View
        style={{flexDirection: 'row', justifyContent: 'space-between'}}
        onPress={() => navigation.navigate('mypaymentscreen')}>
        <Text style={styles.cvtxtt}>User interface design....</Text>
        <Text style={styles.cvtxttt}>- $53.95</Text>
      </View>
      <View
        style={{flexDirection: 'row', justifyContent: 'space-between'}}
        onPress={() => navigation.navigate('mypaymentscreen')}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.img}>
            <Image
              source={Images.Mastercard}
              style={{width: '100%', height: '100%'}}
              resizeMode="center"
            />
          </View>
          <Text style={{color: '#fff', fontSize: calculateFontSize(11)}}>
            467 434332 3434 232
          </Text>
        </View>
        <Text style={{color: '#fff', fontSize: calculateFontSize(11)}}>
          July 14, 2025
        </Text>
      </View>
      <View
        style={{
          borderBottomWidth: 0.2,
          marginVertical: height * 0.001,
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
  paymentmethod: {
    color: '#fff',
    fontSize: calculateFontSize(15),
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  margin: {
    marginHorizontal: width * 0.03,
  },
  icon: {
    width: width * 0.12,
    height: height * 0.05,
    paddingHorizontal: 10,
    backgroundColor: '#2FB5A8',
    borderRadius: 10,
  },
  flexspac: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: height * 0.03,
  },
  flexspacborder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderBottomWidth: 0.2,
    // borderBottomColor: "#fff",
    paddingBottom: height * 0.03,
    marginVertical: height * 0.02,
  },
  iconplay: {
    width: width * 0.15,
    height: height * 0.07,
    padding: 10,
    backgroundColor: '#2BADA1',
    borderRadius: 10,
  },
  intro: {
    color: '#fff',
    fontSize: calculateFontSize(15),
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  time: {
    color: '#fff',
    fontSize: calculateFontSize(15),
    fontFamily: 'Poppins',
  },
  circleradio: {
    width: width * 0.04,
    height: height * 0.02,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#0DFFE8',
  },
  backgroundradio: {
    backgroundColor: '#2BADA1',
    width: width * 0.04,
    height: height * 0.02,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#0DFFE8',
  },
  hrd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: height * 0.04,
  },
  viewall: {
    fontSize: calculateFontSize(12),
    color: '#fff',
  },
  cvtxtt: {
    fontSize: calculateFontSize(14),
    color: '#fff',
    fontWeight: '400',
    fontFamily: 'popin',
    marginVertical: height * 0.01,
  },
  cvtxttt: {
    fontSize: calculateFontSize(14),
    color: '#FF7474',
    fontWeight: '400',
    fontFamily: 'popin',
    marginVertical: height * 0.01,
  },
  img: {
    width: width * 0.05,
    height: height * 0.03,
  },
});

export default Mypaymentscreen;
