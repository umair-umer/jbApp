import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  Button,
} from 'react-native';
import Images from '../../config/im';
import {calculateFontSize} from '../../config/font';
import {CustomeforgetHeader} from '../../Components';
const {width, height} = Dimensions.get('window');
import axios from 'axios';
import { useSelector } from 'react-redux'
function Companyapplicationstatus({navigation,route}) {
  const  {id} =route.params;
  console.log(id,"status");

  const [stats, setStats] = useState("");
  
// console.log(stats.data,"))");
  const { token } = useSelector(state => state.auth);

  useEffect(() => {
    const fetchStats = async () => {
      console.log(id,"=====beforeresponce");
      try {
        const response = await axios.get(`https://jobbookbackend.azurewebsites.net/api/v1/jobbook/company/home/stats/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setStats(response.data);
        console.log(response.data,"=====hola");
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, [id, token]); // This effect depends on `id` and `token` and will rerun if they change


  const goToNextScreen = () => {
    navigation.navigate('pendingview',{id});
  };
  return (
    <SafeAreaView style={styles.mainCon}>
      <CustomeforgetHeader
        company={true}
        source={Images.arrow}
        heading={`${stats?.data?.totalCount || 0} Applicants`}
      />

      <View style={styles.contents}>
        <TouchableOpacity
          onPress={goToNextScreen}
          style={styles.blucontent}>
          <Text style={styles.txt}>{stats?.data?.totalCount || 0}</Text>
          <Text style={styles.txt1}>pending</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.blucontent}
          onPress={() => {
            navigation.navigate('shortview');
          }}>
          <Text style={styles.txt}>{stats?.data?.shortlistCount || 0}</Text>
          <Text style={styles.txt1}>shortlisted</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.blucontent}
          onPress={() => {
            navigation.navigate('rejectedview');
          }}>
          <Text style={styles.txt}>{stats?.data?.rejectedCount || 0}</Text>
          <Text style={styles.txt1}>rejected</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.blucontent1}>
          <Text style={styles.txt}>08</Text>
          <Text style={styles.txt1}>expired</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    paddingHorizontal:width*0.04,
    backgroundColor: 'rgba(0, 154, 140,0.9)',
  },
  contents:{
      
    // backgroundColor: 'rgba(0, 154, 140,0.9)',
    alignItems:"center",
    justifyContent:"center",
},
blucontent:{

     width:width*0.9,
     height:height*0.07,
     backgroundColor:"rgba(0, 92, 84, 1)",
     flexDirection:"row",
     justifyContent:"space-between",
     alignItems:"center",
     paddingHorizontal:width*0.05,
     borderRadius:10,
     marginVertical:height*0.01
},
blucontent1:{

  width:width*0.9,
  height:height*0.07,
  backgroundColor:"rgba(0, 92, 84, 1)",
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center",
  paddingHorizontal:width*0.05,
  borderRadius:10,
  marginVertical:height*0.01,
  opacity:0.4
},

txt:{

    color:"#fff",
    fontSize:34,
    fontWeight:"800"
},
txt1:{

  color:"#fff",
  fontSize:14,
  fontWeight:"700"
}



});

export default Companyapplicationstatus;
