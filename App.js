import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import About from './Components/About';


const App = () => {
  const [meme, setMeme] = useState(null);

  // Fetch meme data from API on initial load
  useEffect(() => {
    fetchMeme();
  }, []);

  // Fetch meme data from API
  const fetchMeme = async () => {
    try {
      const response = await axios.get('https://api.imgflip.com/get_memes');
      const memes = response.data.data.memes;
      setMeme(memes[Math.floor(Math.random() * memes.length)]);
    } catch (error) {
      console.error('Failed to fetch meme', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        
        <Text style={styles.navbarTitle}>Meme Generator</Text>
        
      </View>
      <View style={styles.content}>
        {meme ? (
          <View style={styles.memeContainer}>
            <Image source={{ uri: meme.url }} style={styles.memeImage} />
            <Text style={styles.memeText}>{meme.name}</Text>
          </View>
        ) : (
          <Text style={styles.loadingText}>Loading meme...</Text>
        )}
        <Button title="Generate Meme" onPress={fetchMeme} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    height: 60,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  navbarTitle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
  },
  navbarButton: {
    paddingHorizontal: 16,
  },
  navbarButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  memeContainer: {
    marginBottom: 16,
  },
  memeImage: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
  memeText: {
    fontSize: 16,
    textAlign: 'center',
  },
  loadingText: {
    fontSize: 16,
    marginBottom: 16,
  },
  footer: {
    height: 60,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
  },
});

export default App;
