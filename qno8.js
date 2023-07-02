function checkStraightLine(coordinates) {
    const [x0, y0] = coordinates[0];
    const [x1, y1] = coordinates[1];
    const initialSlope = getSlope(x0, y0, x1, y1);
  
    for (let i = 2; i < coordinates.length; i++) {
      const [xi, yi] = coordinates[i];
      const [xiMinus1, yiMinus1] = coordinates[i - 1];
      const currentSlope = getSlope(xiMinus1, yiMinus1, xi, yi);
  
      if (currentSlope !== initialSlope) {
        return false;
      }
    }
  
    return true;
  }
  
  function getSlope(x1, y1, x2, y2) {
    if (x1 === x2) {
      return Infinity;  // Vertical line
    }
  
    return (y2 - y1) / (x2 - x1);
  }
  
  console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]));  // Output: true
