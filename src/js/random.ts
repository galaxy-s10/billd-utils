// TIP: ctrl+cmd+t,生成函数注释

import { throwError } from '@/utils';

/**
 * @description 获取[min,max]之间的随机整数。
 * @example: getRangeRandom(-10,100) ===> -8
 * @param {number} min
 * @param {number} max
 * @return {*}
 */
export const getRangeRandom = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * @description: 随机数组的一个元素
 * @example: getRandomOne([10,2,4,6]) ===> 6
 * @param {any} arr
 * @return {*}
 */
export const getRandomOne = (arr: any[]) =>
  arr[Math.floor(Math.random() * arr.length)];

/**
 * @description 获取随机字符串(ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789)
 * @example: getRandomString(4) ===> abd3
 * @param {number} length
 * @return {*}
 */
export const getRandomString = (length: number): string => {
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const strLength = str.length;
  const result = new Array(length);

  for (let i = 0; i < length; i += 1) {
    result[i] = str[Math.floor(Math.random() * strLength)];
  }
  return result.join('');
};

/**
 * @description: 获取随机整数
 * @example: getRandomInt(4) ===> 3251
 * @param {*} length
 * @return {*}
 */
export const getRandomInt = (length) => {
  if (length > 16 || length < 1) throwError('length的范围:[1,16]');
  const min = 10 ** (length - 1); // 如 length=2 → min=10
  const max = 10 ** length - 1; // 如 length=2 → max=99
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
