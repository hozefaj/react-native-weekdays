// create a react component
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Weekdays extends Component {
  render() {
    return (
      <View>
        <Text>Days of the Week</Text>
      </View>
    )
  }
}

// show the react component on the screen
AppRegistry.registerComponent('weekdays', () => Weekdays);
