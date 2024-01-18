import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {CustomeButton, CustomeforgetHeader} from '../../Components';
import {calculateFontSize} from '../../config/font';
import Images from '../../config/im';
const {width, height} = Dimensions.get('window');

const initialJobs = [
  'Alaska',
  'Arizona',
  'Washington',
  'Louisiana',
  'Mississippi',
  'South Korea',
  'New York',
  'South Carolina',
  'Texas',
];

function Joblocationscreen({navigation,route}) {
   const data=route.params;
   console.log(data,"locRang");
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleSearch = text => {
    setSearchText(text);
    const filteredJobs = initialJobs.filter(job =>
      job.toLowerCase().includes(text.toLowerCase()),
    );
    setSearchResults(filteredJobs);
  };

  const handleJobSelect = job => {
    setSelectedJob(job);
  };

  const handleRemoveSelectedJob = () => {
    setSelectedJob(null);
  };
  const  Handlepostparam=()=>{
    navigation.navigate('companysalary',{data:data,selectedJob})
   
   }

  const renderJobItem = ({item}) => {
    const isInitialJob = initialJobs.includes(item);
    const backgroundColor = isInitialJob ? '#07514A' : '#fff';

    return (
      <TouchableOpacity
        style={{
          ...styles.searchResultItem,
          backgroundColor,
        }}
        onPress={() => handleJobSelect(item)}>
        <Text
          style={{
            color: '#fff',
            fontWeight: '600',
            paddingHorizontal: width * 0.02,
          }}>
          {item}
        </Text>
        {selectedJob === item && (
          <TouchableOpacity
            style={styles.removeButton}
            onPress={handleRemoveSelectedJob}>
            <Text style={styles.removeButtonText}>X</Text>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainCon}>
      <CustomeforgetHeader company={true} source={Images.arrow} />

      <Text style={styles.txt}>Job location</Text>

      <TextInput
        style={styles.searchBar}
        placeholder="Type Location, city or specific address"
        placeholderTextColor={'#fff'}
        value={searchText}
        onChangeText={handleSearch}
      />

      <FlatList
        data={searchResults}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderJobItem}
        numColumns={2}
      />

  
        <CustomeButton title={'Next'} nonbg={true} onPress={Handlepostparam} />
   
    </View>
  );
}

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    padding: 20,

    backgroundColor: 'rgba(0, 154, 140, 0.7)',
  },

  txt: {
    color: '#fff',
    fontSize: calculateFontSize(35),
    fontWeight: '700',
  },
  searchBar: {
    height: height * 0.07,
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
    paddingHorizontal: width * 0.03,
    borderRadius: 10,
    color: '#fff',
  },


  searchResultItem: {
    padding: height * 0.012,
    marginBottom: height * 0.008,
    marginRight: width * 0.02,
    backgroundColor: '#C3E5FF',
    borderRadius: 10,
    color: '#000',
    width: width * 0.43,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  removeButton: {
    width: width * 0.069,
    height: height * 0.033,
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#07514A',
    fontWeight: '500',
  },
  btncon: {
    height: height * 0.37,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default Joblocationscreen;
