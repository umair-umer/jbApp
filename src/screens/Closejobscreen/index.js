import React from 'react';
import { ScrollView, View, Text, ImageBackground, SafeAreaView, StyleSheet, Image, Dimensions, TouchableOpacity, FlatList, TextInput } from 'react-native';
import Images from '../../config/im';
const { width, height } = Dimensions.get('window');
import { calculateFontSize } from '../../config/font';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Bg from '../../assets/shape.png';
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'

function Closejobscreen({navigation}) {
  return (
  <SafeAreaView style={styles.container}>
      <View style={styles.hedr}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back" color="#fff" size={30} />
                    </TouchableOpacity>
                    <Text style={styles.headname}>Closed</Text>
                    <TouchableOpacity
                        // style={styles.profileconainter}
                        onPress={() => navigation.openDrawer()}>
                        {/* <Image resizeMode='contain' style={{ width: "100%", height: "100%" }} source={Images.BookmarkSimple} /> */}
                    </TouchableOpacity>
                </View>


                <ScrollView showsVerticalScrollIndicator={false}>
       <View style={styles.shap}>
          <ImageBackground style={{
            width: width * 0.91,
            height: height * 0.3,
            paddingTop: height * 0.039,
            paddingHorizontal: width * 0.03,
            opacity:0.7
          }} resizeMode='contain' source={Bg}>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row" ,alignItems:"center"}}>
                <View style={styles.iconimage} >
                  <Image style={{ width: "100%", height: "100%" }} resizeMode='center' source={Images.dp} />
                </View>
                <View style={{ marginHorizontal: width * 0.03, }}>
                  <Text style={styles.designation}>Software Engineer</Text>
                  <Text style={styles.companyname}>SumatoSoft</Text>
                </View>
              </View>
              <TouchableOpacity onPress={()=>navigation.navigate("jobdeatilview")}  style={{ flexDirection: "row", alignItems: "center", marginBottom: height * 0.035, marginRight: width * 0.01, }}>
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

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: height * 0.04, paddingHorizontal: width * 0.02, }}>
              <View style={{
                flexDirection
                  : "row"
              }}>
                <Entypo name='back-in-time' size={20} color={"#000"} /><Text style={styles.postduration}>Posted 5 days ago</Text>
              </View>
              <View>
                <Text style={styles.postsalary}>$25K/mo</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.shap}>
          <ImageBackground style={{
            width: width * 0.91,
            height: height * 0.3,
            paddingTop: height * 0.039,
            paddingHorizontal: width * 0.03,
            opacity:0.7
          }} resizeMode='contain' source={Bg}>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row" ,alignItems:"center"}}>
                <View style={styles.iconimage} >
                  <Image style={{ width: "100%", height: "100%" }} resizeMode='center' source={Images.dp} />
                </View>
                <View style={{ marginHorizontal: width * 0.03, }}>
                  <Text style={styles.designation}>Software Engineer</Text>
                  <Text style={styles.companyname}>SumatoSoft</Text>
                </View>
              </View>
              <TouchableOpacity onPress={()=>navigation.navigate("jobdeatilview")}  style={{ flexDirection: "row", alignItems: "center", marginBottom: height * 0.035, marginRight: width * 0.01, }}>
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

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: height * 0.04, paddingHorizontal: width * 0.02, }}>
              <View style={{
                flexDirection
                  : "row"
              }}>
                <Entypo name='back-in-time' size={20} color={"#000"} /><Text style={styles.postduration}>Posted 5 days ago</Text>
              </View>
              <View>
                <Text style={styles.postsalary}>$25K/mo</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.shap}>
          <ImageBackground style={{
            width: width * 0.91,
            height: height * 0.3,
            paddingTop: height * 0.039,
            paddingHorizontal: width * 0.03,
            opacity:0.7
          }} resizeMode='contain' source={Bg}>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row" ,alignItems:"center"}}>
                <View style={styles.iconimage} >
                  <Image style={{ width: "100%", height: "100%" }} resizeMode='center' source={Images.dp} />
                </View>
                <View style={{ marginHorizontal: width * 0.03, }}>
                  <Text style={styles.designation}>Software Engineer</Text>
                  <Text style={styles.companyname}>SumatoSoft</Text>
                </View>
              </View>
              <TouchableOpacity onPress={()=>navigation.navigate("jobdeatilview")}  style={{ flexDirection: "row", alignItems: "center", marginBottom: height * 0.035, marginRight: width * 0.01, }}>
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

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: height * 0.04, paddingHorizontal: width * 0.02, }}>
              <View style={{
                flexDirection
                  : "row"
              }}>
                <Entypo name='back-in-time' size={20} color={"#000"} /><Text style={styles.postduration}>Posted 5 days ago</Text>
              </View>
              <View>
                <Text style={styles.postsalary}>$25K/mo</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.shap}>
          <ImageBackground style={{
            width: width * 0.91,
            height: height * 0.3,
            paddingTop: height * 0.039,
            paddingHorizontal: width * 0.03,
            opacity:0.7
          }} resizeMode='contain' source={Bg}>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row" ,alignItems:"center"}}>
                <View style={styles.iconimage} >
                  <Image style={{ width: "100%", height: "100%" }} resizeMode='center' source={Images.dp} />
                </View>
                <View style={{ marginHorizontal: width * 0.03, }}>
                  <Text style={styles.designation}>Software Engineer</Text>
                  <Text style={styles.companyname}>SumatoSoft</Text>
                </View>
              </View>
              <TouchableOpacity onPress={()=>navigation.navigate("jobdeatilview")}  style={{ flexDirection: "row", alignItems: "center", marginBottom: height * 0.035, marginRight: width * 0.01, }}>
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

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: height * 0.04, paddingHorizontal: width * 0.02, }}>
              <View style={{
                flexDirection
                  : "row"
              }}>
                <Entypo name='back-in-time' size={20} color={"#000"} /><Text style={styles.postduration}>Posted 5 days ago</Text>
              </View>
              <View>
                <Text style={styles.postsalary}>$25K/mo</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
       </ScrollView>

  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#009A8C",
        padding: 20,
   
    },
    hedr: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        
    },
    headname: {
        fontSize: calculateFontSize(15),
        fontWeight: "bold",
        color: "#fff",
        textTransform: "capitalize",
        // marginHorizontal: width * 0.01,
        fontFamily: "Poppins",

    },
    shap: {

        alignItems: "center",
        // backgroundColor: "red",
        marginVertical: height * 0.001
        // padding:10,
      },
      iconimage: {
        width: width * 0.13,
        height: height * 0.06,
        backgroundColor: "#fff",
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
      }
    
  
})

export default Closejobscreen
