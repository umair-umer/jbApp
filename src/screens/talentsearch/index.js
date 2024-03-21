import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, ImageBackground, SafeAreaView, StyleSheet, Image, Dimensions, TouchableOpacity, FlatList, TextInput } from 'react-native';
import Images from '../../config/im';
import { calculateFontSize } from '../../config/font';
import { CustomeHeader } from '../../Components';
const { width, height } = Dimensions.get('window');
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Bg from '../../assets/shape.png';
import IMG from '../../assets/dp.png'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { calculateDaysAgo } from '../../config/utilities/hours';
import { base, baseprofileurl } from '../../config/utilities';
import Loader from '../../Components/Loader';
baseprofileurl
const PendingapplicantsData = [
    {
      id: 1,
      name: 'Alex Hudson',
      jobTitle: 'Senior Full Stack Developer',
      salary: '$2,500/m',
      image: Images.Secondprofile,
      progress: 80,
      location: 'Remote - Florida',
      skills: ['Graph Ql', 'PHP', 'B2b',"+2"],
    },
    {
      id: 2,
      name: 'Noah Taylor',
      jobTitle: 'Senior Full Stack Developer',
      salary: '$2,500/m',
      image: Images.PendingImage,
      progress: 95,
      location: 'Remote - Florida',
      skills: ['Graph Ql', 'PHP', 'B2b',"+2"],
    },
    {
      id: 3,
      name: 'Noah Taylor',
      jobTitle: 'Senior Full Stack Developer',
      salary: '$2,500/m',
      image: Images.Profile,
      progress: 90,
      location: 'Remote - Florida',
      skills: ['Graph Ql', 'PHP', 'B2b',"+2"],
    },
    {
        id: 3,
        name: 'Noah Taylor',
        jobTitle: 'Senior Full Stack Developer',
        salary: '$2,500/m',
        image: Images.Profile,
        progress: 90,
        location: 'Remote - Florida',
        skills: ['Graph Ql', 'PHP', 'B2b'],
      },
    // Add more data as needed
  ];
export const TalentSearch = ({navigation}) => {
    const [data, setData] = useState([]);
  const { token, type } = useSelector((state) => state.auth);

    useEffect(() => {
      const fetchData = async () => {
          const config = {
              method: 'get',
              url: `${base}/company/home/talents`,
              headers: { 
                  'Authorization': `Bearer ${token}`
              }
          };

          try {
              const response = await axios(config);
              console.log(response.data.data,"uyuf")// Adjust according to the shape of your response
              setData(response.data.data); 
          } catch (error) {
              console.error('Failed to fetch data:', error);
              // Handle error appropriately in your UI
          }
      };

      fetchData();
  }, []); // Empty dependency array means this effect runs once on mount
    const renderApplicantItem = ({item}) => {
      const titles = item.experience.map(exp => exp.title).join(',');
        return (
        
            <View style={styles.pendingApliictaionview}>
              <View style={styles.pendview}>
                <View style={styles.imgeTextdiv}>
                  <View style={styles.imsmalpendin}>
                    <Image
                      resizeMode="cover"
                      style={{width: '100%', height: '100%'}}
                      source={{uri:`${baseprofileurl}${item.picture}`}}
                    />
                  </View>
                  <View style={{paddingHorizontal: width * 0.02}}>
                    <Text style={styles.aplicantname}>{item.name}</Text>
                    <Text
                      style={
                        styles.aplicantjobtitle
                      }>
                        {titles}
                        </Text>
                  </View>
                </View>
    
             
              </View>
              <View style={styles.rsView}>
                <TouchableOpacity>
                  <Text style={styles.shortlist}>{item.skills}</Text>
                </TouchableOpacity>
    
               
                
    
              </View>
            </View>
        
        );
      };
  
   
  return (
    <>

    
    <ImageBackground style={styles.backgroundImage} source={Images.jsbg} resizeMode='cover'>
      <View style={styles.line}></View>
      <SafeAreaView style={styles.container}>
        <CustomeHeader iconsource3={Images.setting} iconsource2={Images.fil} iconsource1={Images.searchicon}/>

        <View style={{ flexDirection: "row", justifyContent:"space-evenly", marginVertical: height * 0.03, }}>
          <TouchableOpacity style={styles.screnbutt}>
            <Text style={styles.screbutton}>Discover</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.screnbuttactive} onPress={() => navigation.navigate('jobview')}>
            <Text style={styles.screbuttonactive}>Posted Jobs</Text>
          </TouchableOpacity>
         
        </View>
       
    

    
     <View style={{paddingBottom:height*0.30}}>
     <FlatList
        data={data}
        keyExtractor={(item) => String(item.id || item._id)}
        renderItem={renderApplicantItem}
        showsVerticalScrollIndicator={false}
      />
       
     </View>


 

      </SafeAreaView>
      
    </ImageBackground>

  </>

  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    backgroundImage: {
      width: '100%',
      height: '100%',
      justifyContent: 'space-between', // To create space between top and bottom items
      flex:1,

    },
    bgImage: {
      width: width * 0.90,
      height: height * 0.257,
      // overflow:"hidden",
      alignSelf: "center",
      top: 20,
      borderRadius: 20,
      // backgroundColor:"red"
    },
    screnbutt: {
      borderWidth: 1,
      width: width * 0.17,
      paddingVertical: height * 0.01,
      alignItems: "center",
      borderColor: "#2BADA1",
      borderRadius: 20,
      backgroundColor: "#1B5953"
    },
    screbutton: {
      fontSize: calculateFontSize(11),
      color: '#fff',
      fontWeight: 'bold',
      fontFamily: 'Poppins',
      textTransform: 'capitalize',
    },
    screnbuttactive: {
      borderWidth: 1,
      width: width * 0.18,
      paddingVertical: height * 0.01,
      alignItems: "center",
      borderColor: "#fff",
      backgroundColor: "#fff",
      borderRadius: 20
    },
    screbuttonactive: {
      fontSize: calculateFontSize(11),
      color: '#8B8B8B',
      fontWeight: 'bold',
      fontFamily: 'Poppins',
      textTransform: 'capitalize',
    },
    line: {
      width: width,
      height: height * 0.001,
      backgroundColor: "#0BECD8",
      position: "absolute",
      top: height * 0.123,
    },
    jobsrch: {
      fontSize: calculateFontSize(29),
      color: '#ffff',
      fontWeight: 'bold',
      fontFamily: 'Poppins'
    },
    inpmain: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    inpbox: {
  
      width: width * 0.8,
      height: height * 0.055,
      backgroundColor: "#1B5953",
      opacity: 0.9,
      paddingHorizontal: width * 0.03,
      borderRadius: 20,
  
    },
    fltrbtn: {
  
      width: width * 0.13,
      height: height * 0.06,
      backgroundColor: "#2BADA1",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 50
    },
    shap: {
  
      alignItems: "center",
      // backgroundColor: "red",
      // marginVertical: height * 0.01
      // padding:10,
    },
    iconimage: {
      width: width * 0.13,
      height: height * 0.06,
      backgroundColor: "#fff",
      borderRadius: 10,
      overflow: "hidden"
    },
    designation: {
      fontSize: calculateFontSize(15),
      color: '#ffff',
      fontWeight: 'bold',
    },
    companyname: {
      fontSize: calculateFontSize(10),
      color: '#ffff',
      fontWeight: 'bold',
    },
    vietex: {
      fontSize: calculateFontSize(15),
      color: '#ffff',
      fontWeight: 'bold',
      bottom: height * 0.01,
  
    },
    descri: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      width: width * 0.20,
      borderWidth: 1,
      borderColor: "#fff", alignItems: "center",
      borderRadius: 100,
      padding: 2,
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginHorizontal: width * 0.01,
  
    },
    tstyle: {
      fontSize: calculateFontSize(10),
      color: '#ffff',
      fontWeight: 'bold'
    },
    description: {
      fontSize: calculateFontSize(10),
      color: '#fff',
    },
    postduration: {
      fontSize: calculateFontSize(15),
      color: '#000',
      marginHorizontal: width * 0.01,
    },
    postsalary: {
      fontSize: calculateFontSize(15),
      color: '#000',
    },
    mainCon: {
        flex: 1,
        // padding: 20,
        padding: 10,
        backgroundColor: 'rgba(0, 154, 140,0.9)',
      },
      pendview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderBottomWidth:2,
        // paddingBottom:height*0.02,
        // borderStyle: 'dotted'
      },
      imgeTextdiv: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      imsmalpendin: {
        width: width * 0.13,
        height: height * 0.06,
        borderRadius: 15,
        overflow: 'hidden',
      },
      aplicantname: {
        color: '#fff',
        fontfamily: 'poppins',
        fontWeight: '500',
        fontSize: calculateFontSize(19),
        textTransform: 'capitalize',
      },
      aplicantjobtitle: {
        color: '#fff',
        fontfamily: 'poppins',
        fontSize: calculateFontSize(11),
        textTransform: 'capitalize',
        fontWeight: '600',
      },
      durationtime: {
        color: '#fff',
        fontfamily: 'poppins',
        fontSize: calculateFontSize(14),
        textTransform: 'capitalize',
        backgroundColor: 'rgba(43, 173, 161, 1)',
        borderRadius: 5,
        padding: 4,
        fontWeight: '600',
      },
      rej: {
        color: '#fff',
        fontfamily: 'poppins',
        fontSize: calculateFontSize(15),
        textTransform: 'capitalize',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height * 0.01,
        fontWeight: '600',
      },
      shortlist: {
        color: '#fff',
        fontfamily: 'poppins',
        fontSize: calculateFontSize(15),
        textTransform: 'capitalize',
        borderWidth: 1,
        paddingHorizontal: width * 0.07,
        paddingVertical: height * 0.009,
        borderRadius: 10,
        borderColor: '#fff',
        backgroundColor: 'rgba(7, 81, 74, 0.4)',
        fontWeight: '600',
      },
      rsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        paddingTop: height * 0.03,
      },
      pendingApliictaionview: {
        marginTop: height * 0.02,
        backgroundColor: 'rgba(43, 173, 161, 1)',
        paddingVertical: height * 0.03,
        paddingHorizontal: width * 0.03,
       
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    
        elevation: 4,
      },
      loadIcon: {
        width: width * 0.04,
        height: height * 0.05,
      },
      deleteButton: {
        backgroundColor: 'rgba(0, 154, 140,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.2,
        height: '100%',
      },
      deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
      },
      imgICon:{
    
           width:width*0.1,
           height:height * 0.07
      },
      sendICon:{
        width:width*0.09,
        height:height * 0.08,
        marginRight:10
         
      },
      sendButton: {
        backgroundColor: 'rgba(0, 154, 140,0.4)',
        justifyContent:"center",
        alignItems: 'flex-end',
        // width: width * 0.3,
        height: '100%',
        paddingHorizontal:10,
      },
      sendButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:calculateFontSize(12),
        marginLeft:60
      },
  
  
  
  
  
  })