import React, { useState } from 'react';
import {
  TouchableOpacity,
  Modal,
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  ImageBackgroundBase,
  ScrollView,
  TextInput,
} from 'react-native';
import Images from '../../config/im';
import { calculateFontSize } from '../../config/font';
const { width, height } = Dimensions.get('window');
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import ImagePicker from 'react-native-image-crop-picker';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Loader from '../../Components/Loader';
import { base } from '../../config/utilities';

const AddNewFeeds = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [tags, setTags] = useState('');
  const [isload, setload] = useState();
  const [profileImage, setProfileImage] = useState();
  const { token } = useSelector((state) => state.auth); // Get the token from Redux store
  console.log(token, "reduxtokennewsfeed");
 
  const handleChoosePhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      // cropping: true, // Enable cropping
    })
      .then(image => {
        if (typeof image.path === 'string') {
          setProfileImage({ uri: image.path }); // Set the 'uri' correctly
        }
      })
      .catch(error => {
        console.log(error);
      });
  };



  const handlePost = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('location', location);
    formData.append('tags', tags);

    // Handle images
    if (profileImage) {
      formData.append('picture', {
        uri: profileImage.uri,
        name: 'profile.jpg',
        type: 'image/jpeg',
      });
    }

    try {
      setload(true)
      let response = await axios({
        method: 'post',
        url: `${base}/talent/news/create`,
        data: formData,
        headers: {
          'Authorization': `Bearer ${token}`, // Dynamic token from Redux store
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data, "===>postdata");
      setload(true)
      navigation.goBack()
    } catch (error) {
      console.error(error);
      
    }
  };

  return (
  <>
   {isload ?<Loader/>:<SafeAreaView style={styles.container}>
     
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.hedr}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo name="cross" color="#fff" size={30} />
        </TouchableOpacity>
        <Text style={styles.headname}>Create Post</Text>
        {/* <TouchableOpacity
          style={styles.profileconainter}
          onPress={() => navigation.openDrawer()}>
          <Image resizeMode='contain' style={{ width: "100%", height: "100%" }} source={Images.BookmarkSimple} />
        </TouchableOpacity> */}
      </View>
      <View style={styles.margininbetween}>
        <TextInput
          style={styles.input}
          placeholder={'Add a title...'}
          placeholderTextColor={'#fff'}
          value={title}
          onChangeText={text => setTitle(text)} // Update the title state when text changes
        />
      </View>
      <View style={styles.margininbetween}>
        <TextInput
          style={styles.input}
          placeholder={'Add a description...'}
          placeholderTextColor={'#fff'}
          value={description}
          onChangeText={text => setDescription(text)} // Update the description state when text changes
          multiline={true}
          numberOfLines={2}
          textAlignVertical="top"
        />
      </View>
      <View style={styles.margininbetween}>
        <Text style={styles.label}>Location</Text>
        <TextInput
          style={styles.input}
          placeholder={'Add a Location...'}
          placeholderTextColor={'#fff'}
          value={location}
          onChangeText={text => setLocation(text)} // Update the location state when text changes
        />
      </View>
      <View style={styles.margininbetween}>
        <Text style={styles.label}>Add photos</Text>

        {profileImage && ( // Check if an image is selected
          <View style={styles.uplodphotocontainer}>
            <Image
              resizeMode="cover"
              style={{ width: '100%', height: '100%' }}
              source={profileImage}
            />
          </View>
        )}
      </View>
      <View style={styles.margininbetween}>
        <Text style={styles.label}>Add tags</Text>
        <TextInput
          style={styles.input}
          placeholder={'add tags'}
          placeholderTextColor={'#fff'}
          value={tags}
          onChangeText={text => setTags(text)} // Update the tags state when text changes
        />
      </View>
      <View style={styles.bottomconta}>
        <View style={styles.iconcon}>
          <MaterialIcons
            onPress={handleChoosePhoto}
            name="add-photo-alternate"
            size={40}
            color={'#fff'}
          />
          {/* <Entypo name="attachment" color={'#fff'} size={30} /> */}
        </View>
        <TouchableOpacity style={styles.postbutton} onPress={handlePost}>
          <Text style={styles.posttext}>Post</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>}
  </>
  );
};

export default AddNewFeeds;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009A8C',
    padding: 10,
  },
  hedr: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  headname: {
    fontSize: calculateFontSize(15),
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'capitalize',
    marginHorizontal: width * 0.01,
    fontFamily: 'Poppins',
  },
  input: {
    backgroundColor: '#1B5953',
    borderRadius: 100,
    paddingHorizontal: width * 0.08,
    color: '#fff',
    // ...Platform.select({
    //   ios:{
    //     backgroundColor: '#1B5953',
    //     borderRadius: 100,
    //     paddingHorizontal: width * 0.06,
    //     padding:height* 0.02
    //   }
    // })
  },
  inputdes: {
    backgroundColor: '#1B5953',
    borderRadius: 10,
    color: '#fff',
    paddingHorizontal: width * 0.05,
  },
  margininbetween: {
    marginVertical: height * 0.02,
    ...Platform.select({
      ios:{
        marginVertical: height * 0.02,
        
      }
    })
    
  },
  label: {
    fontSize: calculateFontSize(15),
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
    marginBottom: height * 0.01,
    marginHorizontal: width * 0.02,
  },
  uplodphotocontainer: {
    width: width * 0.4,
    height: height * 0.19,
    backgroundColor: 'red',
    borderRadius: 15,
    marginHorizontal: width * 0.02,
    overflow: 'hidden',
  },
  iconcon: {
    flexDirection: 'row',
    alignItems: 'center',
    // width: width * 0.25,
    // justifyContent: 'space-around',
  },
  postbutton: {
    width: width * 0.4,
    height: height * 0.06,
    backgroundColor: '#fff',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  posttext: {
    fontSize: calculateFontSize(15),
    // fontWeight: 'bold',
    color: '#28918F',
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
    ...Platform.select({
      ios:{
        fontSize: calculateFontSize(15),
        // fontWeight: 'bold',
        color: '#28918F',
        textTransform: 'capitalize',
        fontFamily: 'Poppins',
        
      }
    })
  },
  bottomconta: {
    // marginVertical:height*0.04,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
