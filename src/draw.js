//First Solution: recursive
// I created it as an object so I can mock it in the tests
const draw = {
  init: function (width, height, padding)  {
    // if width and height less than or equal zero, return empty array and exit the function;
    if (width <= 0 || height <= 0) return [];
    // if the height is less than 2 ( this to check the last row in the array ) then return 1 which later will be -
    if (height < 2) return [Array(width).fill(1)];
    // if the width and height less or equal padding + 2 ( to draw the very inner box ) I added + 2 to count the top, right, bottom, left;
    if (width <= padding+2 || height <= padding+2) {
      return [Array.from({length: width}).fill(1),
          ...Array.from({length: height-2}, () => width < 2 ? [2] : [2, ...Array.from({length: width-2 }).fill(0), 2]),
          Array.from({length: width}).fill(1)];
    }
    // this to draw the array row by row and inside it is the recursion 
    // which I subtract the padding + extra 2 col or row which will be the edges of the box
    // then calling the function again and mapping the rows to to draw it.
    return [Array.from({length: width}).fill(1),
        ...Array.from({length: padding/2 }, () => [2, ...Array.from({length: width-2 }).fill(0), 2]),
        ...this.init(width - padding - 2, height - padding - 2, padding).map((row,i) => 
            [2, ...Array.from({length: padding/2 }).fill(0), ...row, ...Array.from({length: padding/2 }).fill(0), 2]
        ),
        ...Array.from({length: padding/2 }, () => [2, ...Array.from({length: width-2 }).fill(0), 2]),
        Array.from({length: width }).fill(1)];
  }
};

// Second solution: Mirroring the Array.
// function draw(width, height, padding) {
//   var pad = 1 + padding / 2;
//   return Array.from({ length: height }, (_, row) => {
//       if (row >= height / 2) row = height - row - 1;
//       return Array.from({ length: width }, (_, col) => {
//           if (col >= width / 2) col = width - col - 1;
//           if (row % pad === 0 && row <= col) return 1;
//           if (col % pad === 0 && col <= row) return 2;
//           return 0;
//       });
//   });
// }

module.exports = draw;
