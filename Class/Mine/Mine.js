import React, { Component } from 'react';
import BaseComponent from '../BaseComponent'
import navigationUtil from '../navigation'
import {
  View, 
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Text,
  Image,
  WebView,
  Platform

} from 'react-native';
var SCREEN_WIDTH = Dimensions.get('window').width;
var SCREEN_HEIGHT = Dimensions.get('window').height;
export default class Mine extends BaseComponent {
   
  render() {
      return(
          <View style={styles.container}>
            <TouchableOpacity style={{marginTop:100,alignSelf:'center',justifyContent: 'center', alignItems: 'center', width: SCREEN_WIDTH - 20,
              backgroundColor: 'red', height: 40,borderRadius:5
            }}
              onPress={this.loginOut.bind(this)}
            >
                 <Text style={{ color: 'white', fontSize: 20, }}>退出登录</Text>
            </TouchableOpacity>
          </View>
      )
  }
  loginOut(){
    navigationUtil.reset(this.props.navigation, 'Login');
  }
}
var styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(255,201,69,1)',
    },
})