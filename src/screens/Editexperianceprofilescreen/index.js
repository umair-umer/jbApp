import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, TextInput, FlatList, TouchableOpacity, SafeAreaView, Image } from 'react-native';
const { width, height } = Dimensions.get("window");
import { calculateFontSize } from '../../config/font';
import { CustomeButton, CustomeforgetHeader } from '../../Components';
import Images from '../../config/im';
import Feather from 'react-native-vector-icons/dist/Feather';

function Editprofileexperiancescreen() {
    const [isEditing, setIsEditing] = useState(false);
    const [editableText1, setEditableText1] = useState('Gate Guard');
    const [editableText2, setEditableText2] = useState('PeopleReady Eagle Pass, TX');
    const [editableText3, setEditableText3] = useState('Dec 2022 - Present');

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };


    return (
        <SafeAreaView style={styles.mainCon}>

            <CustomeforgetHeader
                onPress={() => navigation.goBack()}
                company={true}
                source={Images.arrow}
                heading={'Edit Experience '}

            />

            <View style={styles.heading}>
                <Text style={styles.txt}>
                    Add work experience
                </Text>
            </View>

            <View style={styles.inpcon}>
                <TextInput
                    placeholder='Employment type'
                    placeholderTextColor="#fff"
                    style={styles.inp}
                />
                <View style={styles.inp2}>
                    <Text style={{ color: "#fff", marginVertical: height * 0.006, fontWeight: "600" }}>Employment type</Text>
                    {isEditing ? (
                        <View style={styles.editableInputContainer}>
                            <TextInput
                                style={styles.editableInput}
                                placeholder="Enter Employment type"
                                placeholderTextColor={"#fff"}
                                value={editableText1}
                                onChangeText={text => setEditableText1(text)}
                            />
                            <TextInput
                                style={styles.editableInput}
                                placeholder="Enter Employment place"
                                placeholderTextColor={"#fff"}
                                value={editableText2}
                                onChangeText={text => setEditableText2(text)}
                            />
                            <TextInput
                                style={styles.editableInput}
                                placeholder="Enter Employment date"
                                placeholderTextColor={"#fff"}
                                value={editableText3}
                                onChangeText={text => setEditableText3(text)}
                            />
                        </View>
                    ) : (
                        <View style={styles.text}>
                            <Text style={{ color: "#fff", fontSize: calculateFontSize(16), fontWeight: "700" }}>{editableText1}</Text>
                            <Text style={{ color: "#fff" }}>{editableText2}</Text>
                            <Text style={{ color: "#fff" }}>{editableText3}</Text>
                        </View>
                    )}
                </View>
            </View>
            <View style={styles.addexpcon}>
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.addbtn}>
                        <Text style={styles.addtxt}>+</Text>
                    </TouchableOpacity>
                    <Text style={styles.btntxt}>Add Experience</Text>
                </View>
            </View>
            <View style={styles.procon}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View style={styles.wrkexperience}>
                        <View style={styles.dpPic}>
                            <Image resizeMode="center" source={Images.pro} style={styles.img} />
                        </View>
                        <View style={{ paddingHorizontal: width * 0.03 }}>
                            <Text style={{ color: "#fff", fontSize: calculateFontSize(16), fontWeight: "700" }}>{editableText1}</Text>
                            <Text style={{ color: "#fff" }}>{editableText2}</Text>
                            <Text style={{ color: "#fffx" }}>{editableText3}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={handleEditToggle}>
                        <Feather color="#fff" name={isEditing ? "save" : "edit"} size={calculateFontSize(20)} />
                    </TouchableOpacity>
                </View>
            </View>


            <View style={styles.btncon}>

                <CustomeButton title={'Update'} nonbg={true} />
            </View>

        </SafeAreaView>


    )
}

const styles = StyleSheet.create({

    mainCon: {
        flex: 1,
        paddingHorizontal: width * 0.03,
        backgroundColor: 'rgba(0, 154, 140,0.9)',
    },
    txt: {
        color: "white",
        fontSize: calculateFontSize(16),
        fontWeight: "700"
    },


    inp: {

        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 10,
        height: height * 0.09,
        marginVertical: height * 0.02,
        color: "#fff"
    },
    inp2: {

        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: width * 0.03,
        marginVertical: height * 0.02
    },
    addexpcon: {
        marginVertical: height * 0.01
    },
    btn: {

        width: width * 0.94,
        height: height * 0.08,
        backgroundColor: "#C3E5FF",
        paddingHorizontal: width * 0.07,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",



    },
    btntxt: {

        color: "#000",
        fontSize: calculateFontSize(16),
        fontWeight: "600",
        marginHorizontal: width * 0.05
    },
    addbtn: {

        width: width * 0.06,
        height: height * 0.028,
        backgroundColor: "#0E746B",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"

    },
    addtxt: {

        color: "#fff",
        fontSize: calculateFontSize(16),
        fontWeight: "600"
    },
    text: {

        paddingVertical: height * 0.01
    },
    wrkexperience: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: height * 0.02,
    },
    wrkexp: {
        color: "#000",
        fontSize: calculateFontSize(13),
        textTransform: "capitalize",
        fontFamily: "Poppins",

    },
    dpPic: {

        width: width * 0.15,
        height: height * 0.06,
        backgroundColor: "#ffff",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",

    },

    img: {
        width: "100%",
        height: "100%",
    },
    procon: {

        // paddingHorizontal: width * 0.05,
        marginVertical: height * 0.03
    },
    updatebtncon: {
        // paddingHorizontal: width * 0.05,
        marginVertical: height * 0.22

    },

    editableInput: {
        color: "#000"

    },
    btncon: {
        alignItems: "center",
        paddingHorizontal: width * 0.04,
        marginVertical: height * 0.2,
    }

})

export default Editprofileexperiancescreen