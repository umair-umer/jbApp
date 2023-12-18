import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
const {width, height} = Dimensions.get('window');
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {calculateFontSize} from '../../config/font';
import {CustomeButton, CustomeforgetHeader} from '../../Components';
import Images from '../../config/im';

function Employetypescreen({navigation}) {
  const [selectedType, setSelectedType] = useState(null);
  const [salaryRange, setSalaryRange] = useState([50000, 100000]); // Initial salary range
  const jobTypes = [
    {label: 'Full time', value: 'Full time'},
    {label: 'Part time', value: 'Part time'},
    {label: 'Contract', value: 'Contract'},
    {label: 'Internship', value: 'Internship'},
  ];

  const handleTypeChange = value => {
    setSelectedType(value);
  };

  const handleSalaryChange = values => {
    setSalaryRange(values);
  };
  return (
    <SafeAreaView style={styles.mainCon}>
      <CustomeforgetHeader source={Images.arrow} company={true} />

      <Text style={styles.heading}>Employment type</Text>

      {jobTypes.map(type => (
        <View key={type.value} style={styles.typeItem}>
          <RadioButton
            value={type.value}
            status={selectedType === type.value ? 'checked' : 'unchecked'}
            onPress={() => handleTypeChange(type.value)}
            uncheckedColor="#fff"
            color="#005C54"
          />
          <Text
            style={{
              color: '#000',
              fontSize: calculateFontSize(20),
              color: '#fff',
              fontWeight: '500',
            }}>
            {type.label}
          </Text>
        </View>
      ))}

      <View style={styles.willing}>
        <Text
          style={{
            fontSize: calculateFontSize(18),
            color: '#fff',
            fontWeight: '600',
          }}>
          Willing To Travel
        </Text>
      </View>

      <View style={styles.salaryRange}>
        <MultiSlider
          values={salaryRange}
          min={0}
          max={200000}
          step={1000}
          sliderLength={width - width * 0.07}
          onValuesChange={handleSalaryChange}
          selectedStyle={{backgroundColor: '#fff'}}
          unselectedStyle={{backgroundColor: '#fff'}}
          containerStyle={{alignItems: 'center'}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: width * 0.05,
          }}>
          <Text style={styles.btxt}>{salaryRange[0]}KM</Text>
          <Text style={styles.btxt}>{salaryRange[1]}KM</Text>
        </View>
      </View>

      <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
        <CustomeButton
          nonbg={true}
          title={'Next'}
          onPress={() => navigation.navigate('joblocation')}
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
    // marginVertical: height * 0.04,
    marginBottom: height * 0.02,
  },

  typeItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  willing: {
    marginVertical: height * 0.05,
  },
  
  btxt: {
    color: '#fff',
  },
 



});

export default Employetypescreen;
