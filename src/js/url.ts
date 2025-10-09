// TIP: ctrl+cmd+t,生成函数注释

import { debugLog } from '@/utils';

/**
 * @description 获取地址栏参数(注意:请确保url是http://aaa.com/ds/?aa=1&bb=323这样子的)
 * @return {*}
 */
export const getUrlParams = (data: { url?: string }) => {
  const obj = {};
  try {
    const url = decodeURIComponent(data.url || window.location.href);
    const str = url.split('?')[1];
    if (str) {
      const keys = str.split('&');
      keys.forEach((item) => {
        const arr = item.split('=');
        obj[arr[0]] = arr[1];
      });
    }
  } catch (error) {
    debugLog('error', error);
  }
  return obj;
};
