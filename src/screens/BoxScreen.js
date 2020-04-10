import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>BoxScreen</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black'
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
        margin: 20,

    }
});

export default BoxScreen