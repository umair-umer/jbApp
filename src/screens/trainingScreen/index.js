import React, {useState} from 'react';
import {
  Dimensions,
  View,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import {calculateFontSize} from '../../config/font';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Images from '../../config/im';
import {CustomeHeader} from '../../Components';

const featuredCoursesData = [
  {
    id: '1',
    title: 'User Interface Design Essentials',
    name: 'UI/UX Designer',
    rating: '4.9',
    reviews: '80 Reviews',
  },
  {
    id: '2',
    title: 'User Interface Design Essentials',
    name: 'UI/UX Designer',
    rating: '4.9',
    reviews: '80 Reviews',
  },
  {
    id: '3',
    title: 'User Interface Design Essentials',
    name: 'UI/UX Designer',
    rating: '4.9',
    reviews: '80 Reviews',
  },
  {
    id: '4',
    title: 'User Interface Design Essentials',
    name: 'UI/UX Designer',
    rating: '4.9',
    reviews: '80 Reviews',
  },
  {
    id: '5',
    title: 'User Interface Design Essentials',
    name: 'UI/UX Designer',
    rating: '4.9',
    reviews: '80 Reviews',
  },

  // Add more featured courses as needed
];

const mentorData = [
  {
    id: '1',
    name: 'Steve M',
    designation: 'Full stack Developer',
    course: '22 Courses',
  },
  {
    id: '2',
    name: 'Har vey J',
    designation: 'UI/UX Designer',
    course: '18 Courses',
  },
  {
    id: '3',
    name: 'Asep Yanto',
    designation: 'Front End Developer',
    course: '24 Courses',
  },
  {
    id: '4',
    name: 'Steve M',
    designation: 'Full stack Developer',
    course: '22 Course',
  },
];
function TrainingScren({navigation}) {
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [showMoreFeaturedCourses, setShowMoreFeaturedCourses] = useState(false);
  const [showMoreMentors, setShowMoreMentors] = useState(false);

  const renderFeaturedCourseItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('traingcompanyprofilescreen');
      }}
      style={styles.video}>
      <View style={styles.imag}>
        <Image
          source={Images.play}
          style={{width: '100%', height: '100%', borderRadius: 10}}
          resizeMode="cover"
        />
      </View>
      <View style={styles.designation}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.tittle}>
        <Text style={styles.crsname}>{item.title}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <FontAwesome name="star" color={'#FFB800'} size={12} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: width * 0.01,
            marginVertical: height * 0.02,
          }}>
          <Text style={styles.rating}>{item.rating}</Text>
          <Text style={styles.review}>({item.reviews})</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderMentorItem = ({item}) => (
    <View style={styles.mentor}>
      <View style={styles.ment}>
        <Image
          source={Images.mentor}
          style={{width: '100%', height: '100%'}}
          resizeMode="center"
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{color: '#fff', fontWeight: '700'}}>{item.name}</Text>
        <Text
          style={{
            color: '#fff',
            fontSize: calculateFontSize(11),
            fontWeight: '600',
          }}>
          {item.designation}
        </Text>
        <Text
          style={{
            color: '#fff',
            fontSize: calculateFontSize(11),
            fontWeight: '600',
          }}>
          {item.course}
        </Text>
      </View>
      <TouchableOpacity style={styles.smlbtn}>
        <Text style={styles.avail}>See classes</Text>
      </TouchableOpacity>
    </View>
  );

  const renderAdditionalCategories = () => {
    return (
      <View style={styles.box}>
        <View style={styles.A}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.img}>
              <View style={styles.iconImg}>
                <Image
                  source={Images.PenIcon}
                  style={{width: '100%', height: '100%'}}
                  resizeMode="center"
                />
              </View>
            </View>
            <View style={{marginHorizontal: width * 0.03}}>
              <Text style={styles.crs}>Design</Text>
              <Text style={styles.avail}>16 Courses</Text>
            </View>
          </View>
        </View>

        <View style={styles.A}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.img}>
              <View style={styles.iconImg}>
                <Image
                  source={Images.CircleIcon}
                  style={{width: '100%', height: '100%'}}
                  resizeMode="center"
                />
              </View>
            </View>
            <View
              style={{marginHorizontal: width * 0.03, alignItems: 'center'}}>
              <Text style={styles.crs}>Business</Text>
              <Text style={styles.avail}>34 Courses</Text>
            </View>
          </View>
        </View>

        <View style={styles.A}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.img}>
              <View style={styles.iconImg}>
                <Image
                  source={Images.DevIcon}
                  style={{width: '100%', height: '100%'}}
                  resizeMode="center"
                />
              </View>
            </View>
            <View style={{marginHorizontal: width * 0.03}}>
              <Text style={styles.crs}>IT & Tech</Text>
              <Text style={styles.avail}>40 Courses</Text>
            </View>
          </View>
        </View>

        <View style={styles.A}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.img}>
              <View style={styles.iconImg}>
                <Image
                  source={Images.MaeketingIcon}
                  style={{width: '100%', height: '100%'}}
                  resizeMode="center"
                />
              </View>
            </View>
            <View style={{marginHorizontal: width * 0.03}}>
              <Text style={styles.crs}>Market</Text>
              <Text style={styles.avail}>36 Courses</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderAdditionalFeaturedCourses = () => {
    return (
      <View style={styles.flist}>
        <FlatList
          data={featuredCoursesData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={renderFeaturedCourseItem}
          contentContainerStyle={styles.horizontalFlatListContainer}
        />
      </View>
    );
  };

  const renderAdditionalMentors = () => {
    return (
      <FlatList
        data={mentorData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderMentorItem}
        contentContainerStyle={styles.horizontalFlatListContainer}
      />
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
      <View style={styles.container}>
        <CustomeHeader
          title={'jobbook'}
          iconsource3={Images.notificationicon}
          onPress={() => navigation.navigate('notifyscreen')}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: width * 0.06,
          bottom: height * 0.03,
        }}>
        <View style={styles.inpcon}>
          <Feather name="search" color={'#fff'} size={20} />
          <TextInput
            placeholder="Search job & Company"
            placeholderTextColor={'#fff'}
            style={{color: '#fff'}}
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('specialscreen')}>
          <Feather name="sliders" color={'#fff'} size={23} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => setShowMoreCategories(!showMoreCategories)}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: width * 0.05,
          marginVertical: height * 0.01,
        }}>
        <Text style={{fontWeight: '700', color: '#fff'}}>Explore Category</Text>
        <Text style={{fontWeight: '500', color: '#fff'}}>
          {showMoreCategories ? 'See less' : 'See all'}
        </Text>
      </TouchableOpacity>
      {showMoreCategories ? renderAdditionalCategories() : null}

      <View style={styles.box}>
        <View style={styles.A}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.img}>
              <View style={styles.iconImg}>
                <Image
                  source={Images.PenIcon}
                  style={{width: '100%', height: '100%'}}
                  resizeMode="center"
                />
              </View>
            </View>
            <View style={{marginHorizontal: width * 0.03}}>
              <Text style={styles.crs}>Design</Text>
              <Text style={styles.avail}>16 Courses</Text>
            </View>
          </View>
        </View>

        <View style={styles.A}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.img}>
              <View style={styles.iconImg}>
                <Image
                  source={Images.CircleIcon}
                  style={{width: '100%', height: '100%'}}
                  resizeMode="center"
                />
              </View>
            </View>
            <View
              style={{marginHorizontal: width * 0.03, alignItems: 'center'}}>
              <Text style={styles.crs}>Business</Text>
              <Text style={styles.avail}>34 Courses</Text>
            </View>
          </View>
        </View>

        <View style={styles.A}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.img}>
              <View style={styles.iconImg}>
                <Image
                  source={Images.DevIcon}
                  style={{width: '100%', height: '100%'}}
                  resizeMode="center"
                />
              </View>
            </View>
            <View style={{marginHorizontal: width * 0.03}}>
              <Text style={styles.crs}>IT & Tech</Text>
              <Text style={styles.avail}>40 Courses</Text>
            </View>
          </View>
        </View>

        <View style={styles.A}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.img}>
              <View style={styles.iconImg}>
                <Image
                  source={Images.MaeketingIcon}
                  style={{width: '100%', height: '100%'}}
                  resizeMode="center"
                />
              </View>
            </View>
            <View style={{marginHorizontal: width * 0.03}}>
              <Text style={styles.crs}>Market</Text>
              <Text style={styles.avail}>36 Courses</Text>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => setShowMoreFeaturedCourses(!showMoreFeaturedCourses)}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: width * 0.05,
          marginVertical: height * 0.01,
        }}>
        <Text style={{fontWeight: '700', color: '#fff'}}>Featured Courses</Text>
        <Text style={{fontWeight: '500', color: '#fff'}}>
          {showMoreFeaturedCourses ? 'See less' : 'See all'}
        </Text>
      </TouchableOpacity>
      {showMoreFeaturedCourses ? renderAdditionalFeaturedCourses() : null}
      <View style={styles.flist}>
        <FlatList
          data={featuredCoursesData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={renderFeaturedCourseItem}
          contentContainerStyle={styles.horizontalFlatListContainer}
        />
      </View>

      <TouchableOpacity
        onPress={() => setShowMoreMentors(!showMoreMentors)}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: width * 0.05,
          marginVertical: height * 0.01,
        }}>
        <Text style={{fontWeight: '700', color: '#fff'}}>Top Mentor</Text>
        <Text style={{fontWeight: '500', color: '#fff'}}>
          {showMoreMentors ? 'See less' : 'See all'}
        </Text>
      </TouchableOpacity>
      {showMoreMentors ? renderAdditionalMentors() : null}

      <FlatList
        data={mentorData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderMentorItem}
        contentContainerStyle={styles.horizontalFlatListContainer}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    // flex: 1,
    backgroundColor: '#1B5953',
  },
  container: {
    padding: 10,
    // width: width * 1,
    height: height * 0.17,
    backgroundColor: '#048F83',
  },
  userinfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.04,
    marginVertical: height * 0.03,
    alignItems: 'center',
  },
  dpcon: {
    width: width * 0.12,
    height: height * 0.07,
    borderRadius: 50,
    // backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
  },
  inpcon: {
    width: width * 0.7,
    height: height * 0.06,
    backgroundColor: '#1B5953',
    opacity: 0.9,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
    borderColor: '#fff',
    borderWidth: 1,
  },
  btn: {
    width: width * 0.14,
    height: height * 0.062,
    backgroundColor: '#2BADA1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05,
    marginVertical: height * 0.002,
    flexWrap: 'wrap',
  },
  A: {
    width: width * 0.42,
    height: height * 0.08,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    marginVertical: height * 0.005,
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: width * 0.02,
    alignItems: 'center',
  },
  img: {
    width: width * 0.12,
    height: height * 0.052,
    backgroundColor: '#15655E',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  crs: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  avail: {
    color: '#fff',
    fontSize: 12,
  },

  video: {
    width: width * 0.59,
    height: height * 0.3,
    backgroundColor: '#2BADA1',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: width * 0.01,
  },
  imag: {
    width: width * 0.55,
    height: height * 0.12,
    backgroundColor: 'red',
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
    fontSize: calculateFontSize(20),
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  flist: {
    paddingHorizontal: width * 0.01,
    marginVertical: height * 0.006,
  },
  mentor: {
    width: width * 0.3,
    height: height * 0.21,
    // backgroundColor:"#2BADA1",
    borderRadius: 10,
    padding: 2,
    alignItems: 'center',
    marginHorizontal: width * 0.02,
  },
  ment: {
    width: width * 0.17,
    height: height * 0.08,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  smlbtn: {
    width: width * 0.21,
    height: height * 0.04,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  name: {
    color: '#fff',
    fontSize: calculateFontSize(10),
    fontFamily: 'Poppins',
    fontWeight: '200,',
  },
  rating: {
    color: '#fff',
    fontSize: calculateFontSize(15),
    fontFamily: 'Poppins',
  },
  review: {
    color: '#fff',
    fontSize: calculateFontSize(15),
    fontFamily: 'Poppins',
  },
  iconImg: {
    width: width * 0.05,
    height: height * 0.06,
  },
});

export default TrainingScren;
