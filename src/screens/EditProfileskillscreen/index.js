import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, TextInput, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
const { width, height } = Dimensions.get("window");
import { calculateFontSize } from '../../config/font';
import { CustomeButton, CustomeforgetHeader } from '../../Components';
import Images from '../../config/im';
const initialJobs = [
    'Software Engineer',
    'Power BI Developer',
    'Java Developer',
    'Mobile Application Developer',
    'Custom Developer',
    'UI UX Designer',
    'Software Engineer',
    'Power BI Developer',
    'Java Developer',
    'Mobile Application Developer',
    'Custom Developer',
    'UI UX Designer',

];

function Editprofileskillscreen() {

    
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);

    const handleSearch = (text) => {
        setSearchText(text);
        const filteredJobs = initialJobs.filter(job => job.toLowerCase().includes(text.toLowerCase()));
        setSearchResults(filteredJobs);
    };

    const handleJobSelect = (job) => {
        setSelectedJob(job);
    };

    const handleRemoveSelectedJob = () => {
        setSelectedJob(null);
    };

    const renderJobItem = ({ item }) => {
        const isInitialJob = initialJobs.includes(item);
        const backgroundColor = isInitialJob ? '#0E746B' : '#1C75BC';

        return (
            <TouchableOpacity
                style={{
                    ...styles.searchResultItem,
                    backgroundColor,
                }}
                onPress={() => handleJobSelect(item)}
            >
                <Text style={{ color: "#fff", fontWeight: "600", paddingHorizontal: width * 0.007, fontSize: calculateFontSize(10) }}>{item}</Text>
                {selectedJob === item && (
                    <TouchableOpacity
                        style={styles.removeButton}
                        onPress={handleRemoveSelectedJob}
                    >
                        <Text style={styles.removeButtonText}>X</Text>
                    </TouchableOpacity>
                )}
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.mainCon}>

            <View>
                <CustomeforgetHeader
                    onPress={() => navigation.goBack()}
                    company={true}
                    source={Images.arrow}

                />

                <View style={styles.heading}>

                    <Text style={styles.txt}>
                        Add Skills to your profile
                    </Text>
                    <Text style={styles.slogan}>
                        Choose your Skills to add to your profile (any 9 )
                    </Text>
                </View>

                <TextInput
                    style={styles.searchBar}
                    placeholder="Search Specific Skill"
                    value={searchText}
                    onChangeText={handleSearch}
                    placeholderTextColor={"#fff"}

                />
                <View style={styles.pltfom}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={searchResults}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderJobItem}
                        numColumns={2}
                    />

                </View>

                <View style={styles.btncon}>
                    
                    <CustomeButton title={"Search"} nonbg={true}/>
                    
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainCon: {
        flex: 1,
        paddingHorizontal: width * 0.04,
        backgroundColor: 'rgba(0, 154, 140,0.9)',
    },

    searchBar: {

        borderWidth: 1,
        borderColor: "white",
        borderRadius: 10,
        marginVertical: height * 0.01,
        paddingHorizontal: width * 0.03,
        color:"white"
    },

    txt: {
        fontSize: calculateFontSize(34),
        color: "white",
        fontWeight: "600",
    },
    slogan: {
         fontSize:calculateFontSize(12),
        color: "white"
    },
    selectedJobView: {
        padding: height * 0.02,
        marginTop: height * 0.02,
        backgroundColor: '#C3E5FF',
        borderRadius: 10,
        color: "#1C75BC"
    },
    selectedJobText: {
        fontSize: calculateFontSize(25),
        fontWeight: 'bold',
        color: "black"
    },
    searchResultItem: {
        padding: height * 0.01,
        marginBottom: height * 0.008,
        marginRight: width * 0.02,
        backgroundColor: "#C3E5FF",
        borderRadius: 10,
        width: width * 0.43,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    removeButton: {
        width: width * 0.056,
        height: height * 0.026,
        backgroundColor: '#2BADA1',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    removeButtonText: {
        color: '#C3E5FF',
        fontWeight: "500",
        fontSize: calculateFontSize(10)
    },
    btncon: {

        paddingHorizontal: width * 0.04
    },
    pltfom: {
        height: height * 0.542,
    }



});

export default Editprofileskillscreen