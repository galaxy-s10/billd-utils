/**
 * @description 获取随机整数
 * @example: getRandomInt(4) ===> 3251
 */
const getRandomInt = (length) => {
  if (length > 16 || length < 1) throw new Error('length的范围:[1,16]');
  const min = 10 ** (length - 1); // 如 length=2 → min=10
  const max = 10 ** length - 1; // 如 length=2 → max=99
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

for (let i = 0; i < 10000; i += 1) {
  const res = getRandomInt(4);
  if (String(res).length !== 2) {
    console.log(res);
  }
}
