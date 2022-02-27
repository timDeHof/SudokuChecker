//________PART I Tests___________//
// let puzzle = [
//   [8, 9, 5, 7, 4, 2, 1, 3, 6],
//   [2, 7, 1, 9, 6, 3, 4, 8, 5],
//   [4, 6, 3, 5, 8, 1, 7, 9, 2],

//   [9, 3, 4, 6, 1, 7, 2, 5, 8],
//   [5, 1, 7, 2, 3, 8, 9, 6, 4],
//   [6, 8, 2, 4, 5, 9, 3, 7, 1],

//   [1, 5, 9, 8, 7, 4, 6, 2, 3],
//   [7, 4, 6, 3, 2, 5, 8, 1, 9],
//   [3, 2, 8, 1, 9, 6, 5, 4, 7],
// ];

// console.log(getRow(puzzle, 8));
// -> [ 3,2,8,1,9,6,5,4,7 ]
// console.log(getRow(puzzle, 0));
// -> [ 8,9,5,7,4,2,1,3,6 ]
// console.log(getColumn(puzzle, 0));
// -> [ 8,2,4,9,5,6,1,7,3 ]
// console.log(getColumn(puzzle, 8));
// -> [ 6,5,2,8,4,1,3,9,7 ]
// This grabs the values from column 0 and row 0 (the top left)
// console.log(getSection(puzzle, 0, 0));
// -> [ 8,9,5,2,7,1,4,6,3 ]
// This grabs the values from column 0 and row 1 (second from the top left)
// console.log(getSection(puzzle, 0, 1));
// -> [ 7, 4, 2, 9, 6, 3, 5, 8, 1]
// This grabs the values from column 0 and row 2 (top right)
// console.log(getSection(puzzle, 0, 2));
// -> [ 1, 3, 6, 4, 8, 5, 7, 9, 2]
// This grabs the values from column 1 and row 0 (top right)
// console.log(getSection(puzzle, 1, 0));
// -> [ 1, 3, 6, 4, 8, 5, 7, 9, 2]
// This grabs the values from column 1 and row 2 (middle right)
//console.log(getSection(puzzle, 1, 2));
// -> [ 2, 5, 8, 9, 6,4, 3, 7, 1]
// console.log(puzzle[8][8])
//____________Part II tests__________//
// includes1to9([1,2,3,4,5,6,7,8,9]) // => true
// includes1to9([1,1,2,3,4,5,6,7,8]) // => false (no 9)

// let puzzle = [
//   [8, 9, 5, 7, 4, 2, 1, 3, 6],
//   [2, 7, 1, 9, 6, 3, 4, 8, 5],
//   [4, 6, 3, 5, 8, 1, 7, 9, 2],
//   [9, 3, 4, 6, 1, 7, 2, 5, 8],
//   [5, 1, 7, 2, 3, 8, 9, 6, 4],
//   [6, 8, 2, 4, 5, 9, 3, 7, 1],
//   [1, 5, 9, 8, 7, 4, 6, 2, 3],
//   [7, 4, 6, 3, 2, 5, 8, 1, 9],
//   [3, 2, 8, 1, 9, 6, 5, 4, 7],
// ];
// console.log(sudokuIsValid(puzzle)); //true


// let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
//               [ 8,7,1,9,6,3,4,8,5 ],
//               [ 4,6,3,5,8,1,7,9,2 ],
//               [ 9,3,4,6,1,7,2,5,8 ],
//               [ 5,1,7,2,3,8,9,6,4 ],
//               [ 6,8,2,4,5,9,3,7,1 ],
//               [ 1,5,9,8,7,4,6,2,3 ],
//               [ 7,4,6,3,2,5,8,1,9 ],
//               [ 3,2,8,1,9,6,5,4,7 ]];

//console.log(sudokuIsValid(p8zzle));
// false