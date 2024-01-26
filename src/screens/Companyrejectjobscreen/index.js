import React, {useEffect, useState} from 'react';
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
} from 'react-native'
import Images from '../../config/im';
import {calculateFontSize} from '../../config/font';
import {CustomeforgetHeader} from '../../Components';
import { useSelector } from 'react-redux';
import axios from 'axios';
const {width, height} = Dimensions.get('window');
const shortlistedApplicantsData = [
  {
    id: 1,
    name: 'Alex Hudson',
    jobTitle: 'Senior Full Stack Developer',
    salary: '$2,500/m',
    image: Images.Secondprofile,
    progress: 80,
    location: 'Remote - Florida',
    skills: ['Graph Ql', 'PHP', 'B2b'],
  },
  {
    id: 2,
    name: 'Noah Taylor',
    jobTitle: 'Senior Full Stack Developer',
    salary: '$2,500/m',
    image: Images.PendingImage,
    progress: 95,
    location: 'Remote - Florida',
    skills: ['Graph Ql', 'PHP', 'B2b'],
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
function Companyrejectedjob({navigation,route}) {
  const { id } = route.params;
  console.log(id, "panding application screen");

  const [data, setData] = useState(shortlistedApplicantsData);
  const { token } = useSelector((state) => state.auth); // If you are using Redux to store your token
  const [applications, setApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [applicationId, setapplicationId] = useState()
  useEffect(() => {
    const fetchApplications = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://jobbookbackend.azurewebsites.net/api/v1/jobbook/company/home/applications/${id}?status=rejected`, {
          headers: {
            'Authorization': `Bearer ${token}`, 
          },
        });
        setApplications(response.data.data); 
        console.log(applications, "====>shortlistapp");
 

      } catch (error) {
        console.error('Error fetching applications:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApplications();
  }, [ token]);


  const renderApplicantItem = ({ item }) => {
    

    return (
     
        <View style={styles.pendingApliictaionview}>
          <View style={styles.pendview}>
            <View style={styles.imgeTextdiv}>
              <View style={styles.imsmalpendin}>
                <Image
                  resizeMode="cover"
                  style={{ width: '100%', height: '100%' }}
                  source={item.image}
                />
              </View>
              <View style={{ paddingHorizontal: width * 0.02 }}>
                <Text style={styles.aplicantname}>{item.name}</Text>
                <Text
                  style={
                    styles.aplicantjobtitle
                  }>{`${item.jobTitle} . ${item.salary}`}</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.loadIcon}>
                <Image
                  source={Images.Loadingimage}
                  style={{ width: '100%', height: '100%' }}
                  resizeMode="center"
                />
              </View>
              <Text style={styles.durationtime}>{`${item.progress}%`}</Text>
            </View>
          </View>
          <View style={styles.rsView}>
            <TouchableOpacity>
              <Text style={styles.shortlist}>{item.location}</Text>
            </TouchableOpacity>

            {/* {item.skills.map((skill, index) => (
              <Text style={styles.rej} key={index}>
                {skill}
              </Text>
            ))} */}
          </View>
        </View>
   
    );
  };
  return (
    <SafeAreaView style={styles.mainCon}>
      <CustomeforgetHeader
        onPress={() => navigation.goBack()}
        company={true}
        source={Images.arrow}
        heading={'Shortlist applicants '}
      />

      <FlatList
        data={applications}
        keyExtractor={(item) => item?.id?.toString() || 'default-value'} // Use optional chaining and provide a default value
        renderItem={renderApplicantItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    // padding: 20,
    paddingHorizontal: width * 0.017,
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
    fontSize: calculateFontSize(16),
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
    marginTop: height * 0.04,
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
  }
});

export default Companyrejectedjob
