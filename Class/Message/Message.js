import React, { Component } from 'react';
import BaseComponent from '../BaseComponent'
import {
  View, StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  Image,
  WebView,
  Platform

} from 'react-native';
export default class Message extends BaseComponent {
   
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
      backgroundColor: 'blue',
    },
})