import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About Meme Generator</Text>
      <Text style={styles.description}>
        Meme Generator is a fun and simple app that allows you to generate random memes using the Imgflip API. With just a tap of a button, you can generate a hilarious meme that will surely make you laugh or share with your friends and family.
      </Text>
      <Text style={styles.description}>
        The app fetches meme data from the Imgflip API and displays the meme image along with its name. You can generate a new meme by simply tapping the "Generate Meme" button, which fetches a new meme from the API and displays it on the screen.
      </Text>
      <Text style={styles.description}>
        Meme Generator app is built using React Native, and it uses the Axios library to make HTTP requests to the Imgflip API. The app features a simple and clean user interface with a navbar, content section, and footer, providing a seamless user experience.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default About;
