import React, {useState, useEffect} from 'react';
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
  Platform,
  TextInput,
  Linking,
} from 'react-native';
import Images from '../../config/im';
import {calculateFontSize} from '../../config/font';
const {width, height} = Dimensions.get('window');
import {CustomeButton, CustomeHeader} from '../../Components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {launchImageLibrary} from 'react-native-image-picker';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {base, baseprofileurl} from '../../config/utilities';
import qs from 'qs';


function DynamicField({placeholder, onRemove, onChange, value}) {
  return (
    <View style={styles.dynamicFieldContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#fff"
        style={styles.expInput}
        onChangeText={onChange}
        value={value}
      />
      <TouchableOpacity onPress={onRemove} style={styles.removeFieldButton}>
        <Icon
          name="remove"
          color={'#fff'}
          size={26}
          style={{
            alignSelf: 'flex-start',
            marginTop: height * 0.006,
            backgroundColor: 'red',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
function Genrateresumeform({navigation, route}) {
  const {templateName, templateType} = route.params;
  const {token} = useSelector(state => state.auth);
  console.log(token, 'cvwlascreen');
  const [isSummaryVisible, setSummaryVisible] = useState(false);
  const [isExperienceVisible, setExperienceVisible] = useState(false);
  const [isEducationVisible, setEducationVisible] = useState(false);
  const [isSkillsVisible, setSkillsVisible] = useState(false);
  const [isContactVisible, setContactVisible] = useState(false);
  const [isAboutVisible, setAboutVisible] = useState(false);
  const [contact, setContact] = useState({phone: '', website: ''});
  const [about, setAbout] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [summaries, setSummaries] = useState([{id: Math.random(), value: ''}]);
  const [educations, setEducations] = useState([
    {id: Math.random(), value: ''},
  ]);
  const [experiences, setExperiences] = useState([
    {id: Math.random(), value: ''},
  ]);
  const [skills, setSkills] = useState([
    {id: Math.random(), name: '', value: ''},
  ]);

  const [formData, setFormData] = useState({
    profileImage: null,
    personalInfo: {
      name: '',
      email: '',
      location: '',
      dateOfBirth: {date: '', month: '', year: ''},
    },
    contact: {phone: '', website: ''},
    about: '',
    summaries: [{id: Math.random(), value: ''}],
    experiences: [{id: Math.random(), value: ''}],
    educations: [{id: Math.random(), value: ''}],
    skills: [{id: Math.random(), value: ''}],
  });

  console.log('formData=====>>', formData);

  const handleInputChange = (field, value, isNested = false) => {
    setFormData(prevFormData => {
      if (isNested) {
        return {
          ...prevFormData,
          personalInfo: {
            ...prevFormData.personalInfo,
            dateOfBirth: {
              ...prevFormData.personalInfo.dateOfBirth,
              [field]: value,
            },
          },
        };
      } else if (field in prevFormData.personalInfo) {
        return {
          ...prevFormData,
          personalInfo: {
            ...prevFormData.personalInfo,
            [field]: value,
          },
        };
      }
      // For top-level fields
      return {
        ...prevFormData,
        [field]: value,
      };
    });
  };

  const handleChoosePhoto = () => {
    launchImageLibrary({noData: true}, response => {
      if (response.assets && response.assets.length > 0) {
        const asset = response.assets[0];
        setProfileImage({
          uri: asset.uri,
          name: asset.fileName || 'profile.jpg',
          type: asset.type || 'image/jpeg',
        });
      }
    });
    console.log(profileImage);
  };

  const toggleSummaryVisibility = () => {
    setSummaryVisible(!isSummaryVisible);
  };

  const toggleExperienceVisibility = () => {
    setExperienceVisible(!isExperienceVisible);
  };

  const toggleEducationVisibility = () => {
    setEducationVisible(!isEducationVisible);
  };

  const upadteSummariesState = (id, value) => {
    setFormData(currentFormData => ({
      ...currentFormData,
      summaries: currentFormData.summaries.map(summary =>
        summary.id === id ? {...summary, value: value} : summary,
      ),
    }));
  };

  const upadteExperincesState = (id, value) => {
    setFormData(currentFormData => ({
      ...currentFormData,
      experiences: currentFormData.experiences.map(experience =>
        experience.id === id ? {...experience, value: value} : experience,
      ),
    }));
  };

  const upadteEducationsState = (id, value) => {
    setFormData(currentFormData => ({
      ...currentFormData,
      educations: currentFormData.educations.map(edu =>
        edu.id === id ? {...edu, value: value} : edu,
      ),
    }));
  };

  const upadteSkillsState = (id, value) => {
    setFormData(currentFormData => ({
      ...currentFormData,
      skills: currentFormData.skills.map(skill =>
        skill.id === id ? {...skill, value: value} : skill,
      ),
    }));
  };

  const addField = fieldKey => {
    const newItem = {id: Math.random(), value: ''};
    setFormData(prevState => ({
      ...prevState,
      [fieldKey]: [...prevState[fieldKey], newItem],
    }));
  };

  const removeField = (fieldKey, id) => {
    setFormData(prevState => ({
      ...prevState,
      [fieldKey]: prevState[fieldKey]?.filter(item => item.id !== id),
    }));
  };

  const updateDateOfBirth = (field, value) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      personalInfo: {
        ...prevFormData.personalInfo,
        dateOfBirth: {
          ...prevFormData.personalInfo.dateOfBirth,
          [field]: value,
        },
      },
    }));
  }; 

  const toggleContactVisibility = () => {
    setContactVisible(!isContactVisible);
  };

  const toggleAboutVisibility = () => {
    setAboutVisible(!isAboutVisible);
  };

  // const generateCV = async () => {
  //   const profileImageBase64 = profileImage
  //     ? await convertImageToBase64(profileImage.uri)
  //     : null;
  //   const payload = {
  //     temp: templateType,
  //     name: formData.name,
  //     email: formData.email,
  //     location: formData.location,
  //     dateOfBirth: `${formData.personalInfo.dateOfBirth.year}-${formData.personalInfo.dateOfBirth.month}-${formData.personalInfo.dateOfBirth.date}`,
  //     phone: formData.phone,
  //     website: formData.website,
  //     interest: formData.interest,
  //     skills: skills.map(skill => {
  //       console.log('skillp===', skill);
  //       return {name: skill.name, value: skill.value};
  //     }),
  //     experience: experiences.map(exp => {
  //       console.log('exp+========>>>', exp);
  //       return {
  //         company: exp.company,
  //         position: exp.position,
  //         about: exp.about,
  //         from: exp.from,
  //         to: exp.to,
  //       };
  //     }),
  //     education: educations.map(edu => ({
  //       name: edu.name,
  //       degree: edu.degree,
  //       from: edu.from,
  //       to: edu.to,
  //     })),
  //     profileImage: profileImageBase64,
  //     summary: summaries.map(summary => summary.value),
  //     about: about,
  //   };

  //   if (!token) {
  //     console.error('No token available');
  //     return;
  //   }
  //   console.log('Payload for debugging:', JSON.stringify(payload, null, 2))
  //   const config = {
  //     method: 'post',
  //     url: `${base}/talent/home/generate`,
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`,
  //     },
  //     data: payload,
  //   };
  //   console.log('datatat payload====>', payload);
  //   try {
  //     const response = await axios.request(config);
  //     console.log(response.data.path, 'path');
  //     if (response.data && response.data.path) {
  //       const fullPath = baseprofileurl + response.data.path;
  //       Linking.openURL(fullPath).catch(err => {
  //         console.error('Failed to open URL:', err.message);
  //       });
  //     } else {
  //       console.log('No URL received from the server');
  //     }
  //     console.log('response===>>>', response);
  //   } catch (error) {
  //     console.error(
  //       'Error generating CV:',
  //       error.response ? error.response.data : error.message,
  //     );
  //   }
  // };

  const generateCV = async () => {
    // Convert the skills, experience, and education to JSON strings
    const skillsJSON = JSON.stringify(formData.skills.map(skill => ({
      name: skill.name,
      value: skill.value
    })));
  
    const experienceJSON = JSON.stringify(formData.experiences.map(exp => ({
      company: exp.company,
      position: exp.position,
      about: exp.about,
      from: exp.from,
      to: exp.to
    })));
  
    const educationJSON = JSON.stringify(formData.educations.map(edu => ({
      name: edu.name,
      degree: edu.degree,
      from: edu.from,
      to: edu.to
    })));
  
    // Prepare the form data using qs.stringify
    const dataToSend = qs.stringify({
      temp: templateType,
      name: formData.personalInfo.name,
      email: formData.personalInfo.email,
      location: formData.personalInfo.location,
      dateOfBirth: `${formData.personalInfo.dateOfBirth.year}-${formData.personalInfo.dateOfBirth.month}-${formData.personalInfo.dateOfBirth.date}`,
      phone: formData.contact.phone,
      website: formData.contact.website,
      about: formData.about,
      skills: skillsJSON,
      experience: experienceJSON,
      education: educationJSON,
      // Add more fields as needed
    });
  
    const config = {
      method: 'post',
      url: 'https://app.jobbooks.app/api/v1/jobbook/talent/home/generate',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`, // Make sure token is defined and valid
      },
      data: dataToSend,
    };
  
    try {
      const response = await axios.request(config);
  
      // Assuming the response includes the path to the generated PDF
      if (response.data && response.data.path) {
        // Construct the full URL to the PDF
        const baseUrl = 'https://app.jobbooks.app'; // Your API base URL
        const fullPdfUrl = `${baseUrl}${response.data.path}`; // Concatenate to get the full PDF URL
  
        // Use Linking to open the PDF URL in the default web browser
        Linking.openURL(fullPdfUrl).catch(err => {
          console.error('Failed to open the PDF URL:', err);
        });
      } else {
        console.log('No PDF path was provided in the response');
      }
    } catch (error) {
      console.error('Error during API call:', error.response ? error.response.data : error.message);
    }
  };
  



  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={Images.jsbg}
      resizeMode="cover">
      <View style={styles.line}></View>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CustomeHeader iconsource3={Images.setting} />
          <View style={styles.heading}>
            <Text style={styles.headingtxt}>Fill in your Data</Text>
          </View>

          <View style={styles.formCon}>
            <Text style={styles.txt}>Personal Data</Text>
            <Text style={styles.txtdata}>
              Complete your personal data to make your resume even better{' '}
            </Text>
            <View style={styles.profilecontainer}>
              <View style={styles.profil}>
                {profileImage ? (
                  <Image
                    style={{width: '100%', height: '100%', borderRadius: 100}}
                    source={profileImage}
                    resizeMode="cover"
                  />
                ) : (
                  <Image
                    style={{width: '100%', height: '100%', borderRadius: 100}}
                    source={Images.Profileplace}
                    resizeMode="cover"
                  />
                )}
              </View>
              <TouchableOpacity
                style={styles.editprofilebutton}
                onPress={handleChoosePhoto}>
                <FontAwesome5 name="edit" color="#fff" />
              </TouchableOpacity>
            </View>
            <View style={styles.inp}>
              <TextInput
                placeholder="Full Name"
                placeholderTextColor={'#8B8B8B'}
                value={formData.name}
                onChangeText={value => handleInputChange('name', value)}
                style={{color: '#000', paddingHorizontal: width * 0.03}}
              />
            </View>

            <View style={styles.inp}>
              <TextInput
                placeholder="Emailexample@gmail.com"
                placeholderTextColor={'#8B8B8B'}
                value={formData.email}
                onChangeText={value => handleInputChange('email', value)}
                style={{color: '#000', paddingHorizontal: width * 0.03}}
              />
            </View>

            <View style={styles.inp}>
              <TextInput
                placeholder="Location"
                placeholderTextColor={'#8B8B8B'}
                value={formData.location}
                onChangeText={value => handleInputChange('location', value)}
                style={{color: '#000', paddingHorizontal: width * 0.03}}
              />
            </View>

            <View style={styles.dateofbirthcon}>
              <View style={styles.date}>
                <TextInput
                  placeholder="Date"
                  placeholderTextColor={'#8B8B8B'}
                  value={formData.personalInfo.dateOfBirth.date}
                  onChangeText={value => updateDateOfBirth('date', value)}
                  style={{color: '#000'}}
                />
              </View>

              <View style={styles.month}>
                <TextInput
                  placeholder="Month"
                  placeholderTextColor={'#8B8B8B'}
                  value={formData.personalInfo.dateOfBirth.month}
                  onChangeText={value => updateDateOfBirth('month', value)}
                  style={{color: '#000'}}
                />
              </View>

              <View style={styles.year}>
                <TextInput
                  placeholder="Year"
                  placeholderTextColor={'#8B8B8B'}
                  value={formData.personalInfo.dateOfBirth.year}
                  onChangeText={value => updateDateOfBirth('year', value)}
                  style={{color: '#000'}}
                />
              </View>
            </View>

            <View style={styles.sumary}>
              <View style={styles.section}>
                <TouchableOpacity
                  style={styles.sectionHeader}
                  onPress={toggleSummaryVisibility}>
                  <Text style={styles.sectionTitle}>Summary</Text>
                  <Icon
                    name={
                      isSummaryVisible
                        ? 'keyboard-arrow-up'
                        : 'keyboard-arrow-down'
                    }
                    size={24}
                    color="#fff"
                  />
                </TouchableOpacity>
                {isSummaryVisible &&
                  formData.summaries?.map((summary, index) => {
                    console.log('summary======>>', summary);
                    return (
                      <DynamicField
                        key={summary.id}
                        placeholder={`Add Summary`}
                        value={summary.value}
                        onChange={text =>
                          upadteSummariesState(summary.id, text)
                        }
                        onRemove={() => removeField('summaries', summary.id)}
                      />
                    );
                  })}
                {isSummaryVisible && (
                  <TouchableOpacity
                    onPress={() => addField('summaries')}
                    style={{alignSelf: 'flex-end'}}>
                    <Icon name="add" size={24} color="#fff" />
                  </TouchableOpacity>
                )}
              </View>
            </View>

            <View style={styles.sumary}>
              {/* Experience Section */}
              <View style={styles.section}>
                <TouchableOpacity
                  style={styles.sectionHeader}
                  onPress={toggleExperienceVisibility}>
                  <Text style={styles.sectionTitle}>Experience</Text>
                  <Icon
                    name={
                      isExperienceVisible
                        ? 'keyboard-arrow-up'
                        : 'keyboard-arrow-down'
                    }
                    size={24}
                    color="#fff"
                  />
                </TouchableOpacity>
                {isExperienceVisible &&
                  formData.experiences?.map((experience, index) => (
                    <DynamicField
                      key={experience.id}
                      placeholder={`Add Experience`}
                      value={experience.value}
                      onChange={text =>
                        upadteExperincesState(experience.id, text)
                      }
                      onRemove={() => removeField('experiences', experience.id)}
                    />
                  ))}
                {isExperienceVisible && (
                  <TouchableOpacity
                    onPress={() => addField('experiences')}
                    style={{alignSelf: 'flex-end'}}>
                    <Icon name="add" size={24} color="#fff" />
                  </TouchableOpacity>
                )}
              </View>
            </View>

            <View style={styles.sumary}>
              <View style={styles.section}>
                <TouchableOpacity
                  style={styles.sectionHeader}
                  onPress={toggleEducationVisibility}>
                  <Text style={styles.sectionTitle}>Education</Text>
                  <Icon
                    name={
                      isEducationVisible
                        ? 'keyboard-arrow-up'
                        : 'keyboard-arrow-down'
                    }
                    size={24}
                    color="#fff"
                  />
                </TouchableOpacity>
                {isEducationVisible &&
                  formData.educations?.map((education, index) => (
                    <DynamicField
                      key={education.id}
                      placeholder={`Add Education`}
                      value={education.value}
                      onChange={text =>
                        upadteEducationsState(education.id, text)
                      }
                      onRemove={() => removeField('educations', education.id)}
                    />
                  ))}
                {isEducationVisible && (
                  <TouchableOpacity
                    onPress={() => addField('educations')}
                    style={{alignSelf: 'flex-end'}}>
                    <Icon name="add" size={24} color="#fff" />
                  </TouchableOpacity>
                )}
              </View>
            </View>

            <View style={styles.sumary}>
              <View style={styles.section}>
                <TouchableOpacity
                  style={styles.sectionHeader}
                  onPress={() => setSkillsVisible(!isSkillsVisible)}>
                  <Text style={styles.sectionTitle}>Skills</Text>
                  <Icon
                    name={
                      isSkillsVisible
                        ? 'keyboard-arrow-up'
                        : 'keyboard-arrow-down'
                    }
                    size={24}
                    color="#fff"
                  />
                </TouchableOpacity>
                {isSkillsVisible &&
                  formData.skills?.map((skill, index) => (
                    <DynamicField
                      key={skill.id}
                      placeholder={`Add Skill`}
                      placeholderTextColor={'#fff'}
                      value={skill.name}
                      onChange={text => upadteSkillsState(skill.id, text)}
                      onRemove={() => removeField('skills', skill.id)}
                    />
                  ))}
                {isSkillsVisible && (
                  <TouchableOpacity
                    onPress={() => addField('skills')}
                    style={{alignSelf: 'flex-end'}}>
                    <Icon name="add" size={24} color="#fff" />
                  </TouchableOpacity>
                )}
              </View>
            </View>

            <View style={styles.sumary}>
              {/* Contact Section */}
              <View style={styles.section}>
                <TouchableOpacity
                  style={styles.sectionHeader}
                  onPress={toggleContactVisibility}>
                  <Text style={styles.sectionTitle}>Contact</Text>
                  <Icon
                    name={
                      isContactVisible
                        ? 'keyboard-arrow-up'
                        : 'keyboard-arrow-down'
                    }
                    size={24}
                    color="#fff"
                  />
                </TouchableOpacity>
                {isContactVisible && (
                  <>
                    <TextInput
                      placeholder="Phone"
                      placeholderTextColor={'#fff'}
                      value={formData.contact.phone}
                      onChangeText={text =>
                        setFormData(currentFormData => ({
                          ...currentFormData,
                          contact: {
                            ...currentFormData.contact,
                            phone: text,
                          },
                        }))
                      }
                      style={styles.expInput}
                    />
                    <TextInput
                      placeholder="Website Link"
                      placeholderTextColor={'#fff'}
                      value={formData.contact.website}
                      onChangeText={text =>
                        setFormData(currentFormData => ({
                          ...currentFormData,
                          contact: {
                            ...currentFormData.contact,
                            website: text,
                          },
                        }))
                      }
                      style={styles.expInput}
                    />
                  </>
                )}
              </View>
            </View>

            <View style={styles.sumary}>
              {/* About Section */}
              <View style={styles.section}>
                <TouchableOpacity
                  style={styles.sectionHeader}
                  onPress={toggleAboutVisibility}>
                  <Text style={styles.sectionTitle}>About</Text>
                  <Icon
                    name={
                      isAboutVisible
                        ? 'keyboard-arrow-up'
                        : 'keyboard-arrow-down'
                    }
                    size={24}
                    color="#fff"
                  />
                </TouchableOpacity>
                {isAboutVisible && (
                  <TextInput
                    placeholder="About Me"
                    placeholderTextColor={'#fff'}
                    value={formData.about}
                    onChangeText={val =>
                      setFormData(currentFormData => ({
                        ...currentFormData,
                        about: val,
                      }))
                    }
                    multiline
                    style={styles.expInput}
                  />
                )}
              </View>
            </View>

            <CustomeButton
              title={'Preview'}
              nonbg={true}
              onPress={generateCV}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between', // To create space between top and bottom items
  },
  bgImage: {
    width: width * 0.9,
    height: height * 0.257,
    // overflow:"hidden",
    alignSelf: 'center',
    top: 20,
    borderRadius: 20,
    // backgroundColor:"red"
  },
  line: {
    width: width,
    height: height * 0.001,
    backgroundColor: '#0BECD8',
    position: 'absolute',
    top: height * 0.123,
    opacity: 0.2,
  },
  jobsrch: {
    fontSize: calculateFontSize(29),
    color: '#ffff',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
  heading: {
    alignItems: 'center',
  },
  headingtxt: {
    fontSize: calculateFontSize(18),
    color: '#fff',
    fontWeight: '700',
  },
  formCon: {
    paddingHorizontal: width * 0.03,
    marginVertical: height * 0.02,
  },
  inp: {
    backgroundColor: '#fff',
    marginVertical: height * 0.02,
    paddingVertical: height * 0.001,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        paddingHorizontal: width * 0.03,
        backgroundColor: '#fff',
        marginVertical: height * 0.02,
        paddingVertical: height * 0.02,
        borderRadius: 10,
      },
    }),
  },
  dateofbirthcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...Platform.select({
      ios: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.02,
      },
    }),
  },
  date: {
    paddingHorizontal: width * 0.07,
    height: height * 0.06,
    backgroundColor: '#fff',
    borderRadius: 10,
    ...Platform.select({
      ios: {
        paddingHorizontal: width * 0.07,
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.06,
        backgroundColor: '#fff',
        borderRadius: 10,
      },
    }),
  },
  month: {
    paddingHorizontal: width * 0.07,
    height: height * 0.06,
    backgroundColor: '#fff',
    borderRadius: 10,
    ...Platform.select({
      ios: {
        paddingHorizontal: width * 0.07,
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.06,
        backgroundColor: '#fff',
        borderRadius: 10,
      },
    }),
  },
  year: {
    paddingHorizontal: width * 0.07,
    height: height * 0.06,
    backgroundColor: '#fff',
    borderRadius: 10,
    ...Platform.select({
      ios: {
        paddingHorizontal: width * 0.07,
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.06,
        backgroundColor: '#fff',
        borderRadius: 10,
      },
    }),
  },
  sumary: {
    width: width * 0.95,
    alignSelf: 'center',
    marginVertical: height * 0.03,
    borderTopWidth: 1,
    borderTopColor: '#0DFFE8',
  },
  summaryInput: {
    backgroundColor: '#1B5953',
    paddingHorizontal: width * 0.04,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        backgroundColor: '#1B5953',
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.03,
        borderRadius: 10,
      },
    }),
  },
  expInput: {
    backgroundColor: '#1B5953',
    paddingHorizontal: width * 0.04,
    borderRadius: 10,
    color: '#fff',
    ...Platform.select({
      ios: {
        backgroundColor: '#1B5953',
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.03,
        borderRadius: 10,
        color: '#fff',
      },
    }),
  },
  txt: {
    color: '#fff',
    fontSize: calculateFontSize(18),
    fontWeight: '700',
    marginVertical: height * 0.01,
  },
  txtdata: {
    color: '#fff',
    fontSize: calculateFontSize(14),
    fontWeight: '600',
  },
  profile: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height * 0.03,
    backgroundColor: '#fff',
  },
  profil: {
    width: width * 0.26,
    height: height * 0.12,
    borderRadius: 100,
  },
  profilecontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height * 0.01,
  },
  registraiontalentform: {
    // flex: 1,
    alignItems: 'center',
  },

  editprofilebutton: {
    width: width * 0.05,
    height: height * 0.03,
    backgroundColor: '#2BADA1',
    // overflow:"hidden",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    bottom: height * 0.03,
    left: width * 0.08,
  },
  profileImage: {
    width: width * 0.35,
    height: height * 0.16,
    borderRadius: 100,
  },
  section: {
    marginBottom: height * 0.01,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height * 0.01,
  },
  sectionTitle: {
    fontSize: calculateFontSize(18),
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: height * 0.02,
  },
  summaryInput: {
    backgroundColor: '#1B5953',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    color: '#fff',
    marginBottom: 10,
  },
  addIconContainer: {
    alignItems: 'flex-end',
  },
});

export default Genrateresumeform;
