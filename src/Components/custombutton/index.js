import React from 'react'
import { View, Text, StyleSheet, Dimensions,TouchableOpacity, } from 'react-native'
const { width, height } = Dimensions.get("window");
const CustomeButton = ({ nonbg,title,onPress }) => {
    // nonbg=true
    return (
        <>
            <TouchableOpacity onPress={onPress} style={nonbg ? styles.button : styles.nonebutton}>
                <Text style={nonbg ? styles.colorbg : styles.noncolorbg}>{title}</Text>
            </TouchableOpacity>
        </>
    )
}

export default CustomeButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: "white",
        width: width * 0.9,
        height: height * 0.07,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderCurve: "circular",
        borderRadius: 30,  shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,

    },
    nonebutton: {
        width: width * 0.9,
        height: height * 0.07,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 30,
        borderWidth: 2,
        borderColor: "#fff",
        marginVertical:height*0.01,
    },
    colorbg: {
        color: "#2CA599",
        fontFamily: 'Poppins',
        fontWeight: "300"
    },
    noncolorbg: {
        color: "#ffff",
        fontFamily: 'Poppins',
        fontWeight: "300"
    }
})