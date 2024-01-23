import React, { useState, useEffect } from 'react';

import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import Images from '../../config/im';
const {width, height} = Dimensions.get('window');
import {calculateFontSize} from '../../config/font';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Bg from '../../assets/shape.png';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { calculateDaysAgo } from '../../config/utilities/hours';
import { baseprofileurl } from '../../config/utilities';
import Loader from '../../Components/Loader';
function Pendingjobscreens({navigation}) {


  const { token } = useSelector((state) => state.auth);

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://jobbookbackend.azurewebsites.net/api/v1/jobbook/talent/home/jobs?filter=saved', {
          headers: {
            'Authorization': `Bearer ${token}`, // Replace with your token
          },
        });
        setAppliedJobs(response.data.data); // Assuming 'data.jobs' is the array of jobs
        console.log(appliedJobs,"=========")
    // Assuming 'data.jobs' is the array of jobs
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setError(error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  return (

      <>
      { loading ?<Loader/>:<SafeAreaView style={styles.container}>
          <View style={styles.hedr}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" color="#fff" size={30} />
            </TouchableOpacity>
            <Text style={styles.headname}>saved Jobs</Text>
            <TouchableOpacity
              // style={styles.profileconainter}
              onPress={() => navigation.openDrawer()}>
              {/* <Image resizeMode='contain' style={{ width: "100%", height: "100%" }} source={Images.BookmarkSimple} /> */}
            </TouchableOpacity>
          </View>
    
    
          <ScrollView showsVerticalScrollIndicator={false}>
          {appliedJobs?.map((job, index) => 
          
          (
          <View  key={index} style={styles.shap}>
        <ImageBackground style={{
          width: width * 0.91,
          height: height * 0.3,
          paddingTop: height * 0.039,
          paddingHorizontal: width * 0.03,
        }} resizeMode='contain' source={Bg}>
    
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.iconimage} >
                <Image style={{ width: "100%", height: "100%" }} resizeMode='center'  source={{ uri: `${baseprofileurl}${job.user.picture}` }}/>
              </View>
              <View style={{ marginHorizontal: width * 0.03, }}>
                <Text style={styles.designation}>{job.title}</Text>
                <Text style={styles.companyname}>{job.user.name}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("jobdeatilview")} style={{ flexDirection: "row", alignItems: "center", marginBottom: height * 0.035, marginRight: width * 0.01, }}>
              <Text style={styles.vietex}>View</Text>
              <Feather name='arrow-up-right' size={20} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", marginVertical: height * 0.01, }}>
            <View style={styles.descri}>
              <Feather name='map-pin' />
              <Text style={styles.tstyle}>{job.location}</Text>
    
            </View>
            <View style={styles.descri}>
              <Entypo name='graduation-cap' /><Text style={styles.tstyle}>{job.experience}years exp.</Text>
            </View>
            <View style={styles.descri}>
              <Ionicons name="time-outline" /><Text style={styles.tstyle}>Fulltime</Text>
            </View>
          </View>
    
          <View style={{marginVertical:height*0.019,}}>
            <Text style={styles.description}>{job.description}</Text>
          </View>
    
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: height * 0.04, paddingHorizontal: width * 0.02, }}>
            <View style={{
              flexDirection
                : "row"
            }}>
              <Entypo name='back-in-time' size={20} color={"#000"} /><Text style={styles.postduration}>Posted {calculateDaysAgo(job.createdAt)} days ago  </Text>
            </View>
            <View>
              <Text style={styles.postsalary}>{job.travel}km/m</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    
    ))}
          </ScrollView>
    
        </SafeAreaView>}
      </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009A8C',
    padding: 20,
  },
  hedr: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headname: {
    fontSize: calculateFontSize(15),
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'capitalize',
    // marginHorizontal: width * 0.01,
    fontFamily: 'Poppins',
  },
  shap: {
    alignItems: 'center',
    // backgroundColor: "red",
    marginVertical: height * 0.001,
    // padding:10,
  },
  iconimage: {
    width: width * 0.13,
    height: height * 0.06,
    backgroundColor: '#fff',
    borderRadius: 10,
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
  },
  descri: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: width * 0.2,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    borderRadius: 100,
    padding: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: width * 0.01,
  },
  tstyle: {
    fontSize: calculateFontSize(10),
    color: '#ffff',
    fontWeight: 'bold',
  },
  description: {
    fontSize: calculateFontSize(10),
    color: '#ffff',
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
});

export default Pendingjobscreens;
