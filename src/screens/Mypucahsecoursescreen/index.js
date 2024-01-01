import React from 'react';
import {
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import Images from '../../config/im';
import {calculateFontSize} from '../../config/font';
import {CustomeforgetHeader} from '../../Components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

// Mock data
const courses = [
  { id: '1', name: 'UI/UX Designer', image: Images.play, rating: 'User interface design essentials', review: '20 Reviews' },
  { id: '2', name: 'UI/UX Designer', image: Images.play, rating: 'User interface design essentials', review: '20 Reviews' },
  { id: '3', name: 'UI/UX Designer', image: Images.play, rating: 'User interface design essentials', review: '20 Reviews' },
  { id: '4', name: 'UI/UX Designer', image: Images.play, rating: 'User interface design essentials', review: '20 Reviews' },
  { id: '5', name: 'UI/UX Designer', image: Images.play, rating: 'User interface design essentials', review: '20 Reviews' },
  { id: '6', name: 'UI/UX Designer', image: Images.play, rating: 'User interface design essentials', review: '20 Reviews' },

];

function CourseItem({ course }) {
  return (
    <View style={styles.video}>
      <Image
        source={course.image}
        style={styles.imag}
        resizeMode="cover"
      />
      <View style={styles.designation}>
        <Text style={styles.name}>{course.name}</Text>
      </View>
    <View>
      <Text style={styles.crsname}>{course.rating}</Text>
      <Text style={styles.crsname}>{course.review}</Text>
    </View>
    </View>
  );
}

function Purcahsecoursescreen() {
  return (
    <SafeAreaView style={styles.mainCon}>
      <CustomeforgetHeader
        onPress={() => navigation.goBack()}
        company={true}
        source={Images.arrow}
        heading={'Purchase Courses'}
      />
      <FlatList
        data={courses}
        renderItem={({ item }) => <CourseItem course={item} />}
        keyExtractor={item => item.id}
        numColumns={2} // Set two columns
        showsHorizontalScrollIndicator={false}
      />
      {/* ... other components */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    // padding: 20,
    paddingHorizontal: width * 0.035,
    backgroundColor: 'rgba(0, 154, 140,0.9)',
  },
  pendview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  video: {
      width: width * 0.45,
      height: height * 0.28,
      backgroundColor: '#2BADA1',
      borderRadius: 10,
      padding: 10,
      marginHorizontal: width * 0.01,
      marginVertical:height*0.001
    },
    imag: {
      width: width * 0.4,
      height: height * 0.12,
      // backgroundColor: 'red',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    designation: {
      width: width * 0.21,
      height: height * 0.04,
      backgroundColor: '#1B5953',
      marginVertical: height * 0.006,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    crsname: {
      color: '#fff',
      fontSize: calculateFontSize(12),
      fontFamily: 'Poppins',
      fontWeight: 'bold',
    },
    name:{

       fontSize:calculateFontSize(10),
       color:"#fff",
       fontWeight:"700",
       fontFamily: 'Poppins',
    }
})


export default Purcahsecoursescreen;
