//First Solution: recursive
// I created it as an object so I can mock it in the tests
const draw = {
  init: function (width, height, padding)  {
    if (width <= 0 || height <= 0) return [];
    if (height < 2) return [Array(width).fill(1)];
  
  
    if (width <= padding+2 || height <= padding+2) {
      return [Array.from({length: width}).fill(1),
          ...Array.from({length: height-2}, () => width < 2 ? [2] : [2, ...Array.from({length: width-2 }).fill(0), 2]),
          Array.from({length: width}).fill(1)];
    }
  
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
