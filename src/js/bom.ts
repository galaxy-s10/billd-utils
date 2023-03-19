// TIP: ctrl+cmd+t,生成函数注释

/**
 * @description 判断是否是移动端（判断比较粗糙）
 * @return {*}
 */
export const isMobile = () => {
  return /android|ios|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
    navigator.userAgent
  );
};

/**
 * @description 判断是否是微信浏览器
 * @return {*}
 */
export const isWechat = () => {
  return /MicroMessenger/i.test(window.navigator.userAgent);
};

/**
 * @description 判断设备类型
 * @return {*}
 */
export const judgeDevice = () => {
  const ua = navigator.userAgent;
  const isAndroid = /(Android)/i.test(ua);
  const isIphone = /(iPhone|iPad|iPod|iOS)/i.test(ua);

  return { isAndroid, isIphone };
};

/**
 * @description 判断是否是浏览器环境
 * @param {*} boolean
 * @return {*}
 */
export const isBrowser = () =>
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined';

/**
 * @description 判断是否是Safari浏览器
 * @return {*}
 */
export const isSafari = () => {
  // mac下的Chrome浏览器的navigator.userAgent既有Safari也有Chrome，因此得排除mac下的Chrome浏览器
  return (
    /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)
  );
};

/**
 * @description 判断是否是ie浏览器
 * @return {*}
 */
export const isIe = () => {
  return (
    navigator.userAgent.indexOf('MSIE') !== -1 ||
    navigator.userAgent.indexOf('Trident') !== -1
  );
};
/**
 * @description 判断是否是Firefox浏览器
 * @return {*}
 */
export const isFirefox = () => {
  return navigator.userAgent.indexOf('Firefox') !== -1;
};

/**
 * @description 判断是否是支持webp
 * @return {*}
 */
export const isSupportWebp = () => {
  return (
    document
      .createElement('canvas')
      .toDataURL('image/webp')
      .indexOf('data:image/webp') === 0
  );
};
