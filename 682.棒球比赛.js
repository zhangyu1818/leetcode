/**
 * @param {string[]} ops
 * @return {number}
 */
const calPoints = function(ops) {
  const sum = [];
  for (let i = 0; i < ops.length; i++) {
    const cur = ops[i];
    if (!isNaN(+cur)) sum.push(+cur);
    else if (cur === "+") {
      const temp = sum[sum.length - 1] + sum[sum.length - 2];
      sum.push(temp);
    } else if (cur === "D") {
      const temp = sum[sum.length - 1] * 2;
      sum.push(temp);
    } else if (cur === "C") {
      sum.pop();
    }
  }
  return sum.reduce((a, b) => a + b);
};

// 再回头捡起的时候已经过了10个月，哪怕是每周一道学习理解简单的也会成长不少
// 这次一定要坚持✊
