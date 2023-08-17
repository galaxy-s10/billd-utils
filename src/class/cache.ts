// TIP: ctrl+cmd+t,生成函数注释
import { debugLog } from '../utils/index';

export class CacheModel {
  /**
   * @description 获取缓存
   * @param {string} key
   * @return {*}
   */
  getStorage = (key: string) => {
    try {
      const res = localStorage.getItem(key);
      if (res) {
        const data = JSON.parse(res);
        // 如果createTime没有值，则判断该缓存不合法；清除
        if (!data.createTime) {
          this.clearStorage(key);
        } else {
          return data.value;
        }
      }
    } catch (error) {
      debugLog('error', error);
      this.clearStorage(key);
    }
  };

  /**
   * @description 设置缓存
   * @param {*} key
   * @param {*} value
   */
  setStorage = (key: string, value: any) => {
    try {
      const createTime = +new Date();
      localStorage.setItem(key, JSON.stringify({ value, createTime }));
    } catch (error) {
      debugLog('error', error);
      this.clearStorage(key);
    }
  };

  /**
   * @description 清除缓存
   * @param {*} key
   */
  clearStorage = (key: string) => {
    localStorage.removeItem(key);
  };

  /**
   * @description 获取缓存,如果缓存已过期,会清除该缓存,并返回null
   * @param {*} key
   */
  getStorageExp = (key: string) => {
    try {
      const res = localStorage.getItem(key);
      if (res) {
        const data = JSON.parse(res);
        const expireTime = data.expireTime;
        const isExpired = expireTime < +new Date();
        // 如果expireTime没有值，则判断该缓存不合法；清除
        // 如果expireTime有值，但小于当前时间，则代表已过期；清除
        if (!expireTime || isExpired) {
          this.clearStorage(key);
        } else {
          return data.value;
        }
      }
    } catch (error) {
      debugLog('error', error);
      this.clearStorage(key);
    }
  };

  /**
   * @description 设置缓存以及缓存时长
   * @param {*} key
   * @param {*} value
   * @param {*} expires 缓存时长,单位:小时
   */
  setStorageExp = (key: string, value: any, expires: number) => {
    try {
      if ([key, value, expires].includes(undefined)) {
        debugLog('error', 'setStorageExp失败，请检查传入的参数！');
        return;
      }
      const createTime = +new Date();
      const expireTime = createTime + expires * 60 * 60 * 1000;
      localStorage.setItem(
        key,
        JSON.stringify({ value, createTime, expireTime })
      );
    } catch (error) {
      debugLog('error', error);
      this.clearStorage(key);
    }
  };
}
