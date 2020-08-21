import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import { UIButton } from './../../components/'

import { spotifyAuth } from './../../services'

export default function Login({ navigation }) {
  const handleBtnLogin = async () => {
    //() => navigation.navigate('Alarmify')
    spotifyAuth()
    //console.log(await Linking.canOpenURL('alarmify'))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Alarmify!</Text>
      <Text style={styles.instructions}>You must signin on Spotify before starting using the app</Text>
      <UIButton onPress={handleBtnLogin}>Login</UIButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontWeight: '700'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
  },
});