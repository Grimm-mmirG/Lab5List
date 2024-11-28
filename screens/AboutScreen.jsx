import React from 'react';
import { Text, StyleSheet, View, Button, Linking } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({ navigation }) => {
  const handlePress = () => {
    alert("You've found the Easter egg!");
    const youtubeUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    Linking.openURL(youtubeUrl).catch(err => console.error("Error opening URL: ", err));
  };

  return (
    <MainLayout>
      <View style={styles.content}>
        <Text style={styles.text}>App Name: <Text style={styles.appName}>Ultimate To-Do List</Text></Text>
        <Text style={styles.text}>
          Created by: <Text style={styles.grimmText} onPress={handlePress}>Grimm-mmirG</Text>
        </Text>
        <Text style={styles.text}>Current Date: {new Date().toLocaleDateString()}</Text>
      </View>
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}
        color="#6A5ACD"
        style={styles.button}
      />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 18,
    color: '#333',
    marginVertical: 10,
    textAlign: 'center',
  },
  appName: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#2A2A2A',
  },
  grimmText: {
    fontWeight: 'bold',
    color: '#D71522',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
  button: {
    marginTop: 20,
  },
});

export default AboutScreen;
