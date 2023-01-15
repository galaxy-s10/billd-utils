export class CacheModel {
  /**
   * @description 获取缓存
   * @param {string} key
   * @return {*}
   */
  getStorage = (key: string) => {
    try {
      const res = localStorage.getItem(key);
      return res ? JSON.parse(res).value : null;
    } catch (error) {
      this.clearStorage(key);
      console.error(error);
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
      this.clearStorage(key);
      console.error(error);
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
        // 如果缓存的expireTime小于当前时间,则代表已过期
        const isExpires = expireTime < +new Date();
        if (isExpires) {
          this.clearStorage(key);
          return null;
        }
        return data.value;
      }
    } catch (error) {
      this.clearStorage(key);
      console.error(error);
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
        console.error('setStorageExp失败，请检查传入的参数!');
        return;
      }
      const createTime = +new Date();
      const expireTime = createTime + expires * 60 * 60 * 1000;
      localStorage.setItem(
        key,
        JSON.stringify({ value, createTime, expireTime })
      );
    } catch (error) {
      this.clearStorage(key);
      console.error(error);
    }
  };
}
