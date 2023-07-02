function addStrings(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let sum = '';
    let carry = 0;
  
    while (i >= 0 || j >= 0 || carry > 0) {
      const digit1 = i >= 0 ? Number(num1[i]) : 0;
      const digit2 = j >= 0 ? Number(num2[j]) : 0;
      const currentSum = digit1 + digit2 + carry;
      const digitSum = currentSum % 10;
      carry = Math.floor(currentSum / 10);
  
      sum = digitSum + sum;
  
      i--;
      j--;
    }
  
    return sum;
  }
// example usage 
console.log(addStrings("11", "123"));  
console.log(addStrings("313", "123"));  
console.log(addStrings("313", "9123"));  
  