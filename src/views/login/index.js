import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { UIButton } from './../../components/'

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Alarmify!</Text>
      <Text style={styles.instructions}>You must lorgin in Spotify before start using the app</Text>
      <UIButton onPress={() => navigation.navigate('Alarmify')}>Login</UIButton>
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