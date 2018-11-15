import React, { Component } from 'react';
import {
  View, StyleSheet,
} from 'react-native';
export default class BaseComponent extends Component {
   
  render() {
      return(
          <View style={styles.container}>

          </View>
      )
  }
}
var styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8FAF9',
    },
})