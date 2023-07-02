function rotateString(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    const concatenated = s + s;
  
    return concatenated.includes(goal);
  }
//   example 
console.log(rotateString("abcde", "cdeab"));  // Output: true
