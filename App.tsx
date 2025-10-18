import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View, Button } from 'react-native';
import ImageComponent from './components/Image';
import TextInputComponent from './components/TextInputComponent';

import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useNavigation } from '@react-navigation/native';

// Screens
function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
      />
    </View>
  );
}

function ProfileScreen({ route }) {
  return (
    <View style={styles.container}>
      <Text>This is {route.params.name}'s profile</Text>
    </View>
  );
}

// Create Native Stack Navigator config with static API
const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: { title: 'Welcome' },
    },
    Profile: {
      screen: ProfileScreen,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export class App extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#4CAF50" barStyle="dark-content" />
        <Navigation />
        <ImageComponent />
        <TextInputComponent />
      </>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    color: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
