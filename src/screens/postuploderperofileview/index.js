import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  TextInput,
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Images from '../../config/im';
import { calculateFontSize } from '../../config/font';
import { CustomeButton, CustomeforgetHeader } from '../../Components';
import Entypo from 'react-native-vector-icons/Entypo';
import { useSelector } from 'react-redux';
import axios from 'axios';
import qs from 'qs';
import { base, baseprofileurl } from '../../config/utilities';
import Loader from '../../Components/Loader';
const { width, height } = Dimensions.get('window');

export const POstUPloderprofile = ({ navigation, route }) => {
  const { id } = route.params;
  // console.log(id, 'postdata');
  const { token, type } = useSelector(state => state.auth);

  const [profileData, setProfileData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [Chatid,setChatid]=useState("")
  const[userId,setId]=useState("")
  useEffect(() => {
    const fetchData = async () => {
      const config = {
        method: 'get',
        url: `${base}/auth/user-profile?userId=${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await axios.request(config);
        // console.log(response.data.data[0], 'progileuser');
        setProfileData(response.data.data[0]);
        setId(response.data.data[0]._id);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  const formatDate = dateString => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };
  const handleClick = () => {
    const data = qs.stringify({
      'receiverId': userId
    });
    setIsLoading(true);

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${base}/chat/create`,
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded', 
        Authorization: `Bearer ${token}`,
      },
      data: data
    };

    axios.request(config)
    .then((response) => {
      setIsLoading(false);
   
      setChatid(response.data.chat._id)
    
  
    })
    .catch((error) => {
      console.log(error,"jhsjfdggdf");
    });
  };
  useEffect(() => {
    if (Chatid) {
      navigation.navigate("userchatroomscreen", { Chatid });
    }
  }, [Chatid]);
  return (
   <>
   {isLoading? <Loader/> :
     <SafeAreaView style={styles.conatiner}>
     <Image
       style={{
         width: '100%',
         bottom: 14,
         ...Platform.select({
           ios: {
             // padding:10,
             bottom: height * 0.03,
           },
         }),
       }}
       resizeMode="contain"
       source={Images.b}
     />
     <View style={styles.arrowbox}>
       <TouchableOpacity
         onPress={() => navigation.goBack()}
         style={styles.arrowimage}>
         <Image
           resizeMode="center"
           style={{ width: '100%', height: '100%' }}
           source={Images.arrow}
         />
       </TouchableOpacity>
     </View>

     <View style={styles.proimg}>
       {profileData.picture ? <Image
         source={{ uri:`${baseprofileurl}${profileData.picture}` }}
         style={{ width: '100%', height: '100%' }}
         resizeMode="cover"
       /> :

         <Image

           source={Images.avtr}

           style={{ width: '100%', height: '100%' }}
           resizeMode="cover"
         />
       }
     </View>
     {type == "company" && <TouchableOpacity onPress={handleClick} style={{ borderRadius: 5, backgroundColor: "#2CA599", marginHorizontal: width * 0.03, flexDirection: "column", width: width * 0.3, alignItems: "center", paddingVertical: height * 0.02, }} >
       <Text style={{ color: "white" }}>Meassage</Text>
     </TouchableOpacity>}
     <ScrollView style={styles.scrollcontain}>
       <View style={{ paddingVertical: height * 0.02 }}>
         <Text style={styles.prname}>{profileData.name}</Text>

         <Text style={styles.position}>Creative Director </Text>
         <Text style={styles.companyname}>The Company Media Office </Text>
         <Text style={styles.location}>
           New York City, United States of America{' '}
         </Text>
         {/* <View style={{flexDirection: 'row', marginVertical: height * 0.03}}>
           <TouchableOpacity style={styles.connectBtn}>
             <Text style={{color: '#fff',fontSize:calculateFontSize(11)}}>Connect</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.manageBtn}>
             <Text style={{color: '#fff',fontSize:calculateFontSize(11)}}>Message</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.moreBtn}>
             <Entypo name='dots-three-vertical' size={9} color={'#fff'}/>
           </TouchableOpacity>
         </View> */}
       </View>

       <View style={{ borderBottomWidth: 1, borderBottomColor: '#fff' }} />
       <View style={styles.procon}>
         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
           <Text
             style={{
               color: '#fff',
               fontSize: calculateFontSize(16),
               fontWeight: '700',
             }}>
             About
           </Text>
           {/* <TouchableOpacity style={styles.manageBtn}>
             <Text style={{color: '#fff',fontSize:calculateFontSize(12)}}>Follow</Text>
           </TouchableOpacity> */}
         </View>
         <View
           style={{
             flexDirection: 'row',
             justifyContent: 'space-between',
             alignItems: 'center',
           }}>
           <View style={styles.wrkexperience}>
             <View style={{ paddingHorizontal: width * 0.01 }}>
               {/* <Text style={{color: '#CCC4C4', fontWeight: '300'}}>
                 1,362 Followers
               </Text>
               <Text style={{color: '#CCC4C4', fontWeight: '300'}}>
                 Connected 3 year 1 month
               </Text> */}
               <Text style={{ color: '#fff' }}>{profileData.about}</Text>
             </View>
           </View>
         </View>
       </View>
       <View style={{ borderBottomWidth: 1, borderBottomColor: '#fff' }} />
       <View style={styles.procon}>
         <Text style={styles.heading}>Experience</Text>
         {profileData.experience && profileData.experience.length > 0 ? (
           profileData.experience.map((item, index) => (
             <View
               key={index}
               style={{
                 flexDirection: 'row',
                 justifyContent: 'space-between',
                 alignItems: 'center',
               }}
               onPress={() => navigation.navigate('educationscreen')}>
               <View style={styles.wrkexperience}>
                 <View style={styles.dpPic}>
                   <Image
                     resizeMode="center"
                     source={Images.user}
                     style={styles.img}
                   />
                 </View>
                 <View style={{ paddingHorizontal: width * 0.03 }}>
                   <Text
                     style={{
                       color: '#fff',
                       fontSize: calculateFontSize(16),
                       fontWeight: '700',
                     }}>
                     {item.title || 'N/A'}{' '}
                     {/* Use N/A if title is null or empty */}
                   </Text>
                   <Text style={{ color: '#fff' }}>
                     {item.company || 'N/A'}{' '}
                     {/* Use N/A if company is null or empty */}
                   </Text>
                   <Text style={{ color: '#fff' }}>
                     {item.from
                       ? new Date(item.from).toLocaleDateString()
                       : 'N/A'}{' '}
                     -
                     {item.to
                       ? new Date(item.to).toLocaleDateString()
                       : 'Present'}
                   </Text>
                 </View>
               </View>
             </View>
           ))
         ) : (
           <Text style={styles.noExperience}>No experience listed</Text>
         )}
       </View>
       <View style={{ borderBottomWidth: 1, borderBottomColor: '#fff' }} />

       <View style={styles.procon}>
         <Text
           style={{
             color: '#fff',
             fontSize: calculateFontSize(18),
             fontWeight: '700',
           }}>
           Education
         </Text>
         <View
           style={{
             flexDirection: 'row',
             justifyContent: 'space-between',
             alignItems: 'center',
           }}
           onPress={() => navigation.navigate('educationscreen')}>
           <View style={styles.wrkexperience}>
             <View style={styles.dpPic}>
               <Image
                 resizeMode="center"
                 source={Images.user}
                 style={styles.img}
               />
             </View>
             <View style={{ paddingHorizontal: width * 0.03 }}>
               <Text
                 style={{
                   color: '#fff',
                   fontSize: calculateFontSize(16),
                   fontWeight: '700',
                 }}>
                 Lorem University
               </Text>
               <Text style={{ color: '#CBC2C2' }}>PeopleReady Pass, TX</Text>
               <Text style={{ color: '#CBC2C2' }}>Dec 2022 - Present</Text>
             </View>
           </View>
         </View>
       </View>

       <View style={{ borderBottomWidth: 1, borderBottomColor: '#fff' }} />
       <View style={styles.procon}>
         <Text
           style={{
             color: '#fff',
             fontSize: calculateFontSize(18),
             fontWeight: '700',
           }}>
           Skills
         </Text>
         <View
           style={{
             flexDirection: 'row',
             justifyContent: 'space-between',
             alignItems: 'center',
           }}
           onPress={() => navigation.navigate('educationscreen')}>
           <View style={styles.wrkexperience}>
             <View style={{ paddingHorizontal: width * 0.03 }}>
               <Text
                 style={{
                   color: '#fff',
                   fontSize: calculateFontSize(16),
                   fontWeight: '700',
                 }}>
                 Creative Strategy
               </Text>
               <View
                 style={{
                   flexDirection: 'row',
                   justifyContent: 'center',
                   alignItems: 'center',
                 }}>
                 <View
                   style={{
                     width: width * 0.03,
                     height: height * 0.015,
                     backgroundColor: '#fff',
                     borderRadius: 100,
                     right: width * 0.01,
                   }}></View>
                 <Text style={{ color: '#CBC2C2' }}>{profileData.skills}</Text>
               </View>
             </View>
           </View>
         </View>
       </View>

       <View style={{ borderBottomWidth: 1, borderBottomColor: '#fff' }} />
       <View style={styles.procon}>
         <Text
           style={{
             color: '#fff',
             fontSize: calculateFontSize(18),
             fontWeight: '700',
           }}>
           Languages
         </Text>
         <View
           style={{
             flexDirection: 'row',
             justifyContent: 'space-between',
             alignItems: 'center',
           }}
           onPress={() => navigation.navigate('educationscreen')}>
           <View style={styles.wrkexperience}>
             <View style={{ paddingHorizontal: width * 0.01 }}>
               <Text
                 style={{
                   color: '#fff',
                   fontSize: calculateFontSize(16),
                   fontWeight: '700',
                 }}>
                 English
               </Text>
             </View>
           </View>
         </View>
       </View>
     </ScrollView>
   </SafeAreaView>
   }
   
   
   </>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#2BADA1',
    ...Platform.select({
      ios: {
        padding: 10,
      },
    }),
  },
  arrowimage: {
    width: width * 0.03,
    height: height * 0.03,
  },
  arrowbox: {
    position: 'absolute',
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.02,
    ...Platform.select({
      ios: {
        paddingHorizontal: width * 0.02,
        paddingVertical: height * 0.06,
      },
    }),
  },
  proimg: {
    width: width * 0.2,
    height: height * 0.1,
    // backgroundColor:"red",
    alignItems: 'center',
    position: 'absolute',
    top: height * 0.13,
    bottom: 0,
    borderRadius: 100,
    left: width * 0.06,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#fff',
  },
  scrollcontain: {
    flex: 1,
    paddingHorizontal: width * 0.04,
  },
  prname: {
    fontSize: calculateFontSize(22),
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    textTransform: 'capitalize',
  },
  position: {
    fontSize: calculateFontSize(14),
    color: '#fff',
    fontWeight: '700',
    fontFamily: 'Poppins',
    textTransform: 'capitalize',
  },
  companyname: {
    fontSize: calculateFontSize(10),
    color: '#fff',
    fontWeight: '500',
    fontFamily: 'Poppins',
    textTransform: 'capitalize',
  },
  location: {
    fontSize: calculateFontSize(10),
    color: '#fff',
    fontWeight: '500',
    fontFamily: 'Poppins',
    textTransform: 'capitalize',
  },
  addexpcon: {
    marginVertical: height * 0.01,
  },
  btn: {
    width: width * 0.94,
    height: height * 0.08,
    backgroundColor: '#C3E5FF',
    paddingHorizontal: width * 0.07,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btntxt: {
    color: '#000',
    fontSize: calculateFontSize(16),
    fontWeight: '600',
    marginHorizontal: width * 0.05,
  },
  addbtn: {
    width: width * 0.06,
    height: height * 0.028,
    backgroundColor: '#0E746B',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addtxt: {
    color: '#fff',
    fontSize: calculateFontSize(16),
    fontWeight: '600',
  },
  text: {
    paddingVertical: height * 0.01,
  },
  wrkexperience: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: height * 0.02,
  },
  wrkexp: {
    color: '#fff',
    fontSize: calculateFontSize(13),
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
  },
  dpPic: {
    width: width * 0.15,
    height: height * 0.06,
    backgroundColor: '#ffff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: '100%',
    height: '100%',
  },
  procon: {
    // paddingHorizontal: width * 0.05,
    marginVertical: height * 0.03,
  },
  updatebtncon: {
    // paddingHorizontal: width * 0.05,
    marginVertical: height * 0.22,
  },
  connectBtn: {
    width: width * 0.2,
    height: height * 0.03,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#369F95',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  manageBtn: {
    width: width * 0.2,
    height: height * 0.03,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#369F95',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: width * 0.03,
  },
  moreBtn: {
    width: width * 0.06,
    height: height * 0.03,
    //  padding:10,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#369F95',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#fff',
    fontSize: calculateFontSize(18),
    fontWeight: '700',
  },
  experienceContainer: {
    backgroundColor: '#2BADA1', // Use a different color if you like
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
});
