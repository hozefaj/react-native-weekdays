// import code needed
import React, { PropTypes } from 'react';
import { Text } from 'react-native';

function getFontSize(day) {
  return 60 - 6 * day;
}

function getOpacity(day) {
  return 2 / day;
}

function getStyle(props) {
  return {
    color: '#640487',
    fontSize: getFontSize(props.daysUntil),
    opacity: getOpacity(props.daysUntil),
  };
}

// create a react component
export default function DayItem(props) {
  return (
    <Text style={getStyle(props)}>
      {props.day}
    </Text>
  );
}

DayItem.propTypes = {
  day: PropTypes.string.isRequired,
};
