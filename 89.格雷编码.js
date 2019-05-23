/**
 * @param {number} n
 * @return {number[]}
 */
const grayCode = n => {
  if (n === 0) return [0];
  // 格雷编码的规律
  // 位数 2**n-1,一半是0开头，一半是1开头，这里将开头的0、1称之为高位，0、1后面的数字为低位
  // 低位的规律以0开头，低位是上一次的格雷编码，以1开头，低位是对称的上一次格雷编码
  // 如n=1的格雷编码是["0","1"]
  // n=2的格雷编码是 ["00","01","11","10]
  // 这里的0开头低位"0","1"是n-1=1的格雷编码
  // 以1开头的低位是"1","0"是n-1=1的格雷编码的倒序
  const makeCode = n => {
    if (n === 1) return ["0", "1"];
    const result = makeCode(n - 1);
    const temp = [];
    const max = 2 ** n - 1;
    for (let i = 0; i < result.length; i++) {
      temp[i] = `0${result[i]}`;
      temp[max - i] = `1${result[i]}`;
    }
    return temp;
  };
  return makeCode(n).map(v => parseInt(v, 2));
};
