/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import {
  AsyncStorage
} from 'react-native'

import configAppNavigator from './Class/AppNavigator';

// import { storage } from './Tools/storage'

// import *as wechat from 'react-native-wechat'

// import SplashScreen from 'react-native-splash-screen'
// import {Theme} from 'teaset';

// import request, { setAccessToken } from './Tools/request'

export default class App extends Component {

  state = {
    checkedLogin: false,
    isLogined: false,
    isFirst: false
  };

  componentDidMount() {

    // Theme.set({fitIPhoneX: true});
    // SplashScreen.hide()

    // wechat.registerApp('wxcbc9dd8904258e0d')

    // AsyncStorage.getItem('isFirst', (error, result) => {

    //   if (result == 'false') {

    //     //不是第一次  判断有token存不存在
    //     storage.load({ key: 'accessUserData' }).then(result => {

         
    //       if (result.token) {
    //         setAccessToken(result.token);
    //         this.setState({
    //           checkedLogin: true,
    //           isLogined: true,
    //           isFirst: true,
    //         })
    //       } else {
    //         this.setState({
    //           checkedLogin: false,
    //           isLogined: true,
    //           isFirst: true,

    //         })
    //       }
    //     }).catch(err => {
    //       //accessUserData key不存在就报错走异常方法
    //       this.setState({
    //         checkedLogin: false,
    //         isLogined: true,
    //         isFirst: true,
    //       })
    //     })

    //   } else {
    //     //是第一次启动，引导页展示
    //     // 存储
    //     AsyncStorage.setItem('isFirst', 'false', (error) => {
    //       if (error) {
    //         alert(error);
    //       }
    //     });

    //     this.setState({
    //       checkedLogin: 2,
    //       isLogined: true,
    //       isFirst: true,
    //     })
    //   }
    // })

  }

  render() {

    // const { checkedLogin, isLogined, isFirst } = this.state;

    // //防止界面闪烁 因为加载token是异步的
    // if (!isLogined || !isFirst) {
    //   return null;
    // }
    const AppNavigator = configAppNavigator(0);
    return (
      <AppNavigator />
    );
  }
}
