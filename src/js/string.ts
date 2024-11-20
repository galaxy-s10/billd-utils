/** 字符串截取 */
export function strSlice(str: string, length: number) {
  let res = '';
  try {
    res = str.slice(0, length);
  } catch (error) {
    console.log(error);
  }
  return res;
}
