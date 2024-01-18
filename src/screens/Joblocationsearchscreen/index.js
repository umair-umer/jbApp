import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, TextInput, FlatList,TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get("window");
import { CustomeButton } from '../../Components';
import { calculateFontSize } from '../../config/font';



const initialJobs = [
    'New york',
    'Canda',
    'London uk',
    'Brazil',
    'Portugal',
    'America',
    'UAE'
  ];
  
  function Loctionsearching({navigation,route}) {
    const locationsearch=route.params;
    console.log(locationsearch,"locationsearch");
      const [searchText, setSearchText] = useState('');
      const [searchResults, setSearchResults] = useState([]);
      const [selectedJob, setSelectedJob] = useState(null);
    
      const handleSearch = (text) => {
        setSearchText(text);
        const filteredJobs = initialJobs.filter(job => job.toLowerCase().includes(text.toLowerCase()));
        setSearchResults(filteredJobs);
      };
    
      const handleJobSelect = (job) => {
        setSelectedJob(job);
        navigation.navigate('prefscreen',{selectedJob})
      };
    
      const handleRemoveSelectedJob = () => {
          setSelectedJob(null);
        };
  
        const renderJobItem = ({ item }) => {
          const isInitialJob = initialJobs.includes(item);
          const backgroundColor = isInitialJob ? 'rgba(12, 104, 96, 0.6)' : '#1C75BC';
        
          return (
            <TouchableOpacity
              style={{
                ...styles.searchResultItem,
                backgroundColor,
              }}
              onPress={() => handleJobSelect(item)}
            >
              <Text style={{color:"#fff",fontWeight:"600",paddingHorizontal:width*0.02}}>{item}</Text>
              {selectedJob === item && (
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={handleRemoveSelectedJob}
                >
                  <Text style={styles.removeButtonText}>X</Text>
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          );
        };
    return (
      <View style={styles.mainCon}>
      <View style={styles.heading}>
        <Text style={styles.txt}>
        where are your 
          preferred locations?
        </Text>
        <Text style={styles.slogan}>
        Choose your preferred locations for better search
        </Text>
      </View>
  
      <TextInput
        style={styles.searchBar}
        placeholder="Search for location"
        placeholderTextColor={"#fff"}
        value={searchText}
        onChangeText={handleSearch}
      />
  
      <FlatList
        data={searchResults}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderJobItem}
        numColumns={2}  
      />
  
      {/* {selectedJob && (
        <View style={styles.selectedJobView}>
          <Text style={styles.selectedJobText}>{selectedJob}</Text>
        </View>
      )} */}
  
  <View style={styles.btncon}>
  
<CustomeButton title={'Search'} nonbg={true} onPress={()=>navigation.navigate('prefscreen')}/>
  </View>
  
  </View>
  
     
    );
  }
  
  const styles = StyleSheet.create({
    mainCon: {
      flex:1,
      // justifyContent: "center",
      paddingVertical: height * 0.02,
      paddingHorizontal: width * 0.06,
      backgroundColor:"#009A8C"
    },
    heading: {
      // width: width * 0.58,
    },
    txt: { 
      color: "#fff",
      fontSize: calculateFontSize(35),
      fontWeight: "700",
    },
    slogan: {
      color: "#fff",
      fontWeight: "600",
      fontSize: calculateFontSize(15),
    },
    searchBar: {
      height:height* 0.07,
      borderColor: '#fff',
      borderWidth: 1,
      marginTop: height *0.02,
      marginBottom: height *0.02,
      paddingHorizontal: width * 0.03,
      borderRadius:30,
      color:"#fff"
    },
    selectedJobView: {
      padding: height*0.02,
      marginTop:height*0.02,
      backgroundColor: '#C3E5FF',
      borderRadius: 10,
      color:"#1C75BC"
    },
    selectedJobText: {
      fontSize: calculateFontSize(25),
      fontWeight: 'bold',
      color:"black"
    },
    searchResultItem: {
      padding: height *0.01,
      marginBottom:height*0.008,
      marginRight:width*0.02,
      backgroundColor: "#C3E5FF",
      borderRadius: 10,
      width: width * 0.43,  
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    removeButton: {
      width:width*0.055,
      height:height*0.026,
      backgroundColor: '#fff', 
      borderRadius: 30, 
      justifyContent: 'center',
      alignItems: 'center',
    },
    removeButtonText: {
      color: '#000',
      fontWeight:"500",
      fontSize:calculateFontSize(10)
    },
    btncon:{
  
      paddingHorizontal:width*0.04
   }
  
  });
  
  export default Loctionsearching;