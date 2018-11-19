import React, { Component } from 'react';
import BaseComponent from '../BaseComponent'
import { storage} from '../Other/storage';
import {requestsBaseUrl} from '../Other/Request'
import {
  View, StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
  WebView,
  Platform,
  SectionList

} from 'react-native';
var SCREEN_WIDTH = Dimensions.get('window').width;
var SCREEN_HEIGHT = Dimensions.get('window').height;
var LegalUnitID;
export default class Home extends BaseComponent {

  componentWillMount() {

      this.request();
  }



  constructor(props) {
    super(props);
    this.state = {
      sections:[
        {data: ['手机','邮箱','企业','抬头'],key:0},
        {data: ['修改密码','第三方账号绑定','帮助中心','关于','吐个槽'],key:1},
        {data: ['修改密码','第三方账号绑定','帮助中心','关于','吐个槽'],key:3},
        {data: ['修改密码','第三方账号绑定','帮助中心','关于','吐个槽'],key:4},
        ],
    };
  }
  render() {
      return(
          <View style={styles.container}>
              {this.renderHeaderView()}
              <Image style={{alignSelf:'center',height:113,width:SCREEN_WIDTH}}
                  source={require('../Images/首页切图/banner1.png')}
            />
             <SectionList
              style={{backgroundColor:'white'}}
              renderItem={this._renderItem.bind(this)}
              keyExtractor={this._keyExtractor}
              sections={this.state.sections}
              contentContainerStyle={styles.listViewStyle}//设置cell的样式
              renderSectionHeader={this.renderSectionHeader}
              showsVerticalScrollIndicator={false}
            />  
          </View>
      )
  }
  _keyExtractor = (item, index) => {

    return ('id' + item + index)
  }
  _renderItem(info) {

      return (
        <View style={{marginTop:10,marginLeft:10,width:(SCREEN_WIDTH - 50)/4,height:(SCREEN_WIDTH - 50)/4,backgroundColor:'red'}}>
        </View>
      )
  }
  renderSectionHeader(info){
    if(info.section.key == '0'){
      return null;
    }else{
      return(
        <View style={{marginTop:10,height:70,width:SCREEN_WIDTH,backgroundColor:'red'}}>
            
        </View>  
      )
    }
  }
  Itemclick(rowID,sectionId){

  }
    //头部试图
    renderHeaderView() {
      return <View style={{
        backgroundColor: 'white', flexDirection: 'column-reverse', height: 88, alignItems: 'center',
        paddingBottom: 8
      }}>
        <Text style={{fontSize: 16, fontWeight: '500' }}>优读科技</Text>
      </View>
    }
   //获取数据
   request(){
    // storage.load({
    //   key: 'accessUserData'
    // }).then(result => {
        var url = 'api/appmenu/AppDownloadMenuList';
        requestsBaseUrl({
          method: 'POST',
          url: url,
          data:{LegalUnitID:'000007'}
        })
          .then((responseJson) => {
            if(responseJson.Head.Ret == '0'){
              his.setState({
                sections:responseJson.Content,
              })
            }{
              if(responseJson.Head.Msg != null){
                alert(responseJson.Head.Msg);
              }else{
                alert('网络错误')
              }
            }
        })
        .catch(err => {
          return null
        });
    // });
   }
}
var styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8FAF9',
    },
    listViewStyle:{        
      flexDirection:'row', //设置横向布局       
      flexWrap:'wrap'    //设置换行显示
    },  
})