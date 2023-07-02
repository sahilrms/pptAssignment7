function backspaceCompare(s, t) {
    const finalS = processString(s);
    const finalT = processString(t);
  
    return finalS === finalT;
  }
  
  function processString(str) {
    const stack = [];
  
    for (let char of str) {
      if (char === '#') {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
  
    return stack.join('');
  }

//   example usage
console.log(backspaceCompare("ab#c", "ad#c"));  // Output: true
