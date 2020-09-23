import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const ButtonCal = (props) => {
    return(
        <TouchableOpacity style={{...styles.buttonTouch, ...props.style}} onPress={props.onPress}>
            <Text style={styles.textButton}>{props.value}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    textButton: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#e6e6e6',
    },
    buttonTouch:{
        flex: 1,
        borderWidth: 1,
        borderColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default ButtonCal;