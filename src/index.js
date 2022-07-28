
// You should implement your task here.

module.exports = function towelSort (matrix) {
 
    if (matrix) {
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        let colIdx = i % 2 === 0 ? j : (matrix[i].length - 1 - j);
        arr.push(matrix[i][colIdx]);
      };
    }
    return arr;
    } else {
    return [];
    }
  }

