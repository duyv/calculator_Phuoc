import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Result = (props) => {
    return(
        <View style={styles.result}>
            <Text style={styles.TextResult}>{props.result}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    result: {
        flex: 2,
        backgroundColor: '#333333',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
      },
    TextResult: {
        fontSize: 70,
        color: 'white'
    }
});

export default Result;