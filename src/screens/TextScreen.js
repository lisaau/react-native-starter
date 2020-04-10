import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

// notes for iOS: iOS automatically capitalizes and autocorrects, add additional properties in TextInput to handle this

const TextScreen = () => {
    const [name, setName] = useState('');
    return <View>
        <Text>Enter Name:</Text>
        <TextInput 
            style={styles.input} 
            autoCapitalize='none'
            autoCorrect={false}
            value={name}
            onChangeText={(newValue) => setName(newValue)} 
        />
        <Text>My name is {name}</Text>
    </View>
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen