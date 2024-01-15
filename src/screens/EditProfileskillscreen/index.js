import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const {width, height} = Dimensions.get('window');
import {calculateFontSize} from '../../config/font';
import {CustomeButton, CustomeforgetHeader} from '../../Components';
import Images from '../../config/im';
import {useNavigation} from '@react-navigation/native';

const initialJobs = [
  'Software Engineer',
  'Power BI Developer',
  'Java Developer',
  'Mobile Application Developer',
  'Custom Developer',
  'UI UX Designer',
];

function Editprofileskillscreen() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedJobs, setSelectedJobs] = useState([]);

  const handleSearch = text => {
    setSearchText(text);
    const filteredJobs = initialJobs.filter(job =>
      job.toLowerCase().includes(text.toLowerCase()),
    );
    setSearchResults(filteredJobs);
  };

  const handleJobSelect = job => {
    // Toggle selection
    setSelectedJobs(prevSelectedJobs => {
      if (prevSelectedJobs.includes(job)) {
        return prevSelectedJobs.filter(selectedJob => selectedJob !== job);
      } else {
        return [...prevSelectedJobs, job];
      }
    });
  };

  const handleRemoveSelectedJob = job => {
    // Remove the selected job from the list
    setSelectedJobs(prevSelectedJobs =>
      prevSelectedJobs.filter(selectedJob => selectedJob !== job),
    );
  };

  const handleSearchButtonPress = () => {
    // Navigate to the user profile screen with the selected jobs
    navigation.navigate('userprofilescreen', {selectedJobs});
  };

  const renderJobItem = ({item}) => {
    const isInitialJob = initialJobs.includes(item);
    const isSelected = selectedJobs.includes(item);
    const backgroundColor = isSelected
      ? '#2BADA1'
      : isInitialJob
      ? '#0E746B'
      : '#1C75BC';

    return (
      <TouchableOpacity
        style={{
          ...styles.searchResultItem,
          backgroundColor,
        }}
        onPress={() => handleJobSelect(item)}>
        <Text
          style={{
            color: isSelected ? '#fff' : '#fff', // Change text color for selected jobs
            fontWeight: '600',
            paddingHorizontal: width * 0.007,
            fontSize: calculateFontSize(10),
          }}>
          {item}
        </Text>
        {isSelected && (
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => handleRemoveSelectedJob(item)}>
            <Text style={styles.removeButtonText}>X</Text>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  };

  const handleRemoveSkill = job => {
    // Remove the selected skill from the list
    setSelectedJobs(prevSelectedJobs =>
      prevSelectedJobs.filter(selectedJob => selectedJob !== job),
    );
  };

  return (
    <SafeAreaView style={styles.mainCon}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <CustomeforgetHeader
            onPress={() => navigation.goBack()}
            company={true}
            source={Images.arrow}
          />
          <View style={styles.heading}>
            <Text style={styles.txt}>Add Skills to your profile</Text>
            <Text style={styles.slogan}>
              Choose your Skills to add to your profile (any 9 )
            </Text>
          </View>

          {/* Selected skills view here  */}
          <View style={styles.skillpoincontainer}>
            {selectedJobs.map((job, index) => (
              <View key={index} style={styles.skilsscon}>
                <Text style={styles.skilltext}>{job}</Text>
                <TouchableOpacity
              style={styles.removeSkillButton}
              onPress={() => handleRemoveSkill(job)}
            >
              <Text style={styles.removeSkillButtonText}>X</Text>
            </TouchableOpacity>

              </View>
            ))}
          </View>
          {/* Selected skills view end here  */}
          
          <TextInput
            style={styles.searchBar}
            placeholder="Search Specific Skill"
            value={searchText}
            onChangeText={handleSearch}
            placeholderTextColor={'#fff'}
          />

          <View style={styles.pltfom}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={searchResults}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderJobItem}
              numColumns={2}
            />
          </View>

          <View style={styles.btncon}>
            <CustomeButton
              title={'update'}
              nonbg={true}
              onPress={handleSearchButtonPress}
            />
          </View>
        </View>
    </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    paddingHorizontal: width * 0.04,
    backgroundColor: 'rgba(0, 154, 140,0.9)',
  },

  searchBar: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    marginVertical: height * 0.01,
    paddingHorizontal: width * 0.03,
    color: 'white',
  },

  txt: {
    fontSize: calculateFontSize(34),
    color: 'white',
    fontWeight: '600',
  },
  slogan: {
    fontSize: calculateFontSize(12),
    color: 'white',
  },
  selectedJobView: {
    marginTop: height * 0.01,
    backgroundColor: '#C3E5FF',
    borderRadius: 10,
    color: '#000',
  },
  selectedJobText: {
    fontSize: calculateFontSize(25),
    fontWeight: 'bold',
    color: 'black',
  },
  searchResultItem: {
    padding: height * 0.01,
    marginBottom: height * 0.008,
    marginRight: width * 0.02,
    borderRadius: 10,
    width: width * 0.43,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  removeButton: {
    width: width * 0.056,
    height: height * 0.026,
    backgroundColor: '#2BADA1',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#C3E5FF',
    fontWeight: '500',
    fontSize: calculateFontSize(10),
  },
  btncon: {
    paddingHorizontal: width * 0.04,
  },
  pltfom: {
    height: height * 0.542,
  },

  skillpoincontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: height * 0.02,
    paddingTop: height * 0.02,
  },
  skilsscon: {
    backgroundColor: '#3C948B',
    marginHorizontal: width * 0.01,
    padding: 5,
    marginVertical: height * 0.004,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  removeSkillButton: {
    backgroundColor: '#2BADA1',
    paddingHorizontal:width * 0.02,
    marginHorizontal: width *0.008,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  removeSkillButtonText: {
    color: '#C3E5FF',
    fontWeight: '500',
    fontSize: calculateFontSize(8),
  },
});

export default Editprofileskillscreen;
