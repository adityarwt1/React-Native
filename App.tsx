import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

export class App extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#4CAF50" barStyle="dark-content" />
        <View style={style.container}>
          <Text style={style.container}> changed</Text>
        </View>
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
