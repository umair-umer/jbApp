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
import {useSelector} from 'react-redux';
import {calculateDaysAgo} from '../../config/utilities/hours';
import {baseprofileurl} from '../../config/utilities';
import Loader from '../../Components/Loader';

const JobsearchScreen = ({navigation}) => {
  const {token, type} = useSelector(state => state.auth);
  const [jobsData, setJobsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
const[id,setId]=useState();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const baseURL = type === 'company'
        ? 'https://jobbookbackend.azurewebsites.net/api/v1/jobbook/company/home/jobs'
        : 'https://jobbookbackend.azurewebsites.net/api/v1/jobbook/talent/home/jobs';
      const config = {
        method: 'get',
        url: baseURL,
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      };

      try {
        const response = await axios(config);
        setJobsData(response.data.data); 
     setId(response.data.data[0]._id);
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [token]);


  return (
    <ImageBackground style={styles.backgroundImage} source={Images.jsbg} resizeMode='cover'>
      <View style={styles.line}></View>
      <SafeAreaView style={styles.container}>
        <CustomeHeader iconsource3={Images.setting} />

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: height * 0.03, }}>
          <TouchableOpacity style={styles.screnbutt}>
            <Text style={styles.screbutton}>Discover</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.screnbuttactive} onPress={() => navigation.navigate('pending')}>
            <Text style={styles.screbuttonactive}>Saved</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.screnbuttactive} onPress={() => navigation.navigate('appliedscreen')}>
            <Text style={styles.screbuttonactive}>Applied</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.screnbuttactive}>
            <Text style={styles.screbuttonactive}>INTERVIEWS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.screnbuttactive} onPress={() => navigation.navigate('closedscreen')}>
            <Text style={styles.screbuttonactive}>Closed</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingRight: width * 0.25, marginVertical: height * 0.02, }}>
          <Text style={styles.jobsrch}>
            Now it’s easy to find your next job 💼
          </Text>
        </View>
        <View style={styles.inpmain}>
          <View style={styles.inpbox}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather name="search" color={"#fff"} size={15} />
              <TextInput
                placeholder='Search jobs, Company'
                placeholderTextColor={"#fff"}
                style={{ color: "#fff" }}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.fltrbtn} onPress={() => navigation.navigate('specialscreen')}>
            <Feather name="sliders" color={"#fff"} size={25} />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {jobsData && jobsData.length > 0 ? (
            jobsData.map((job, index) => (
              <View key={index} style={styles.shap}>
                <ImageBackground
                  style={{
                    width: width * 0.94,
                    height: height * 0.3,
                    paddingTop: height * 0.024,
                    paddingHorizontal: width * 0.03,
                  }}
                  resizeMode="contain"
                  source={Bg}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View style={styles.iconimage}>
                        {/* Replace Images.dp with job.picture */}
                        <Image
                          style={{
                            width: '60%',
                            height: '100%',
                            alignSelf: 'center',
                          }}
                          resizeMode="center"
                          source={{uri: `${baseprofileurl}${job.user.picture}`}}
                        />
                      </View>
                      <View style={{marginHorizontal: width * 0.03}}>
                        {/* Replace 'SumatoSoft' with job.title */}
                        <Text style={styles.designation}>{job.title}</Text>
                        <Text style={styles.companyname}>{job.user.name}</Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('jobdeatilview', {jobId: job._id})
                        
                      }
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: height * 0.03,
                        marginRight: width * 0.01,
                      }}>
                      <Text style={styles.vietex}>View</Text>
                      <Feather name="arrow-up-right" size={20} />
                    </TouchableOpacity>
                  </View>

        <View style={{ flexDirection: "row", marginVertical: height * 0.01, }}>
          {/* Replace 'New York' with job.location */}
          <View style={styles.descri}>
            <Feather name='map-pin' />
            <Text style={styles.tstyle}>{job.location}</Text>
          </View>
          <View style={styles.descri}>
            <Entypo name='graduation-cap' />
            {/* Replace '3 years exp.' with job.experience */}
            <Text style={styles.tstyle}>exp:{job.experience} </Text>
          </View>
          <View style={styles.descri}>
            <Ionicons name="time-outline" />
            {/* Replace 'Fulltime' with job.type */}
            <Text style={styles.tstyle}>{job.type}</Text>
          </View>
        </View>

        <View style={{marginVertical:height*0.013,}}>
          {/* Replace this static description with job.description */}
          <Text style={styles.description}>{job.description}</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: height * 0.05, paddingHorizontal: width * 0.02, }}>
          <View style={{ flexDirection: "row" }}>
            <Entypo name='back-in-time' size={20} color={"#000"} />
            {/* Calculate and replace 'Posted 5 days ago' with actual post duration based on job.createdAt */}
            <Text style={styles.postduration}>Posted {calculateDaysAgo(job.createdAt)} days ago</Text>
          </View>
          <View>
            {/* Uncomment and use job.salary if available */}
            <Text style={styles.postsalary}>{job.travel}km/m</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  ))
) : (
  <Text>No jobs available</Text>
)}

        {/* {jobsData && jobsData.length > 0 ? ( jobsData.map((job, index) => {
           <View key={index}  style={styles.shap}>
           <ImageBackground style={{
             width: width * 0.94,
             height: height * 0.3,
             paddingTop: height * 0.039,
             paddingHorizontal: width * 0.03,
           }} resizeMode='contain' source={Bg}>

             <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
               <View style={{ flexDirection: "row", alignItems: "center" }}>
                 <View style={styles.iconimage} >
                   <Image style={{ width: "100%", height: "100%" }} resizeMode='center' source={Images.dp} />
                 </View>
                 <View style={{ marginHorizontal: width * 0.03, }}>
                   <Text style={styles.designation}>{job.title}</Text>
                   <Text style={styles.companyname}>{job.name}</Text>
                 </View>
               </View>
               <TouchableOpacity onPress={() => navigation.navigate("jobdeatilview")}
                 style={{ flexDirection: "row", alignItems: "center", marginBottom: height * 0.035, marginRight: width * 0.01, }}>
                 <Text style={styles.vietex}>View</Text>
                 <Feather name='arrow-up-right' size={20} />
               </TouchableOpacity>
             </View>
             <View style={{ flexDirection: "row", marginVertical: height * 0.01, }}>
               <View style={styles.descri}>
                 <Feather name='map-pin' />
                 <Text style={styles.tstyle}>New York</Text>

               </View>
               <View style={styles.descri}>
                 <Entypo name='graduation-cap' /><Text style={styles.tstyle}>3 years exp.</Text>
               </View>
               <View style={styles.descri}>
                 <Ionicons name="time-outline" /><Text style={styles.tstyle}>Fulltime</Text>
               </View>
             </View>

             <View >
               <Text style={styles.description}>SumatoSoft is an award-winning mobile and web app development company with its headquarters in Karachi. We are currently on the lookout for highly motivated Software Engineers.</Text>
             </View>

             <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: height * 0.05, paddingHorizontal: width * 0.02, }}>
               <View style={{
                 flexDirection
                   : "row"
               }}>
                 <Entypo name='back-in-time' size={20} color={"#000"} /><Text style={styles.postduration}>Posted 5 days ago</Text>
               </View>
               <View>
                 {/* <Text style={styles.postsalary}>$25K/mo</Text> */}
               {/* </View>
             </View>
           </ImageBackground>
         </View>
      
          })):( <Text>No jobs available</Text>)} */}
          


        </ScrollView>





      </SafeAreaView>
    </ImageBackground>
  )
}

export default JobsearchScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between', // To create space between top and bottom items
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
    width: width * 0.17,
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
    overflow:"hidden"
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
  }





})