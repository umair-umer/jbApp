import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import {CustomeforgetHeader, CustomeButton} from '../../Components';

import Images from '../../config/im';
import {calculateFontSize} from '../../config/font';

const JobSeniority = ({navigation,route}) => {
  const datasenorityscreen=route.params;
  console.log(datasenorityscreen,"datasenorityscreen");
  const [selectedCategories, setSelectedCategories] = useState([]);
const HandleNext=()=>{
  navigation.navigate('jobdes',{datasenorityscreen:datasenorityscreen,selectedCategories})
}
  const data = [
    'Entry',
    'Junior ',
    'Mid level  ',
    'senior ',
    'lead',
    'executive ',
   

    // Add more categories as needed
  ];

  const toggleCategory = category => {
    // Check if the category is already selected
    if (selectedCategories.includes(category)) {
      // If selected, remove it from the list
      setSelectedCategories(prevSelected =>
        prevSelected.filter(item => item !== category),
      );
    } else {
      // If not selected, add it to the list
      setSelectedCategories(prevSelected => [...prevSelected, category]);
    }
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.selectbutt,
        selectedCategories.includes(item) && styles.Activeselectbutt,
      ]}
      onPress={() => toggleCategory(item)}>
      <Text style={styles.selecttext}>{item}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.mainCon}>
      <CustomeforgetHeader
        company={true}
        source={Images.arrow}
        heading={'Job Category'}
      />
      <Text style={styles.jobcattext}>With following seniority</Text>
      <View
        showsVerticalScrollIndicator={false}
        style={styles.scrolcontainertchaild}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item}
          contentContainerStyle={styles.flatListContainer}
        />
        <CustomeButton
          nonbg={true}
          title={'Next'}
          onPress={HandleNext}
        />
      </View>
    </SafeAreaView>
  );
};

export default JobSeniority;
const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    padding: 20,

    backgroundColor: 'rgba(0, 154, 140, 0.7)',
  },
  jobcattext: {
    color: '#fff',
    fontSize: calculateFontSize(30),
    fontWeight: '700',
    fontFamily: 'Poppins',
  },
  Activeselectbutt: {
    width: width * 0.9,
    height: height * 0.05,
    backgroundColor: '#07514A',
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: width * 0.02,
    marginVertical: height * 0.009,
  },
  selectbutt: {
    width: width * 0.9,
    height: height * 0.05,

    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: width * 0.02,
    marginVertical: height * 0.009,
  },
  selecttext: {
    color: '#fff',
    fontSize: calculateFontSize(15),
    fontWeight: '700',
    fontFamily: 'Poppins',
  },

  scrolcontainertchaild: {
    flex:1,
    // height: height * 0.99,
    marginTop: height * 0.02,
    //   paddingBottom:height*0.3
  },
});
