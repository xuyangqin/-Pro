
import React from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Login from './Login/login'
import Message from './Message/Message'
import Home from './Home/Home'
import Address from './Address/Address'
import Mine from './Mine/Mine'

import ForGetPass from './Login/ForGetPass'

const Main = createBottomTabNavigator({
  //每一个页面的配置
  Message: {
    screen: Message,
  },
  Home: {
    screen: Home,
  },
  Address: {
    screen: Address,
  },
  Mine: {
    screen: Mine,
  }
}, {
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Message') {
          iconName = '消息';
        } else if (routeName === 'Home') {
          iconName = '工作';
        }else if (routeName === 'Address') {
            iconName = '通讯录';
          } else if (routeName === 'Mine') {
          iconName = '我的';
        }
        return <Text style={{ color: tintColor }}>{iconName}</Text>
      },
      tabBarOptions: {
        //设置TabNavigator的位置
        tabBarPosition: 'bottom',
        //是否在更改标签时显示动画
        animationEnabled: false,
        //是否允许在标签之间进行滑动
        swipeEnabled: false,
        //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        backBehavior: "none",
        //Android属性
        upperCaseLabel: false,//是否使标签大写，默认为true
        //共有属性
        showIcon: true,//是否显示图标，默认关闭
        showLabel: true,//是否显示label，默认开启
        activeTintColor: '#01aef0',//label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
        style: { //TabNavigator 的背景颜色
          backgroundColor: 'white',
          height: 55,
        },
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
          height: 0,
        },
      },
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        let selectName;
        if (routeName === 'Message') {
          iconName = '消息(首页新)';
          selectName = '消息(首页新)_1';
        } else if (routeName === 'Home') {
          iconName = '工作';
          selectName = '工作_1';
        } else if (routeName === 'Address') {
          iconName = '通讯录';
          selectName = '通讯录_1';
        } else if (routeName === 'Mine') {
          iconName = '我的(首页新)';
          selectName = '我的(首页新)_1';
        }
        {
          if (focused) {
            return(
               <Image
                  source={{ uri: selectName }}
                  style={{ height: 24, width: 24 }}
              />
            )
          } {
            return(
              <Image
                  source={{ uri:  iconName}}
                  style={{ height: 24, width: 24 }}
              />
            )
          }
        }

      },
    }),
  });

export default function configAppcrearNavigator(isLoggedIn) {
  return createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
        headerBackTitle: null
      }
    },
    Main: {
      screen: Main,
      navigationOptions: {
        header: null,
      }
    },
    ForGetPass: {
      screen: ForGetPass,
      navigationOptions: {
        headerTitle:'找回登录密码',
        headerBackTitle: null
      }
    },
  },
    {
    //   initialRouteName: isLoggedIn == 2 ? 'Guide' : isLoggedIn ? 'Main' : 'Main',
      initialRouteName: 'Main',
      navigationOptions: ({ navigation, screenProps }) => ({
        gesturesEnabled: false,
        headerStyle:{backgroundColor:'#01aef0'},
        headerTitleStyle:{color:'white'},
        // headerTitle: (() => {
        //   console.log('routeNamerouteName', navigation)
        //   var arr = navigation.state.routes;
        //   var index = navigation.state.index;
        //   var routeName = arr[index].routeName

        //   var titleName = routeName;
        //   if (routeName === 'Message') {
        //     titleName = '消息'
        //   } else if (routeName === 'Home') {
        //     titleName = '工作'
        //   } else if (routeName === 'Address') {
        //     titleName = '通讯录'
        //   } else if (routeName === 'Mine') {
        //     titleName = '我的'
        //   }
        //   return <Text>{titleName}</Text>
        // }),

        headerLeft: (() => {
          var routeName = navigation.state.routeName;

          if (routeName === 'Main') {
            return null;
          } else {
            return (
              <TouchableOpacity style={{
                position: 'absolute', left: 10, bottom: 0,
                width: 44, height: 44, flexDirection: 'column-reverse', paddingBottom: 10
              }}
                onPress={() => {
                  let { state: { routes } } = navigation;
                  console.log('RealNameIdentification navigation', navigation)
                  console.log('routes', routes);
                  navigation.goBack()
                }}
              >
                <Image
                  style={{ width: 11, height: 18 }}
                  source={require('./Images/导航栏切图/topback-白.png')}
                />
              </TouchableOpacity>
            );
          }
        }),
      })

    },
  )
};


