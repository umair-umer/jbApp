import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
// import IMG from '../../Assests/upload.png'
const {width, height} = Dimensions.get('window');
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {calculateFontSize} from '../../config/font';
import { CustomeforgetHeader ,CustomeButton,CustomModal} from '../../Components';

import Images from '../../config/im';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Loader from '../../Components/Loader';

function CompanyLocationPhoto({navigation,route}) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isload,setload]=useState();
  const routeParams = {
    typeseclect: route.params.jobdesdata.datasenorityscreen.data3.data2.data.selectedType,
    mileRange: route.params.jobdesdata.datasenorityscreen.data3.data2.data.salaryRange,
    placelocation: route.params.jobdesdata.datasenorityscreen.data3.data2.selectedJob,
    inputValue: route.params.jobdesdata.datasenorityscreen.data3.inputValue,
    inputValueto: route.params.jobdesdata.datasenorityscreen.data3.inputValueto,
    selectedTyperoutien: route.params.jobdesdata.datasenorityscreen.data3.selectedType,
    selectedCategories: route.params.jobdesdata.datasenorityscreen.selectedCategories,
    statuss: route.params.jobdesdata.selectedCategories,
    titles: route.params.title,
    companyurl: route.params.companyUrl,
    des: route.params.description,
  
  };
  console.log(routeParams,"routeparams");
  
 
  const [selectedImage, setSelectedImage] = useState('');
  const { token, type } = useSelector((state) => state.auth);
  const imagepicker = () => {
    let option = {
      storageoption: {
        path: 'images',
      },
    };

    launchImageLibrary(option, async response => {
      if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        setSelectedImage(uri);

        dispatch(setProfileImage(uri)); // Dispatch an action to update the profileImage property
        setSelectedImage(uri);
      }
    });
  };

  const HandleNext = () => {
    setload(true)
    let data = new FormData();
  
    data.append('type', routeParams.typeseclect);
    data.append('travel', [routeParams.mileRange]);
    data.append('location', routeParams.placelocation);
    data.append('salMin', routeParams.inputValue);
    data.append('salMax', routeParams.inputValueto);
    data.append('salaryMode', routeParams.selectedTyperoutien);
    data.append('speciality', 'ergh4r5uy'); // Example, change as needed
    data.append('category', routeParams.selectedCategories);
    data.append('description', routeParams.des);
    data.append('experience', routeParams.statuss);
    data.append('title',routeParams.titles);
    
    // Handle image file
    if (selectedImage) {
      // Assuming selectedImage is the file URI
      const filename = selectedImage.split('/').pop();
      data.append('picture', {
        uri: selectedImage,
        type: 'image/jpeg', // Or the correct mime type of the image
        name: filename,
      });
    }
  
    let config = {
      method: 'post',
      url: 'https://jobbookbackend.azurewebsites.net/api/v1/jobbook/company/job/create',
      headers: { 
        'Authorization': `Bearer ${token}`,
        // Content-Type will be set automatically
      },
      data: data,
    };
  
    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setload(false)
        setModalVisible(true);

        // Handle success here
      })
      .catch((error) => {
        console.error(error);
        setload(false)
      });
  };


  return (
<>
{ isload ? <Loader/>:  <SafeAreaView style={styles.mainCon}>
      <CustomeforgetHeader
        company={true}
        source={Images.arrow}
        heading={'Job Category'}
        skip={"skip"}
      />
      <View style={styles.headCon}>
        <Text style={styles.heading}>Photo</Text>
      </View>

      <View style={{flex:1,}}>
      <View style={styles.photos}>
        <View style={styles.img}>
          <Image
            source={Images.photouplode}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        {selectedImage ? (
          <Image source={{uri: selectedImage}} style={styles.image} />
        ) : (
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={() => imagepicker()}>
            <Text style={styles.txt}>Upload Location Photo</Text>
          </TouchableOpacity>
        )}
      </View>
      </View>

      <CustomeButton
        nonbg={true}
        title={'Next'}
        onPress={HandleNext}
      />
        <CustomModal 
       status={'Job Posted successfully '}
       statusTwo={
         'Your Job has been Posted successfully'
       }
       jobposted={true}
       isModalVisible={isModalVisible}
      
      />
    </SafeAreaView>}


</>
  );
}

const styles = StyleSheet.create({
  mainCon: {
   padding:10,
    backgroundColor: 'rgba(15, 115, 105, 1)',
    flex: 1,
  },
  headCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.02,
  },
  heading: {
    color: '#fff',
    fontSize: calculateFontSize(28),
    fontWeight: '700',
    marginVertical: height * 0.02,
    textTransform: 'capitalize',
  },
  heading1: {
    color: '#1C75BC',
    fontSize: 16,
    fontWeight: '700',
    marginVertical: height * 0.09,
    textTransform: 'capitalize',
  },
  photos: {
    
    height: height * 0.3,
    // width: width * 0.9,
    borderColor: '#fff',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    bottom: height * 0.024,
    borderRadius: 10,
  },
  txt: {
    color: '#fff',
    fontSize: calculateFontSize(25),
    fontWeight: '600',
  },
  btncon: {
    height: height * 0.39,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  btn: {
    width: width * 0.9,
    height: height * 0.07,
    backgroundColor: '#1C75BC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    // marginVertical: height * 0.005,
  },
  btntx: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  img: {
    width: width * 0.11,
    height: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    top: height * 0.12,
  },
});

export default CompanyLocationPhoto;
