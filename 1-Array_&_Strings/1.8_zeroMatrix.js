// Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to O.

let zeroMatrix = (matrix) => {
  let row = new Array(matrix.length).fill(false);
  let col = new Array(matrix.length[0]).fill(false);

  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === 0) {
        row[i] = true;
        column[j] = true;
      }
    }
  }

  for(let i = 0; i < row.length; i++) {
    if(row[i]) {
      nullifyRow(matrix, i);
    }
  }

  for(let j = 0; j < col.length; j++) {
    if(col[i]) {
      nullifyCol(matrix, j);
    }
  }
}

let nullifyRow = (matirix, row) => {
  for(let i = 0; i < matrix[0].length; i++){
    matrix[row][i] = 0;
  }
}

let nullifyCol = (matirix, col) => {
  for(let j = 0; j < matrix.length; j++) {
    matrix[j][col] = 0;
  }
}
