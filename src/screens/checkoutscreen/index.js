import React, { useState,useEffect } from 'react'
import { View, Dimensions, SafeAreaView, StyleSheet, Text, TextInput, FlatList, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
const { width, height } = Dimensions.get("window")
import { calculateFontSize } from '../../config/font';
import BottomDrawer from 'rn-bottom-drawer';
import Entypo from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Images from '../../config/im';
import { CustomeButton,CustomModal} from '../../Components'
import Animated, {
    useSharedValue,
    withSpring,
    useAnimatedStyle,
  } from 'react-native-reanimated';
const TAB_BAR_HEIGHT = 100
const CheckoutScreen = ({ navigation }) => {
    const [selectMaster, setSelectMaster] = useState(false);
    const [selectPaypal, setSelectPaypal] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    useEffect(() => {
        return () => {
            // Reset the state when the component is unmounted
            setModalVisible(false);
        };
    }, []);

    const handleSelect = (paymentMethod) => {
        if (paymentMethod === 'Mastercard') {
            setSelectMaster(true);
            setSelectPaypal(false);
        } else if (paymentMethod === 'Paypal') {
            setSelectMaster(false);
            setSelectPaypal(true);
        }
        console.log(paymentMethod, "===>");
    };

    const translateY = useSharedValue(height);

    const toggleDrawer = () => {
      translateY.value = withSpring(translateY.value === 0 ? height : 0);
      setIsDrawerOpen(!isDrawerOpen);
    };
  
    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateY: translateY.value }],
      };
    });

    const [isCardAdded, setIsCardAdded] = useState(false);

    const addCard = () => {
        toggleDrawer();
        setIsCardAdded(true);
      };

    return (
      <>
        <CustomModal passscreen={true} status={"Payment Received Sucessfully "} statusTwo={"Congratulation enjoy your class"} isModalVisible={isModalVisible} onPress={toggleModal} />
    
        <SafeAreaView style={styles.container} >
            <View style={styles.hedcon}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" color="#fff" size={30} />
                </TouchableOpacity>
                <Text style={styles.title}>checkout</Text>
            </View>
            <View style={styles.checkproductmain}>
                <View style={styles.checkoutproductimage}>
                    <Image style={{ width: "100%", height: "100%" }} resizeMode='cover' source={Images.play} />
                </View>
                <View style={{ marginHorizontal: width * 0.03, }}>
                    <View style={styles.namediv}>
                        <Text style={styles.name}>UI/UX Design</Text>

                    </View>



                    <Text style={styles.crsname}>User interface design
                        essentials</Text>

                    <View style={{ flexDirection: 'row', alignItems: "center", }}>

                        <View style={{ flexDirection: 'row', width: width * 0.65, justifyContent: "space-between" }}>
                            <View style={{ flexDirection: 'row', marginHorizontal: width * 0.01, alignItems: "center" }}>
                                <FontAwesome name="star" color={"#FFB800"} size={12} />
                                <Text style={styles.rating}>4.9 </Text>
                                <Text style={styles.review}>(80 Reviews)</Text>
                            </View>
                            <View>
                                <Text style={styles.review}>$65</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <Text style={styles.paymentmethod}>Payment Method</Text>
            <View style={styles.flexspacborder}>
                <View style={styles.flex}>
                    <View style={styles.iconplay}>
                        <Image resizeMode='center' style={{ width: "100%", height: "100%" }} source={Images.Mastercard} />

                    </View>
                    <View style={styles.margin}>
                        <Text style={styles.intro}>
                            Master Card
                        </Text><Text style={styles.time}>
                        {cardNumber}
                        </Text>
                        
                    </View>
                </View>
                <TouchableOpacity onPress={() => handleSelect('Mastercard')}
                >
                    <Text style={selectMaster ? styles.backgroundradio : styles.circleradio} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexspacborder}>
                <View style={styles.flex}>
                    <View style={styles.iconplay}>
                        <Image resizeMode='center' style={{ width: "100%", height: "100%" }} source={Images.paypal} />

                    </View>
                    <View style={styles.margin}>
                        <Text style={styles.intro}>
                            Paypal
                        </Text>

                    </View>
                </View>

                <TouchableOpacity onPress={() => handleSelect('Paypal')}
                >

                    <Text style={selectPaypal ? styles.backgroundradio : styles.circleradio} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={toggleDrawer} style={styles.addbutt}>
                <Text style={styles.addtext}>+ Add New Card</Text>
            </TouchableOpacity>
            <View style={styles.mainview}>
                <View style={styles.paymentshownview}>
                    <Text style={styles.text}>Item Total</Text>
                    <Text style={styles.text}>$65</Text>
                </View>
                <View style={styles.paymentshownview}>
                    <Text style={styles.text}>Discount</Text>
                    <Text style={styles.text}>$5</Text>
                </View>
            </View>
            <View style={styles.mainview}>
                <View style={styles.paymentshownview}>
                    <Text style={styles.text}>Grand Total</Text>
                    <Text style={styles.text}>$60</Text>
                </View>

            </View>
            <CustomeButton title={"paynow"} nonbg={true} onPress={toggleModal} />
           
            <Animated.View style={[styles.drawer, animatedStyle]}>
           <View style={{justifyContent:"center",alignItems:"center",bottom:height*0.02,}}>
           <Text onPress={toggleDrawer} style={styles.line}/>
           <View style={{marginVertical:height*0.01,alignItems:"center"}}>
           <Text style={{color:"#fff",fontSize:calculateFontSize(15),fontWeight:"700"}}>Add New Card</Text>
            <Text style={{color:"#fff",fontSize:calculateFontSize(12),fontWeight:"500"}}>Add your card details</Text>
          
           </View>
            
           </View>
            {/* <TouchableOpacity style={styles.closeButton} onPress={toggleDrawer}>
              <Text style={styles.closeButtonText}>Close Drawer</Text>
            </TouchableOpacity> */}
           
               
               <View>
                <View style={styles.inp}>
                <Text style={{color:"#fff",marginVertical:height*0.004}}> Card Number</Text>
                <TextInput
                 placeholder='453343 3323 35654 232'
                 placeholderTextColor={"#fff"}
                 onChangeText={(text) => setCardNumber(text)}
                 
                
                />

                
                </View>
               
                <View style={styles.inp}>
                <Text style={{color:"#fff",marginVertical:height*0.004}}> Card Holder Name</Text>
                <TextInput
                 placeholder='Alex Hudson'
                 placeholderTextColor={"#fff"}
                 onChangeText={(text) => setCardHolderName(text)}
                
                />
                </View>
               
                <View style={styles.Cvvcard}>
                <View style={styles.inpexpdate}>
                <Text style={{color:"#fff",marginVertical:height*0.004}}>Expiry Date</Text>
                <TextInput
                 placeholder='24/2077'
                 placeholderTextColor={"#fff"}
                 onChangeText={(text) => setExpiryDate(text)}
                
                />
                </View>
                    
                <View style={styles.inpcvv}>
                <Text style={{color:"#fff",marginVertical:height*0.004}}>CVV</Text>
                <TextInput
                 placeholder='...'
                 placeholderTextColor={"#fff"}
                 onChangeText={(text) => setCvv(text)}
                
                />
                </View>

                </View>

                <CustomeButton title={"Add Card"} nonbg={true}  onPress={addCard}/>
               
               </View>

               
              
            
            {/* <BottomDrawer
                    containerHeight={height}
                    offset={TAB_BAR_HEIGHT}
                >
              
                    
                   
                </BottomDrawer> */}
          </Animated.View>
        </SafeAreaView >
           
        </>
    )
}

export default CheckoutScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#1C5F58"
    },
    hedcon: {
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        color: "#fff",
        fontSize: calculateFontSize(15),
        fontFamily: "Poppins",
        fontWeight: "bold",
        marginHorizontal: width * 0.03,
    },
    checkoutproductimage: {
        width: width * 0.2,
        height: height * 0.10,
        backgroundColor: "red",
        borderRadius: 10,
        overflow: "hidden"
    },
    name: {

        borderRadius: 10,
        color: "#FFf",
        fontSize: calculateFontSize(10),
        fontFamily: "Poppins",



    },
    namediv: {
        width: width * 0.20,
        height: height * 0.02,
        backgroundColor: "#2BADA1",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
    rating: {
        color: "#fff",
        fontSize: calculateFontSize(15),
        fontFamily: "Poppins",
    },
    review: {
        color: "#fff",
        fontSize: calculateFontSize(15),
        fontFamily: "Poppins",
    },
    crsname: {

        color: "#fff",
        fontSize: calculateFontSize(15),
        fontFamily: "Poppins",
        fontWeight: "bold",
        paddingRight: width * 0.4,
        // backgroundColor:"red"
    },
    checkproductmain: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 10,
        padding: 5,
        marginVertical: height * 0.03,

    },
    paymentmethod: {
        color: "#fff",
        fontSize: calculateFontSize(15),
        fontFamily: "Poppins",
        fontWeight: "bold",
    },
    flex: {
        flexDirection: "row",
        alignItems: "center"
    },


    margin: {
        marginHorizontal: width * 0.03,
    },
    icon: {
        width: width * 0.12,
        height: height * 0.05,
        paddingHorizontal: 10,
        backgroundColor: "#2FB5A8",
        borderRadius: 10,
    },
    flexspac: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: height * 0.03,
    },
    flexspacborder: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // borderBottomWidth: 0.2,
        // borderBottomColor: "#fff",
        paddingBottom: height * 0.03,
        marginVertical: height * 0.02,
    },
    iconplay: {
        width: width * 0.15,
        height: height * 0.07,
        padding: 10,
        backgroundColor: "#2BADA1",
        borderRadius: 10,
    },
    intro: {
        color: "#fff",
        fontSize: calculateFontSize(15),
        fontFamily: "Poppins",
        fontWeight: "bold"
    },
    time: {
        color: "#fff",
        fontSize: calculateFontSize(15),
        fontFamily: "Poppins",
    },
    circleradio: {
        width: width * 0.04,
        height: height * 0.02,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: "#0DFFE8"
    },
    backgroundradio: {
        backgroundColor: "#2BADA1",
        width: width * 0.04,
        height: height * 0.02,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: "#0DFFE8"
    },
    addbutt: {
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.32,
        borderWidth: 1,
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 15,
        borderColor: "#fff",
        backgroundColor: "#104C47"
    },
    addtext: {
        color: "#fff",
        fontSize: calculateFontSize(15),
        fontFamily: "Poppins",
    },
    mainview: {
        marginTop: height * 0.03,
        borderTopWidth: 0.2,
        paddingBottom: height * 0.03,
        borderTopColor: "#fff",
        paddingTop: height * 0.03,

    },
    paymentshownview: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    text: {
        color: "#fff",
        fontSize: calculateFontSize(14),
        fontFamily: "Poppins",
        marginVertical: height * 0.001,
    },
    drawer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#104C47',
        height: height * 0.52,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: height*0.03,
        paddingHorizontal: width*0.03,
      },
      closeButton: {
        alignItems: 'flex-end',
        marginBottom: height*0.06,
      },
      closeButtonText: {
        color: '#2BADA1',
        fontSize: calculateFontSize(18),
        justifyContent:"flex-end"
      },
      line:{
        width: width * 0.2,
        height: height * 0.004,
        backgroundColor:"#FFFFFF",
        borderRadius:10
      },
      inp:{
            
           height:height*0.09,
           borderColor:"#fff",
           borderWidth:1,
           borderRadius:20,
           paddingHorizontal:width*0.02,
           marginVertical:height*0.01
      },

      inpexpdate:{
        
        width:width*0.52,
        borderColor:"#fff",
        borderWidth:1,
        borderRadius:20,
        paddingHorizontal:width*0.02,
        marginVertical:height*0.01
   },

      Cvvcard:{
             flexDirection:"row",
             justifyContent:"space-between"
            
            },
  inpcvv:{
    width:width*0.34,
    borderColor:"#fff",
    borderWidth:1,
    borderRadius:20,
    paddingHorizontal:width*0.02,
    marginVertical:height*0.01
       
  }


})