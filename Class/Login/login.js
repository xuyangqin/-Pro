import React, { Component } from 'react';
import BaseComponent from '../BaseComponent'
import navigationUtil from '../navigation'
import {
  View, StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
  WebView,
  Platform,
  TextInput

} from 'react-native';
var SCREEN_WIDTH = Dimensions.get('window').width;
var SCREEN_HEIGHT = Dimensions.get('window').height;

export default class login extends BaseComponent {
   
  render() {
      return(
          <View style={styles.container}>
            {this.renderHeaderView()}
            <Image style={{marginTop:30,alignSelf:'center',height:78,width:78}}
                  source={require('../Images/Login切图/logo.png')}
            />
            <Text style={{marginTop:30,alignSelf:'center',color:'#01aef0',fontSize:25}}>登录</Text>
            <View style={{marginTop:30,
                borderBottomColor: '#DCDCDC', borderBottomWidth: 0.5, height: 44,borderTopColor:'#DCDCDC',borderTopWidth:0.5
                , flexDirection: 'row', alignItems: 'center'
            }}
            >
                <Image
                  source={require('../Images/Login切图/手机号.png')}
                  style={{marginLeft:30,height: 21, width: 15 }}
                />
                <TextInput
                  underlineColorAndroid='transparent'
                  placeholder='请输入手机号'
                  style={{ marginLeft: 10, width: 300 }}
                  keyboardType='numeric'
                  maxLength={11}
                  // onChangeText={value => this.setState({ phone: value })}
                />
            </View>
            <View style={{
                borderBottomColor: '#DCDCDC', borderBottomWidth: 0.5, height: 44
                , flexDirection: 'row', alignItems: 'center'
            }}
            >
                <Image
                  source={require('../Images/Login切图/密码.png')}
                  style={{marginLeft:30,height:21, width: 15}}
                />
                <TextInput
                  underlineColorAndroid='transparent'
                  placeholder='请输入登录密码'
                  style={{marginLeft: 10, marginLeft: 10, width: 210 }}
                  // onChangeText={value => this.setState({ password: value })}
                  secureTextEntry={true}
                />
                 <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', width: 100, height: 44
                    }}
                    onPress={this.login.bind(this)}
                  >
                      <Text style={{ color: '#01aef0', fontSize: 14}}>登录密码忘了？</Text>
                  </TouchableOpacity>
            </View>
            <TouchableOpacity style={{marginTop:30,alignSelf:'center',justifyContent: 'center', alignItems: 'center', width: SCREEN_WIDTH - 20,
              backgroundColor: 'gray', height: 40,borderRadius:5
            }}
              onPress={this.login.bind(this)}
            >
                 <Text style={{ color: 'white', fontSize: 20, }}>登录</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:50,alignSelf:'center',justifyContent: 'center', alignItems: 'center', width: 120, height: 30,borderRadius:5,borderColor:'#01aef0',borderWidth:1
            }}
              onPress={this.login.bind(this)}
            >
                 <Text style={{ color: '#01aef0', fontSize: 16}}>账户激活</Text>
            </TouchableOpacity>
            <Text style={{marginLeft:50,marginTop:50,fontSize:16}}>公司未开通账户？</Text>
            <TouchableOpacity style={{marginLeft:SCREEN_WIDTH - 150,marginTop:50,justifyContent: 'center', alignItems: 'center', width: 120, height: 30,borderRadius:5
            }}
              onPress={this.login.bind(this)}
            >
                 <Text style={{ color: '#01aef0', fontSize: 16}}>点此申请体验></Text>
            </TouchableOpacity>
          </View>
      )
  }
  //点击登录
  login(){
    navigationUtil.reset(this.props.navigation, 'Main');
  }
  renderHeaderView() {
    return <View style={{
      backgroundColor: '#01aef0', flexDirection: 'column-reverse', height: 88, alignItems: 'center',
      paddingBottom: 8
    }}>
      <Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>登录</Text>
    </View>
  }
}
var styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white'
    },
    imgStyle: {
      width: 80,
      height: 80,
      marginTop: 100,
    },
})