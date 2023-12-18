import React from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import { calculateFontSize } from '../../config/font';
const { width, height } = Dimensions.get('window');
const CenteredTextWithLines = ({ text, lineColor, textColor }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.line, { backgroundColor: lineColor }]} />
            <Text style={[styles.text, { color: textColor }]}>{text}</Text>
            <View style={[styles.line, { backgroundColor: lineColor }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'whit', // Default line color
    },
    text: {
        fontSize: calculateFontSize(17),
        color: '#fff',
        fontFamily: 'Poppins',
        textTransform: 'capitalize', // Adjust as needed
    },
});

export default CenteredTextWithLines;