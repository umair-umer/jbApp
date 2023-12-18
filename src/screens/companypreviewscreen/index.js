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
import {CustomeforgetHeader, CustomeButton, CustomModal} from '../../Components';
import Images from '../../config/im';
import {calculateFontSize} from '../../config/font';

const CompanyPreView = ({navigation}) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const data = [
    'Who is located in ',
    'Who works in ',
    'who specialize in ',
    'we are looking to fill   ',
 
   

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
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={styles.mainCon}>
      <CustomeforgetHeader
        company={true}
        source={Images.arrow}
        heading={'Preview'}
      />
      <Text style={styles.jobcattext}>I’m looking for someone</Text>
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
          title={'Post Job'}
          onPress={() => toggleModal()}
        />
      </View>
      <CustomModal 
       status={'Job Posted successfully '}
       statusTwo={
         'Your Job has been Posted successfully'
       }
       jobposted={true}
       isModalVisible={isModalVisible}
       onPress={toggleModal}
      />
    </SafeAreaView>
  );
};

export default CompanyPreView;
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
    marginVertical: height * 0.05,
  },
  selectbutt: {
    width: width * 0.9,
    height: height * 0.05,

    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: width * 0.02,
    marginVertical: height * 0.05,
  },
  selecttext: {
    color: '#fff',
    fontSize: calculateFontSize(25),
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
