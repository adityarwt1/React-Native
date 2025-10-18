import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import ImageComponent from './components/Image';
import TextInputComponet from './components/TextInputComponent';
export class App extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#4CAF50" barStyle="dark-content" />
        <ImageComponent />
        <TextInputComponet />
      </>
    );
  }
}

export default App;

export const style = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    color: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
