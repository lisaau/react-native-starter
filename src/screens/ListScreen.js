import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 1 },
        { name: 'Friend #2', age: 2 },
        { name: 'Friend #3', age: 3 },
        { name: 'Friend #4', age: 4 },
        { name: 'Friend #5', age: 5 },
        { name: 'Friend #6', age: 6 },
        { name: 'Friend #7', age: 7 },
        { name: 'Friend #8', age: 8 },
        { name: 'Friend #9', age: 9 },
        { name: 'Friend #10', age: 10 }
    ]

    return (
        <FlatList 
            // use keyExtractor as much as we can for keys in lists
            keyExtractor={(friend) => friend.name}
            data={friends}
            // destructure item since item would normally be item === {item: {name: 'Friend #1'}, index: 0}. destructuring gives us item: {name: 'Friend #1'}
            renderItem={ ({item}) => {
                return (
                    <View>
                        <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
                    </View>
                );
            }}
        />
    )
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;