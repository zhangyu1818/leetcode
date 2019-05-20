/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = digits => {
  if (!digits || digits === "1") return [];
  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"]
  };
  // 把字符串转成对应的数组形式
  const digitsArr = Array.from(digits).map(v => map[v]);
  // 递归调用
  const combiner = digitsArr => {
    // 终止条件
    if (digitsArr.length === 1)
      return digitsArr.reduce((a, b) => a.concat(b), []);
    // 取出下标0,1,和剩余的
    const [a, b, ...other] = digitsArr;
    // 组合、flat
    const temp = a
      .map(v => b.map(v1 => v + v1))
      .reduce((a, b) => a.concat(b), []);
    return combiner([temp, ...other]);
  };
  return combiner(digitsArr);
};

console.log(letterCombinations("23"));
