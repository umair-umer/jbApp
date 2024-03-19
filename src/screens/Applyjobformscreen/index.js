import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
const { width, height } = Dimensions.get('window');
import Images from '../../config/im';
import { CustomModal, CustomeButton } from '../../Components'
import axios from 'axios';
import { useSelector } from 'react-redux';
import Loader from '../../Components/Loader';
import { base } from '../../config/utilities';

function Applyjobscreen({ navigation, route }) {
    const { token } = useSelector((state) => state.auth);
    const { id } = route.params;
    console.log(id, "applyjobscreen");
    const [fullname, setfullname] = useState();
    const [portfolio, setportfolio] = useState();
    const [message, setmessage] = useState();
    const [isModalVisible, setModalVisible] = useState(false);
    const [uploadedDocument, setUploadedDocument] = useState('');
    const [attachedCertificate, setAttachedCertificate] = useState('');
    const [load, setload] = useState(false);
    // const toggleModal = () => {
    //     setModalVisible(false);
    // };
    // useEffect(() => {
    //     return () => {
    //         // Reset the state when the component is unmounted
    //         setModalVisible(false);
    //     };
    // }, []);


    const handleDocumentPick = async (field) => {
        try {
            const result = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });

            // Set the picked document to the appropriate state based on the field
            if (field === 'uploadDocument') {
                setUploadedDocument(result.uri); // You may want to use 'result.uri' to display or upload later
            } else if (field === 'attachCertificate') {
                setAttachedCertificate(result.uri); // You may want to use 'result.uri' to display or upload later
            }
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker
            } else {
                console.error('Error picking document: ', err);
            }
        }
    };
    const HandleApplyjob = async () => {
        setload(true)
        const formData = new FormData();
        // Replace these with the actual values from your form inputs
        formData.append('name', fullname);
        formData.append('portfolio', portfolio);
        formData.append('resume', 
          uploadedDocument
            // type: 'application/pdf',
            // name: 'resume.pdf'
        );
        formData.append('attachment', 
          attachedCertificate
            // type: 'application/pdf', 
            // name: 'certificate.pdf'
        );
        formData.append('details', message);

        try {
            const response = await axios.post(`${base}/talent/home/apply/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`, 
                },
            });
            console.log('Response:===>applyjob', response.data);
            setload(false)
            setModalVisible(true);
            handledone();
        } catch (error) {
            console.error('Error during API call:', error);
            setload(false)
        }
    };

    const handledone = () => {
        setload(true)
        navigation.navigate("home");
        setload(false)
    }

    return (
        <>
            {load ? <Loader /> :
                <>
                    <CustomModal passscreen={true} status={"Job application sent successfully"} statusTwo={"your job application has successfully uploaded Best of luck!"} isModalVisible={isModalVisible} onPress={handledone} />

                    <View style={styles.mainCon}>

                        <View style={styles.headingCon}>
                            <Text style={styles.headingText}>Apply for this job</Text>
                        </View>
                        <ScrollView>
                            <View style={styles.inputCon}>
                                <TextInput
                                    placeholder="Enter Full Name"
                                    placeholderTextColor="#fff"
                                    style={styles.input}
                                    onChangeText={(text) => setfullname(text)}
                                />

                                <TextInput
                                    placeholder="Enter Website or Portfolio Link"
                                    placeholderTextColor="#fff"
                                    style={styles.input}
                                    onChangeText={(text) => setportfolio(text)}
                                />

                                <View style={styles.uploadSection}>
                                    <TouchableOpacity style={styles.uploadButton} onPress={() => handleDocumentPick('uploadDocument')}>
                                        <Image source={Images.Iconupload} style={styles.iconImage} />
                                        <Text style={styles.uploadButtonText}>{uploadedDocument ? 'Document Selected' : 'Upload Document'}</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.uploadSection}>
                                    <TouchableOpacity style={styles.uploadButton} onPress={() => handleDocumentPick('attachCertificate')}>
                                        <Image source={Images.Documenticon} style={styles.iconImage} />
                                        <Text style={styles.uploadButtonText}>
                                            {attachedCertificate ? 'Certificate Selected' : 'Attach Any Certificate'}
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                <TextInput
                                    placeholder="Write a Message"
                                    placeholderTextColor="#fff"
                                    style={styles.input2}
                                    multiline={true}
                                    onChangeText={(text) => setmessage(text)}
                                />
                                <View>
                                    <CustomeButton title={"Submit Application"} nonbg={true} onPress={HandleApplyjob} />
                                    <CustomeButton title={"Generate CV"} />
                                </View>

                            </View>
                        </ScrollView>
                    </View>
                </>

            }

        </>
    )
}

const styles = StyleSheet.create({
    mainCon: {
        flex: 1,
        backgroundColor: "#2BADA1",
        justifyContent: 'center',
        paddingHorizontal: width * 0.05,

    },
    headingCon: {
        paddingVertical: height * 0.02,
        alignItems: 'center',
    },
    headingText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 18,
    },
    inputCon: {
        paddingVertical: height * 0.004,
    },
    input: {
        borderWidth: 1,
        borderColor: '#fff',
        color: '#fff',
        borderRadius: 5,
        paddingHorizontal: width * 0.03,
        marginVertical: height * 0.01,
        height: height * 0.06
    },
    input2: {
        borderWidth: 1,
        borderColor: '#fff',
        color: '#fff',
        borderRadius: 5,
        paddingHorizontal: width * 0.03,
        marginVertical: height * 0.010,
        height: height * 0.17
    },

    button: {
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: height * 0.018,
        alignItems: 'center',
        marginTop: height * 0.01,
        height: height * 0.06
    },
    buttonText: {
        color: '#2BADA1',
        fontSize: 14,
        fontWeight: 'bold',
    },
    button2: {
        // backgroundColor: '#fff',
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 30,
        padding: height * 0.018,
        alignItems: 'center',
        marginTop: height * 0.01,
        height: height * 0.06
    },
    buttonText2: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    uploadSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: '#fff',
        borderRadius: 5,
        padding: height * 0.06,
        marginTop: height * 0.019,
    },
    uploadButton: {
        flex: 1,
    },
    uploadButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: "center"

    },
    iconImage: {

        width: 24,
        height: 24,
        marginHorizontal: width * 0.3
    }




});

export default Applyjobscreen
