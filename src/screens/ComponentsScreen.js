import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = 'Hi there!';
    const array = [123, 'abc'];
    const jsxVariable = <Text>This is a JSX variable</Text>
    return (
    <View>
        <Text style={styles.header}>This is the components screen!</Text>
        <Text>Do not put JS objects inside JSX tags</Text>
        <Text>JS variable inside JSX: {greeting}</Text>
        <Text>This is an array for "const array = [123, 'abc']": {array}</Text>
        {jsxVariable}

        <Text style={styles.subHeader}>Notes:</Text>
        <Text>We can assemble different JSX elements like normal HTML</Text>
        <Text>Configure different JSX elements using 'props'</Text>
        <Text>refer to JS variable inside of a JSX block by using curly braces</Text>
        <Text>assign JSX elements to a variable, thens how that variable inside of a JSX block</Text>
        <Text>Open parentheses or opening tag must be in the same line as the return for multi-line</Text>

    </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 40
    },
    subHeader: {
        fontSize: 30
    }
});

export default ComponentsScreen;