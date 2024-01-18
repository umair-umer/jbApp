import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import {RadioButton} from 'react-native-paper';
import {CustomeforgetHeader, CustomeButton} from '../../Components';

import Images from '../../config/im';
import {calculateFontSize} from '../../config/font';
function Salaryexpscreen({navigation,route}) {
  const  data2= route.params;
  console.log(data2,"slary screen");
  const [selectedType, setSelectedType] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [inputValueto, setInputValueto] = useState('');
  const jobTypes = [
    {label: 'Daily', value: 'daily'},
    {label: 'Weekly', value: 'weekly'},
    {label: 'Monthly', value: 'monthly'},
    // { label: 'Internship', value: 'Internship' },
  ];

  const handleTypeChange = value => {
    setSelectedType(value);
  };
  const handleInputChange = (text) => {
    setInputValue(text);
  };
  const handleInputChangeTo = (text) => {
    setInputValueto(text);
  };
  const handleNext=()=>{
   navigation.navigate('jobCategory',{data2:data2,selectedType,inputValueto,inputValue})
  }

  return (
    <SafeAreaView style={styles.mainCon}>
 
        <CustomeforgetHeader company={true} source={Images.arrow} />

    
        <Text style={styles.heading}>Salary</Text>
   

      <View style={styles.inpcon}>
        <TextInput
          placeholder="start from"
          placeholderTextColor="#fff"
          style={styles.inp}
          onChangeText={handleInputChange}
          value={inputValue}
        />
        <TextInput
          placeholder="To"
          placeholderTextColor="#fff"
          style={styles.inp}
          onChangeText={handleInputChangeTo}
          value={inputValueto}
        />
      </View>
      <View style={styles.type}>
        {jobTypes.map(type => (
          <View key={type.value} style={styles.typeItem}>
            <RadioButton
              value={type.value}
              status={selectedType === type.value ? 'checked' : 'unchecked'}
              onPress={() => handleTypeChange(type.value)}
              uncheckedColor="#07514A"
              color="#fff"
            />
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                color: '#fff',
                fontWeight: '500',
              }}>
              {type.label}
            </Text>
          </View>
        ))}
      </View>

      <View style={{alignItems: 'center', bottom: height * 0.02}}>
        <CustomeButton
          nonbg={true}
          title={'Next'}
          onPress={handleNext}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    padding: 20,

    backgroundColor: 'rgba(0, 154, 140, 0.7)',
  },

  heading: {
    color: '#fff',
    fontSize: calculateFontSize(24),
    fontWeight: '700',
    fontFamily:"Poppins"
    // marginVertical: height * 0.05,
  },

  inpcon: {
    marginVertical:height*0.02,
  },

  inp: {
    borderColor: '#fff',
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderRadius: 10,
    marginVertical: height * 0.008,
    paddingHorizontal: width * 0.04,
    paddingBottom: height * 0.03,
    color: '#fff',
  },
  typeItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  type: {
    flex: 1,
    marginVertical: height * 0.04,
  },
});

export default Salaryexpscreen;
