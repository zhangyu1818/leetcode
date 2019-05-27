/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = s => /^([a-z]+)\1+$/.test(s);
