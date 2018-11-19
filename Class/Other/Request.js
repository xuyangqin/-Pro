import {
  Platform,
  Alert
} from 'react-native'

const qs = require('qs');

const BASE_WEB_URL = 'https://uat.feikongbao.com/';
const BASE_URL = 'http://prodevapi.feikongbao.net/';
CasEngineUrl = "http://cas.feikongbao.com/";//获取服务地址环境 生产环境
// const DEFAULT_HEADERS = {
//   'Content-Type': 'application/json;charset=utf-8',
//   'User-Agent': DeviceInfo.getUserAgent(),
//   'loginType' :  Platform.OS === 'ios' ?'IOS':'Android',
// };
/**
 * 请求 获取服务地址环境
 *
 * @param {Object} options
 * @param {string} options.url - 接口地址
 * @param {string} options.method - 请求类型
 * @param {Object} options.headers - 请求头
 * @param {Object} options.params - url 参数
 * @param {Object} options.data - 请求体数据
 */
export function getDeployUrl({ url,mobile_phone,pws}) {

  url = CasEngineUrl + url + '?Language=zh-CN&activeUid=1D11CC76-BDB0-4304-918C-3338219A2466'+'&mobile_phone=' + mobile_phone + '&pws=' + pws;

  return new Promise((resolve, reject) => {

    fetch(url,{
        method:'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
      .then(response => response.json())
      .then(responseJson => {
         if(responseJson.server_status == 'true'){
           console.log('请求回调：' + responseJson.base_server_url);
           resolve(responseJson);
         }else{
           //如果没有获取服务器地址重复请求
           this.getDeployUrl({
              method: 'GET',
              url: url,
              mobile_phone:'17778790005',
              pws:'123456'
           })
         }
          
      })
      .catch((err) => {
        reject(err)
      });
  });
}

export function requestsUrl({ url, method,data}) {

  url = BASE_URL + url;

  return new Promise((resolve, reject) => {
    fetch(url,{
        method:method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(responseJson => {

        if(responseJson.Head.Code == '3030' || responseJson.Head.Code == '203'){
          console.log('token失效');
           return null;
        }
        resolve(responseJson);
          
      })
      .catch((err) => {
        reject(err)
      });
  });
}
export function requestsBaseUrl({ url, method,data}) {

  url = BASE_URL + url;
  
  var param = {uid:'17778790005',pws:'123456',activeUid:'1D11CC76-BDB0-4304-918C-3338219A2466',LegalUnitID:'000007',Language:'zh-CN',Version:'3.0.2'}

  var paras = {Head:param,Content:data}

  return new Promise((resolve, reject) => {
    fetch(url,{
        method:method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(paras)
    })
      .then(response => response.json())
      .then(responseJson => {

        if(responseJson.Head.Code == '3030' || responseJson.Head.Code == '203'){
          console.log('token失效');
           return null;
        }
        resolve(responseJson);
          
      })
      .catch((err) => {
        reject(err)
      });
  });
}
// export function requestWithToken(options) {
//   return storage.load({ key: 'accessToken' })
//     .then(result => request({ ...options, access_token: result }));
// }

// //刷新token
// export function refreshToken() {

//   return storage.load({
//     key: 'userInfo'
//   }).then(result => {
//     return request({
//       method: 'POST',
//       url: 'token',
//       data: {
//         mobile: result.mobile,
//         password: result.password,
//       }
//     }).then(data => {
//       saveToken(data);
//     });
//   });
// }

/**
 * 请求参数序列化
 *
 * @param {Object} params - 请求参数
 * @returns {string}
 */
function paramsSerializer(params) {
  return qs.stringify(params, { arrayFormat: 'brackets' });
}