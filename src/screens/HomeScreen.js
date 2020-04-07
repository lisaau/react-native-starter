import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return <View>
    <Text style={styles.text}>Home Screen</Text>
    {/* Button is a self closing tag, pass text in Button as a prop, can use quotes (rare exception). less functionality than TouchableOpacity */}
    <Button 
      onPress={() => navigation.navigate('Components')}
      title="Go to Components Demo" 
    />
    <Button 
      onPress={() => navigation.navigate('List')}
      title="Go to List Demo" 
    />
    <Button 
      onPress={() => navigation.navigate('Image')}
      title="Go to Image Demo" 
    />
    {/* <TouchableOpacity onPress={() => navigation.navigate('List')}>
      <Text>Go to List Demo</Text>
    </TouchableOpacity> */}
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
