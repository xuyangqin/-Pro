import { AsyncStorage } from 'react-native';
import Storage from 'react-native-storage'
export const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null
});

/**
 * 客户端缓存保存 token 数据
 * @param {object} data - 登录成功后服务器返回的数据
 * @param {string} data.access_token
 * @param {string} data.refresh_token
 * @param {number} data.expires_in
 */


export function saveUserInfo({data}) {
  storage.save({
    key: 'userInfo',
    data: data,
    expires: null, // access_token 有效期 2 小时，保险起见客户端减少 2 分
  });
  storage.save({
    key: 'refreshUserInfo',
    data: data,
    expires: 1000 * 3600 * 24 * 30 // refresh_token 保存 30 天
  });
}

export function removeUserInfo() {
  storage.remove({
    key: 'userInfo'
  });
  storage.remove({
    key: 'refreshUserInfo'
  });
}

export function saveToken({data}) {
  storage.save({
    key: 'accessUserData',
    data: data,
    expires: null, // access_token 有效期 2 小时，保险起见客户端减少 2 分钟
  });
  storage.save({
    key: 'refreshAccessUserData',
    data: data,
    expires: 1000 * 3600 * 24 * 30 // refresh_token 保存 30 天
  });
}

export function removeTokens() {
  storage.remove({
    key: 'accessUserData'
  });
  storage.remove({
    key: 'refreshAccessUserData'
  });
}