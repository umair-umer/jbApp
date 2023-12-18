import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Images from '../../config/im';
import InputWithLeftIcon from '../../Components/InputWithLeftIcon';
import {calculateFontSize} from '../../config/font';
const {width, height} = Dimensions.get('window');

function Specialization({navigation}) {
  const [boxColors, setBoxColors] = useState([
    '#00514A',
    '#00514A',
    '#00514A',
    '#00514A',
    '#00514A',
    '#00514A',
  ]); // Initial colors for 3 boxes

  const handleBoxPress = index => {
    setBoxColors(prevColors => {
      const newColors = [...prevColors];
      newColors[index] =
        prevColors[index] === '#00514A' ? '#2BADA1' : '#00514A';
      return newColors;
        
    });
    navigation.navigate('seachingscreen')

  };

  const renderJobBoxes = () => {
    return (
      <View style={styles.clr}>
        <View style={{paddingHorizontal: width * 0.04}}>
          <InputWithLeftIcon
            icon="search"
            placeholder="Location"
            onChangeText={text => console.log(text)}
            value=""
          />
          <View style={styles.headingCon}>
            <Text
              style={{
                fontSize: calculateFontSize(20),
                fontWeight: 'bold',
                color: '#fff',
              }}>
              Spacialization
            </Text>
          </View>
        </View>
        <View
          style={styles.main}
         >
          {boxColors.map((color, index) => (
            <TouchableOpacity
           
              key={index}
              style={[styles.JobBox, {backgroundColor: color}]}
              onPress={() => handleBoxPress(index) }>
              <View style={styles.circle}>
                <View style={styles.img}>
                  <Image
                    source={Images.Guard}
                    style={{width: '70%', height: '70%', resizeMode: 'contain'}}
                  />
                </View>
              </View>
              <Text style={{color: '#fff', fontWeight: '600'}}>Legal</Text>
              <Text style={{color: '#fff', fontWeight: '600'}}>120 jobs</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  return <>{renderJobBoxes()}</>;
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#009A8C',
    width: width,
    // // paddingVertical: height * 0.0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap', // Allow boxes to wrap to the next line
    height: height,
    // flex:1,
    // marginVertical:height*0.02,
  },
  JobBox: {
    width: width * 0.47,
    height: height * 0.25,
    // marginHorizontal: width * 0.05,
    marginBottom: height * 0.02,
    marginTop: height * 0.01,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  circle: {
    width: width * 0.18,
    height: height * 0.08,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',

    // opacity: 0.7,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingCon: {
    justifyContent: 'center',
    // paddingHorizontal: width * 0.05,
    marginVertical: height * 0.02,
    color: '#000',
  },
  img: {
    width: '70%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clr: {
    backgroundColor: '#009A8C',
  },
});

export default Specialization;
