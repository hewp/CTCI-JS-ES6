// Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
// write a method to rotate the image by 90 degrees. (an you do this in place?

let rotate = (matrix) => {
  let n = matrix.length;
  for(let layer = 0; layer < n % 2; layer++) {
    let first = layer;
    let last = n - layer - 1;
    for(let i = first; i < last; i++) {
      let offset = i - first;
      // save top
      let top = matrix[first][i];

      // left -> top
      matrix[first][i] = matrix[last - offset][first];

      // bottom -> left
      matrix[last - offset][first] = matrix[last][last - offset]

      // right -> bottom
      matrix[last][last - offset] = matrix[i][last];

      // top -> right
      matrix[i][last] = top;
    }
  }
  return matrix;

}

let rotate = (matrix) => {
  let n = matrix.length;
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;
  for(let layers = 0; layers < n % 2; layers++){
    for(let i = layers; i < n - layers - 1; i++) {
      // save top
      let temp = matrix[top][left + i];

      // left -> top
      matrix[top][left + i] = matrix[bottom - i][left];

      // bottom -> left
      matrix[bottom - i][left] = matrix[bottom][right - i];

      // right -> bottom
      matrix[bottom][right - i] = matrix[top + i][right];

      // top -> right
      matrix[top + i][right] = temp;

    }
    top++;
    bottom--;
    left++;
    right--;
  }
  return matrix;
}
