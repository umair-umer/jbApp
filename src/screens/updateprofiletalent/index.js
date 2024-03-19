import React, { useState, useCallback } from 'react'
import { Dimensions, StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { CustomeButton, CustomeHeader } from '../../Components'
import AntDesign from 'react-native-vector-icons/AntDesign';
const { width, height } = Dimensions.get('window');
import { calculateFontSize } from '../../config/font';
import Icon from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Loader from '../../Components/Loader';
import { base } from '../../config/utilities';

const UpdateProfileTalent = ({ navigation }) => {
    const { token } = useSelector((state) => state.auth); // Get the token from Redux store
const[load,setloder]=useState('')
    const [text, setText] = useState('');
    const [skills, setSkills] = useState([]);
    const [skillInput, setSkillInput] = useState('');
    const [experiences, setExperiences] = useState([
        { company: '', title: '', from: '', to: '' }
    ]);
    // for add experience
    const addExperience = () => {
        setExperiences([...experiences, { company: '', title: '', from: '', to: '' }]);
    };
    const updateExperienceField = (index, field, value) => {
        const updatedExperiences = experiences.map((exp, i) => 
            i === index ? { ...exp, [field]: value } : exp
        );
        setExperiences(updatedExperiences);
    };
    const removeExperience = (index) => {
        setExperiences(experiences.filter((_, i) => i !== index));
    };
    const handleTextChange = useCallback((newText) => {
        setText(newText);
    }, []);
    const handleSkillInputChange = useCallback((newText) => {
        setSkillInput(newText);
    }, []);

    const addSkill = () => {
        if (skillInput.trim()) {
            setSkills([...skills, skillInput.trim()]);
            setSkillInput('');
        }
    };


    const deleteSkill = useCallback((index) => {
        setSkills(skills => skills.filter((_, i) => i !== index));
    }, []);

    const handleSubmit = useCallback(async () => {
        // const profileData = {
        //     about: text,
        //     skills: skills.join(","),
        //     experience: experiences
        // };
        const experienceJSON = JSON.stringify(experiences);

        // Initialize FormData
        const formData = new FormData();
        formData.append('about', text);
        formData.append('skills', skills.join(","));
        formData.append('experience', experienceJSON); // Add the experience as a JSON string
        
        try {
            setloder(true)

          const config = {
            method: 'put',
            url: `${base}/auth/update-profile`,
            headers: {
              'Authorization': `Bearer ${token}`,
            },
            data: formData
          };
      
          // Axios PUT request
          const response = await axios(config);
          console.log(response.data, "====update");
          setloder(false)
          navigation.goBack()
      
          // Handle response here, e.g., showing a success message or navigating
        } catch (error) {
          console.error(error);
          setloder(false)

          // Handle error here, e.g., showing an error message
        }
        console.log(text,experiences,skills);
      }, [text, skills, experiences, token]);

    return (
      <>
      {load ?<Loader/>:  <ScrollView style={styles.container}>
            <View style={styles.container2}>

                <View style={styles.hed}>
                    <AntDesign name="left" color={"white"} size={calculateFontSize(20)} onPress={() => navigation.goBack()} />
                    <Text style={styles.edittext}>Edit</Text>
                </View>
                <View style={styles.chilcontain}>
                    <Text style={styles.about}>About me </Text>
                </View>
                <TextInput
                    multiline
                    placeholder="Add about you ..."
                    value={text}
                    onChangeText={handleTextChange}
                    style={styles.textArea}
                    accessibilityLabel="About Me Text Area"
                    placeholderTextColor={"#fff"}
                />
                <View style={styles.chilcontain}>
                    <Text style={styles.about}>Skill </Text>
                </View>
                <TextInput
                    placeholder="Add a Skill..."
                    value={skillInput}
                    onChangeText={handleSkillInputChange}
                    style={styles.input}
                    accessibilityLabel="Add a Skill Input"
                    placeholderTextColor="#fff"
                />
                <TouchableOpacity onPress={addSkill} style={styles.addButton}>
                    <AntDesign name="check" size={calculateFontSize(20)} color="white" />
                </TouchableOpacity>
                {skills.map((item, index) => {
                    return (
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View key={index} style={styles.skilsscon}>
                                <Text style={styles.skilltext}>{item}</Text>


                            </View>
                            <TouchableOpacity onPress={() => deleteSkill(index)} style={styles.deleteButton}>
                                <AntDesign name="delete" size={calculateFontSize(16)} color="white" />
                            </TouchableOpacity>
                        </View>
                    )

                })}
                <TouchableOpacity onPress={addExperience}>
    <Text>Add Experience</Text>
</TouchableOpacity>
                <Text style={styles.header}>Work Experience</Text>
                {experiences.map((exp, index) => (
              <View key={index}>
                <View  style={styles.inputGroup}>
                    <Text style={styles.label}>Company Name*</Text>
                    <View style={styles.inputRow}>

                        <TextInput
                           value={exp.company}
                           onChangeText={(text) => updateExperienceField(index, 'company', text)}
                            placeholder="Enter company name"
                            style={styles.input}
                            accessibilityLabel="Company Name Input"
                            placeholderTextColor="#fff"
                        />
                    </View>
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput
                        value={exp.title}
                        onChangeText={(text) => updateExperienceField(index, 'title', text)}
                        placeholder="Title"
                        style={styles.input}
                        accessibilityLabel="Location Input"
                        placeholderTextColor="#fff"
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Date*</Text>
                    <View style={styles.dateContainer}>
                        <TextInput
                            value={exp.from}
                            onChangeText={(text) => updateExperienceField(index, 'from', text)}
                            placeholder="Y-M-D"
                            style={[styles.input, styles.dateInput]}
                            accessibilityLabel="Start Date Input"
                            placeholderTextColor="#fff"
                        />
                        <Text style={styles.toText}>To</Text>
                        <TextInput
                            value={exp.to}
                            onChangeText={(text) => updateExperienceField(index, 'to', text)}
                            placeholder="Y-M-D"
                            style={[styles.input, styles.dateInput]}
                            accessibilityLabel="End Date Input"
                            placeholderTextColor="#fff"
                        />
                    </View>
                </View>
              </View>
))}
                <CustomeButton onPress={handleSubmit} nonbg={true} title="save" />

            </View>
        </ScrollView>}
      </>

    )
}

export default UpdateProfileTalent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(0,154,140)',
        // padding: 20
    },
    container2: {
        padding: 10

    },
    hed: {
        flexDirection: "row",
        alignItems: "center",
        // backgroundColor:"red"
    },
    edittext: {
        color: "#fff",
        fontFamily: "poppins",
        fontWeight: "bold",
        fontSize: calculateFontSize(18),
        marginHorizontal: width * 0.35,
    },
    about: {
        color: '#FFf',
        fontSize: calculateFontSize(15),
        fontFamily: 'Poppins',
        fontWeight: "bold"
    },
    chilcontain: {
        padding: 20
    },
    textArea: {
        backgroundColor: '#1B5953',
        minHeight: 80, // Arbitrary size, should be adjusted based on design requirements
        borderRadius: 8,
        padding: 12,
        textAlignVertical: 'top',
        fontSize: 16,
        color: '#fff',
    },
    input: {
        // flex: 1,ghgfhgfh
        backgroundColor: '#1B5953',
        borderRadius: 8,
        padding: 12,
        marginRight: 8,
        fontSize: 16,
        color: "#fff"
    },
    skilsscon: {
        flexDirection: "row",
        width: width * 0.3,
        justifyContent: "space-around",
        backgroundColor: '#3C948B',
        marginHorizontal: width * 0.01,
        padding: 5,
        marginVertical: height * 0.009,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 4,
    },
    skilltext: {
        color: '#fff',
        fontSize: calculateFontSize(12),
        textTransform: 'capitalize',
        fontFamily: 'Poppins',
        fontWeight: 'bold',
    },
    skillsList: {
        // flexDirection:"row",
        backgroundColor: "#1B5953"
    },
    addButton: {
        backgroundColor: "#1B5953",
        left: width * 0.8,
        right: 0,
        top: -(height * 0.04),
        bottom: 9,
        width: width * 0.06,
        borderRadius: 100,
        padding: 1,

    },
    header: {
        color: '#fff',
        fontSize: 24,
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        color: '#fff',
        marginBottom: 10,
    },
    inputWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    input: {

        backgroundColor: '#1B5953',
        padding: 10,
        borderRadius: 5,
        color: '#fff',
    },
    inputWithoutIcon: {
        paddingLeft: 30, // Assuming there's no icon, adjust padding accordingly
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateInput: {
        flex: 1,
        backgroundColor: '#1B5953',
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
        justifyContent: 'center',
    },
    toText: {
        color: '#fff',
        marginHorizontal: 10,
    },
    dateText: {
        color: '#fff',
    },
    inputGroup: {
        marginVertical: height * 0.02,
    },
    postcontainermain: {
        backgroundColor: "#fff",
        borderRadius: 20,
        marginVertical: height * 0.01
    },


})