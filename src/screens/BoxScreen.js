import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const BoxScreen = () => {
    return <View>
        <Text>Parent: alignItems, justifyContent, flexDirection</Text>
        <Text>Child: flex, alignSelf</Text>
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child # 1</Text>
            <Text style={styles.textStyle}>Child # 2</Text>
            <Text style={styles.textStyle}>Child # 3</Text>
        </View>
        <View style={styles.viewStyleColumn}>
            <Text style={styles.textOneStyle}>Child # 4</Text>
            <Text style={styles.textTwoStyle}>Child # 5</Text>
            <Text style={styles.textStyle}>Child # 6</Text>
        </View>
        <View style={styles.viewStyleColumn}>
            <Text style={styles.textStyle}>Child # 7</Text>
            <Text style={styles.textStyle}>Child # 8</Text>
            <Text style={styles.textThreeStyle}>Child # 9</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'center',
        flexDirection: 'row',
        height: 200,
    },
    viewStyleColumn: {
        borderWidth: 3,
        borderColor: 'blue',
        justifyContent: 'center',
        height: 200,
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
        margin: 20,

    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 1
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        alignSelf: 'flex-end'
    },
    textThreeStyle: {
        borderWidth: 5,
        borderColor: 'green',
        alignSelf: 'flex-end',
        fontSize: 18,
        ...StyleSheet.absoluteFillObject
    }
});

export default BoxScreen