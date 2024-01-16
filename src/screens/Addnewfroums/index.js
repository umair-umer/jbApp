
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
import { CustomeButton } from '../../Components';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Loader from '../../Components/Loader';

const Addnewfroums = ({ navigation }) => {
  const { token } = useSelector((state) => state.auth); // Get the token from Redux store
  console.log(token, "reduxtokennewsforum");
  const [title, setTitle] = useState(''); // State for the title input
  const [description, setDescription] = useState('');
  const [isload, setload] = useState();
  const handleforum = async () => {
    console.log(description,"des");
    const data = {
      title: title,
      description: description,
    };
    try {
      const response = await axios({
        method: 'post',
        url: 'https://jobbookbackend.azurewebsites.net/api/v1/jobbook/talent/forum/create',
        data: data,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data, "forum data");
      setload(true)
      navigation.goBack(); // or any other success action
    } catch (error) {
      console.error(error);
      setload(false)

    } finally {
      setload(false);
    }
  }

  return (
    <>
    {isload ?<Loader/>: <SafeAreaView style={styles.container}>
      <View style={styles.hedr}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo name="cross" color="#fff" size={30} />
        </TouchableOpacity>
        <Text style={styles.headname}>Create Post</Text>
        <TouchableOpacity
          // style={styles.profileconainter}
          onPress={() => navigation.openDrawer()}>
          {/* <Image resizeMode='contain' style={{ width: "100%", height: "100%" }} source={Images.BookmarkSimple} /> */}
        </TouchableOpacity>
      </View>
      <View style={styles.margininbetween}>
        <TextInput
          style={styles.input}
          placeholder={'Add a title...'}
          placeholderTextColor={'#fff'}
          value={title} // Bind value to state
          onChangeText={(text) => setTitle(text)} 
        />
      </View>
      <View style={styles.margininbetween}>
        <TextInput
          style={styles.inputdes}
          placeholder={'Add a Description...'}
          placeholderTextColor={'#fff'}
          value={description} // Bind value to state
          onChangeText={(text) => setDescription(text)}
          multiline={true}
          numberOfLines={8}
          textAlignVertical="top"
        />
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <CustomeButton nonbg={true} title={"Post"} onPress={
          handleforum}
        // ()=>navigation.navigate("newsfeed")}
        />
      </View>

    </SafeAreaView>}
    </>
   
  );
};

export default Addnewfroums;
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
  },
  inputdes: {
    backgroundColor: '#1B5953',
    borderRadius: 10,

    paddingHorizontal: width * 0.05,
  },
  margininbetween: {
    marginVertical: height * 0.02,
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
  },
  bottomconta: {
    // marginVertical:height*0.04,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
