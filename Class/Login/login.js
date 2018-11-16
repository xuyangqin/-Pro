import React, { Component } from 'react';
import BaseComponent from '../BaseComponent'
import navigationUtil from '../Other/navigation'
import {getDeployUrl,requestsUrl} from '../Other/Request'
import Toast from 'react-native-root-toast';
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
  constructor(props) {
    super(props)
    this.state = {
      phone:'',
      pws:'',
      loginBtnStatue:false
    }
  }
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
                  onChangeText={(value) =>{
                    if(value > 0 && this.state.pws.length > 0){
                      this.setState({
                        loginBtnStatue:true,
                        phone:value
                      })
                    }else{
                      this.setState({
                        loginBtnStatue:false,
                        phone:value
                      })
                    }  
                  }}
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
                  onChangeText={value => {
                    if(value > 0 && this.state.phone.length > 0){
                      this.setState({
                        loginBtnStatue:true,
                        pws:value
                      })
                    }else{
                      this.setState({
                        loginBtnStatue:false,
                        pws:value
                      })
                    }  
                  }}
                  secureTextEntry={true}
                />
                 <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', width: 100, height: 44
                    }}
                    onPress={this.ForgetPass.bind(this)}
                  >
                      <Text style={{ color: '#01aef0', fontSize: 14}}>登录密码忘了？</Text>
                  </TouchableOpacity>
            </View>
            <TouchableOpacity style={{marginTop:30,alignSelf:'center',justifyContent: 'center', alignItems: 'center', width: SCREEN_WIDTH - 20,
              backgroundColor: this.state.loginBtnStatue ? '#01aef0' : 'gray', height: 40,borderRadius:5
            }}
              onPress={this.login.bind(this)}
            >
                 <Text style={{ color: 'white', fontSize: 20, }}>登录</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:50,alignSelf:'center',justifyContent: 'center', alignItems: 'center', width: 120, height: 30,borderRadius:5,borderColor:'#01aef0',borderWidth:1
            }}
              onPress={this.AccountActivation.bind(this)}
            >
                 <Text style={{ color: '#01aef0', fontSize: 16}}>账户激活</Text>
            </TouchableOpacity>
            <Text style={{marginLeft:50,marginTop:50,fontSize:16}}>公司未开通账户？</Text>
            <TouchableOpacity style={{marginLeft:SCREEN_WIDTH - 150,marginTop:50,justifyContent: 'center', alignItems: 'center', width: 120, height: 30,borderRadius:5
            }}
              onPress={this.ApplicationExperience.bind(this)}
            >
                 <Text style={{ color: '#01aef0', fontSize: 16}}>点此申请体验></Text>
            </TouchableOpacity>
          </View>
      )
  }
  //点击登录
  login(){
    const { phone, pws} = this.state;
     
    if (phone.length == 0) {
      alert('请输入手机号')
      return null;
    }
    if (pws.length == 0) {
      alert('请输入登录密码')
      return null;
    }

    var url = 'AppService/AppGetDeployUrl.aspx';
    getDeployUrl({
      method: 'GET',
      url: url,
      mobile_phone:phone,
      pws:pws
    })
      .then((responseJson) => {
        if(responseJson.server_status == 'true'){
              var url2 = 'api/Account/LoginAccount';
              var param1 = {uid:phone,pws:pws,activeUid:'1D11CC76-BDB0-4304-918C-3338219A2466',Language:'zh-CN'};
              var param2 = {};
              requestsUrl({
                method: 'POST',
                url: url2,
                data:{Head:param1,Content:param2}
              })
                .then((responseJson) => {
                  if(responseJson.Head.Ret == '0'){
                     navigationUtil.reset(this.props.navigation, 'Main');
                  }{
                    if(responseJson.Head.Msg != null){
                      resolve(responseJson.Head.Msg);
                    }else{
                       alert('网络错误')
                    }
                  }
              })
              .catch(err => {
                return null
              });
        }
    })
    .catch(err => {
      // alert（'错误提示：' + err);
      return null
    });
  }
  //忘记密码
  ForgetPass(){
    this.props.navigation.navigate('ForGetPass');
  }
  //账户激活
  AccountActivation(){


  }
  //申请体验
  ApplicationExperience(){

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