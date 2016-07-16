// create a react component
import React from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';
import moment from 'moment';

import DayItem from './src/day-item';

// StyleSheet of the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // moves stuff on y-axis
    alignItems: 'center', // moves stuff on x-axis
  },
  heading: {
    fontSize: 40,
    color: '#640487',
  },
});

class Weekdays extends React.Component {
  days() {
    const dayItems = [];

    for (let i = 0; i < 7; i ++) {
      let day = moment().add(i, 'days').format('dddd');
      dayItems.push(
        <DayItem day={day} key={i} daysUntil={i} />
      );
    }
    return dayItems;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.days()}
      </View>
    );
  }
}

// show the react component on the screen
AppRegistry.registerComponent('weekdays', () => Weekdays);
