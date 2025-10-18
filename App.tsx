import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text> Adityaasdfasdfasef Rasdfsdfwatasdfsdf</Text>
      </View>
    );
  }
}

export default App;

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
