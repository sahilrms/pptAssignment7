function reverseStr(s, k) {
    const strArr = s.split('');
  
    for (let i = 0; i < strArr.length; i += 2 * k) {
      let start = i;
      let end = Math.min(i + k - 1, strArr.length - 1);
  
      while (start < end) {
        const temp = strArr[start];
        strArr[start] = strArr[end];
        strArr[end] = temp;
        start++;
        end--;
      }
    }
  
    return strArr.join('');
  }

//   example usage
console.log(reverseStr("abcdefg", 2));  
console.log(reverseStr("abcdefgbvlmxtr", 2));  
