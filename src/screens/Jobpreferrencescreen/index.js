import React, { useEffect, useState } from 'react';
import { Dimensions, 
        Text, 
        View,
        StyleSheet,
        TextInput,TouchableOpacity, ScrollView,SafeAreaView } from 'react-native'
import { CustomeButton } from '../../Components';
import { calculateFontSize } from '../../config/font';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import axios from 'axios';
import { useSelector } from 'react-redux';
const{width,height}=Dimensions.get("window")


const allCategories = [
    'Armed Security Guard',
    'Unarmed Security Guard',
    'Corporate Security Guard',
    'Customer Service',
    'Event Security Guard',
    'Office Administration',
    'Armed Security Guard',
  ]
function Prefrencescreen({navigation,route}) {
  const {selectedJob,selectedLocation,}=route.params;
  console.log(route.params,"prefecnce");
  const { token, type } = useSelector((state) => state.auth);

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showAllCategories, setShowAllCategories] = useState(false);
    const [selectedJobType, setSelectedJobType] = useState(null);
    const [salaryRange, setSalaryRange] = useState([0, 0]);
    const [jobData, setJobData] = useState([]); // State to store job data


    
    // Initial salary range
    const toggleCategories = () => {
      setShowAllCategories(!showAllCategories);
    };
  
    const categoriesToShow = showAllCategories ? allCategories : allCategories.slice(0, 5);
  
    const handleCategorySelect = (category) => {
      setSelectedCategory(category);
    };
  
    const jobTypes = [
      'Full-time',
      'Part-time',
      'Freelance',
      
      'Contract'
    ];
  
    const handleJobTypeSelect = (jobType) => {
      setSelectedJobType(jobType);
      console.log(selectedJobType,"jobtype");
    };
  
    const handleSalaryChange = (values) => {
      // Assuming values are received as strings, convert them to numbers
      const minSalary = parseInt(values[0]);
      const maxSalary = parseInt(values[1]);
      setSalaryRange([minSalary, maxSalary]);
      console.log(salaryRange.minSalary,"salaryrange");
    };

    const applyFilter = () => {
      // Perform actions when Apply Filter button is clicked
      console.log('Selected Category:', selectedCategory);
      console.log('Selected Job Type:', selectedJobType);
      console.log('Salary Range:', salaryRange);
    navigation.navigate('Jobapplicants',{selectedJob:selectedJob,selectedLocation:selectedLocation,salaryRange,selectedJobType})

    };

    const clearValues = () => {
      setSelectedCategory(null);
      setSelectedJobType(null);
      setSalaryRange([50000, 100000]); // Reset the salary range to the initial state
    };
  
    return (
      <SafeAreaView style={styles.mainCon}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View style={styles.heading}>
              <Text style={styles.headingtxt}>Set Your Preferences</Text>
              <TouchableOpacity 
               style={styles.cenbtn}
               onPress={()=>navigation.navigate('newsfeed')}
              >
                    <Text
                    style={styles.btntxt}
                    >x</Text>
              </TouchableOpacity>
            </View>
  
            {/* <View style={styles.search}>
              <TextInput
                placeholder="Search location"
                placeholderTextColor={"#000"}
                style={styles.inp}
              />
            </View> */}
  
            {/* <View style={styles.jobCategory}>
              <Text style={styles.txt}>Job Categories</Text>
              {categoriesToShow.map((category) => (
                <View style={styles.categoryItem} key={category}>
                  <RadioBtn selected={selectedCategory === category} onPress={() => handleCategorySelect(category)} />
                  <Text style={styles.txt1}>{category}</Text>
                </View>
              ))}
              {!showAllCategories && allCategories.length > 5 && (
                <TouchableOpacity onPress={toggleCategories}>
                  <Text style={styles.moreBtn}>+ More</Text>
                </TouchableOpacity>
              )}
            </View> */}
  
            <View style={styles.lineCon}>
              <View style={styles.lane}></View>
            </View>
  
            <View style={styles.jobType}>
              <Text style={styles.txt}>Job Type</Text>
              {jobTypes.map((jobType) => (
                <View style={styles.categoryItem} key={jobType}>
                  <RadioBtn
                    selected={selectedJobType === jobType}
                    onPress={() => handleJobTypeSelect(jobType)}
                  />
                  <Text style={styles.txt1}>{jobType}</Text>
                </View>
              ))}
            </View>
  
            <View style={styles.lineCon}>
              <View style={styles.lane}></View>
            </View>
            <View style={styles.salarycon}>
            <Text style={styles.txt}>Salary Range</Text>
            <View style={{flexDirection:"row"}}>
        <Text style={styles.btxt}>${salaryRange[0]}k - </Text>
        <Text style={styles.btxt}>${salaryRange[1]}k</Text>
        </View>
      </View>
            <View style={styles.salaryRange}>
      
            <MultiSlider
        values={salaryRange}
        min={0}
        max={200000}
        step={1000}
        sliderLength={width - (width*0.2)}
        onValuesChange={handleSalaryChange}
        selectedStyle={{ backgroundColor: '#1B5953' }}
        unselectedStyle={{ backgroundColor: '#31B5953' }}
        containerStyle={{ marginTop: height*0.01,alignItems:"center", }}
      />
   
    </View>
            
       <View style={styles.btncon}>
 
  
          <TouchableOpacity style={styles.clrbtn} onPress={clearValues}>
            <Text style={styles.btxt}>Clear</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.rstbtn} onPress={applyFilter}>
            <Text style={styles.restxt}>Apply Filter</Text>
          </TouchableOpacity>

       </View>

         </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const RadioBtn = ({ selected, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.radioBtn}>
      {selected ? <View style={styles.radioInner} /> : null}
    </TouchableOpacity>
  );

const styles = StyleSheet.create({

    mainCon:{

        width:"100%",
        height:"100%",        
        backgroundColor:"#009A8C"
    },
    content:{

          width:"100%",
          height:height*0.99,
          backgroundColor:"#fff",
          // marginTop:height*0.09,
          borderTopLeftRadius:30,
          borderTopRightRadius:30,
          position:"relative",
          top:height*0.25
    },
    cenbtn:{
        width:width*0.09,
        height:height*0.04,
        backgroundColor:"#1B5953",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30
    },
    btntxt:{
        color:"#fff",
        fontSize:calculateFontSize(20),
        fontWeight:"500",
        bottom:height*0.003
      

    },
    heading:{

          justifyContent:"space-between",
          alignItems:"center",
          marginVertical:height*0.03,
          paddingHorizontal:width*0.05,
          flexDirection:"row",
          alignItems:"center"
          
    },
    txt:{

        color:"#1B5953",
        fontSize:calculateFontSize(18),
        fontWeight:"600",
        
    },
    headingtxt:{

      color:"#1B5953",
      fontSize:calculateFontSize(18),
      fontWeight:"700",
      // marginHorizontal:width*0.21
  },
    search:{

          justifyContent:"center",
          paddingHorizontal:width*0.05
    },
    inp:{

        backgroundColor:"#F2F2F2",
        borderRadius:10,
        paddingHorizontal:width*0.05,
        color:"#1B5953"
    },
    jobCategory:{

        paddingHorizontal:width*0.06,
        paddingVertical:height*0.04
    },
    textcon:{
        paddingVertical:height*0.01,
        paddingHorizontal:width*0.01
    },
    categoryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical:height*0.01,
        
      },
      radioBtn: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#1B5953',
        alignItems: 'center',
        justifyContent: 'center',
      },
      radioInner: {
        width: 10,
        height: 10,
        borderRadius: 6,
        backgroundColor: '#1B5953',
      },
      txt1:{

          color:"#000",
          fontSize:calculateFontSize(15),
          fontWeight:"600",
          marginHorizontal:width*0.03
      },
      moreBtn: {
        color: '#1B5953',
        marginTop: height*0.03,
        textAlign:"center",
        fontWeight:"600",
        fontSize:17
      },

      lineCon:{

         paddingHorizontal:width*0.05
      },
      lane:{

           width:width*0.9,
           borderBottomWidth:0.9,
           color:"#1B5953",
           opacity:0.3
      },
      jobType:{

        paddingHorizontal:width*0.06,
        paddingVertical:height*0.04
    },
    salaryRange:{

        paddingHorizontal:width*0.06,
        paddingVertical:height*0.02,
    },
    btncon:{
      paddingHorizontal:width*0.08,
      paddingVertical:height*0.05,
      flexDirection:"row",
      justifyContent:"space-between",
  },
  clrbtn:{

     width:width*0.4,
     height:height*0.07,
     borderColor:"#1B5953",
     borderWidth:1,
     alignItems:"center",
     justifyContent:"center",
     borderRadius:10
  },
  btxt:{
      color:"#1B5953",
      fontSize:calculateFontSize(14),
      fontWeight:"500"
  },
  rstbtn:{

    width:width*0.4,
    height:height*0.07,
    backgroundColor:"#1B5953",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10
  },
  restxt:{

      color:"#fff",
      fontSize:calculateFontSize(14),
      fontWeight:"500"
  },
  salarycon:{
       flexDirection:"row",
       justifyContent:"space-between",
       paddingHorizontal:width*0.05,
       marginVertical:height*0.01
    }

    

 


    
})

export default Prefrencescreen