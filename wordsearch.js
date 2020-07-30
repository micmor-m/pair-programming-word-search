const wordSearch = (letters, word) => { 
    //if the matrix is empty or the string to search is empty return false
    if (word.length < 1 || letters.length < 1) {
        return false
    }

    //check each line by line horizontally
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }

    //traspose array to search vertically
    let newLetters = transpose(letters);
    //console.log(newLetters);
    
    //check each line by line vertically
    const verticalJoin = newLetters.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        } 
    }

    //if nothing found return false
    return false;
}

const transpose = function(matrix) {
    //console.log(matrix)
    let line = [];
    let newMatrix = [];
    let length = 0;
    
    length = matrix[0].length;
    //console.log("length", length)
    
    let col = 0;
    while (col < length) {
      for (let row of matrix) {
        line.push(row[col]);
      }
      newMatrix.push(line);
      line = [];
      col += 1;
    }
    //console.log(newMatrix);
    return newMatrix;
  };
module.exports = wordSearch