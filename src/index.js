module.exports = function check(str, bracketsConfig) {
  let newStrArr = str.split("");
  if (newStrArr.length % 2 != 0) {
    return false;
  } else {
    return true;
  }
};
