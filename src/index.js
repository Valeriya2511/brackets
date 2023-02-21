module.exports = function check(str, bracketsConfig) {
  let OPEN_BRACKETS = []
  let u = [];
  for (let i of bracketsConfig) {
    for (let j of i[0]){
      OPEN_BRACKETS.push(j)
    }
    u.push(i.reverse())
  }
  let BRACKETS_PAIRS = Object.fromEntries(u)
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    if (OPEN_BRACKETS.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if(stack.length === 0){
        return false
      }

      let topElement = stack[stack.length - 1];
      if (BRACKETS_PAIRS[currentSymbol] === topElement){
        stack.pop()
      } else {
        return false;
      }
    }
  }
return stack.length === 0;
}
