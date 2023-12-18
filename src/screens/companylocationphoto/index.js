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
import { CustomeforgetHeader ,CustomeButton} from '../../Components';

import Images from '../../config/im';
function CompanyLocationPhoto({navigation}) {
  const [selectedImage, setSelectedImage] = useState('');

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

  return (
    <SafeAreaView style={styles.mainCon}>
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
        onPress={() => navigation.navigate('preview')}
      />
    </SafeAreaView>
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
