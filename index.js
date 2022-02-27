// this function will accept two arguments (puzzle, rowIndex) and returns an
// array containing the numbers in the specified row (rowIndex).
function getRow(puzzle, rowIndex) {
  let row = puzzle[rowIndex]; // assigns row a single array from puzzle array based  on the rowIndex
  return row;
}

// this function will accept two arguments (puzzle, columnIndex) and returns an // array containing the numbers in the specified column (columnIndex).
function getColumn(puzzle, columnIndex) {
  const columnArray = []; // holds the numbers from specified column(columnIndex)

  for (let i = 0; i < puzzle.length; i++) {
    let currentRow = puzzle[i]; // current row in given puzzle

    // checks if currentRow is an array
    if (Array.isArray(currentRow)) {
      columnArray.push(currentRow[columnIndex]); // if true then push currentRow[columnIndex] to columnArray
    } // if false then stop
  }
  return columnArray; // returns single row with columnIndex element from each single array in puzzle array
}

// this function will accept three arguments (puzzle, column, row) and
// returns an array with all the numbers in the specified sub-grid.
function getSection(puzzle, column, row) {
  let returnArray = []; // placeholder for grid array
  let x = column * 3; // adjusts column to get the proper index in puzzle
  let y = row * 3; // adjusts row to get the proper

  // need to create a 3 x 3 matrix from the puzzle array
  let width = x + 3;
  let height = y + 3;

  for (let i = x; i < width; i++) {
    rowArray = getRow(puzzle, i);
    for (let k = y; k < height; k++) {
      returnArray.push(rowArray[k]); //Issue: returns as a string when its returnArray.push(rowArray[i][k]);
    }
  }
  return returnArray;
}
function includes1to9(array) {
  // this function checks if any subsections has the numbers (1-9) with no repeats
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // numbers library to check

  let numberStatus = false;
  let numberCount = 1;
  while (numberCount <= 9) {
    for (let i = 0; i < numbers.length; i++) {
      let element = numbers[i];

      if (array.includes(element)) {
        // checks element is in array;
        numberStatus = true; // if true; change check to true
      } else {
        numberStatus = false;
        numberCount = 1; // sets numberCount back to zero when function finishes
        break;
      }
      numberCount++;
    }
    numberCount = 1; // sets numberCount back to zero when function finishes
    return numberStatus;
    //console.log(numberStatus)
  }
}
function sudokuIsValid(array) {
  /* 
  1.  create a FOR statement to get a row Index
  2.  use row Index to get row array from puzzle array
  3.  test current row against includes1to9 fcn
        a. if current row passes, then increment i by 1 and run FOR statement again for new row.
        b. if current row not pass, stop test and return false to user
  4.  if all rows pass, continue to Rule 2
  5.  create a FOR statement to get a column Index
  6.  use column Index to get column array from puzzle array
  7.  test current column against includes1to9 fcn
        a. if current column passes, then increment k by 1 and run FOR statement again for new column.
        b. if current row not pass, stop test and return false to user
  8.  if all columns pass, continue to Rule 3
  9.  use new FOR statement to get x-coordinate
  10. use new nested FOR statement to get y-coordinate
  11. use x- and y- coordinates in getSection() fcn to get section array from  puzzle array
  12. test current section array against includes1to9 fcn
      a. if current section passes, then increment n by 1 and run FOR statement again for new section.
      b. if current section not pass, stop test and return false to user
  13.
      a.if(rule1 is true && rule2 is true && rule3 is true) then set test to true and return it to the screen
      b.if(rule1 is false && rule2 is false && rule3 is false) then return test to screen
  */

  let rule1 = false;
  let rule2 = false;
  let rule3 = false;
  let test = false;

  const rowsMax = 9;
  let rowCount = 1;
  //  gets a number for rowIndex and columnIndex
  while (rowCount <= rowsMax) {
    for (let i = 0; i < array.length; i++) {
      // get rowElement from array using getRow() fcn
      let rowElement = getRow(array, i);
      // testing if rowElement passes Rule 1
      if (includes1to9(rowElement)) {
        rule1 = true;
      } else {
        return test;
      }
      rowCount++;
      // console.log(
      //   "row index: " + i + "-" + "[" + rowElement + "]" + " Rule 1: " + rule1
      // );
    }
  }

  // testing if columnElement passes Rule 2
  let columnCount = 1;
  const columnsMax = 9;
  while (columnCount <= columnsMax) {
    for (let j = 0; j < array.length; j++) {
      let columnElement = getColumn(array, j);

      if (includes1to9(columnElement)) {
        //   // test columnElement for numbers (1 - 9)
        rule2 = true;
      } else {
        return test;
      }
      columnCount++;
      // console.log("column index: " + j + "-" + "[" + columnElement + "]" +"Rule 2: " + rule2);
    }
  }

  let subGridsCount = 0;
  const subGrids = 9;
  // testing if subGridElement passes Rule 3
  while (subGridsCount <= subGrids) {
    let limit = 2;

    for (let k = 0; k <= limit; k++) {
      for (let n = 0; n <= limit; n++) {
        let subGrid = getSection(array, k, n);

        if (subGridsCount % 3 === 0 && n === 2) {
          let n = 0;
          subGridsCount++;
        } else {
          subGridsCount++;
        }

        if (includes1to9(subGrid)) {
          rule3 = true;
        } else {
          return test;
        }

        // console.log(
        //   "subGridsCount: " + subGridsCount + " Coord " + "(" + k + "," + n +"):" + " - " + "[" + subGrid + "]" + " Rule 3: " + rule3);
      }
    }
    return (test = true);
  }
}

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

let p8zzle = [
  [8, 9, 5, 7, 4, 2, 1, 3, 6],
  [8, 7, 1, 9, 6, 3, 4, 8, 5],
  [4, 6, 3, 5, 8, 1, 7, 9, 2],
  [9, 3, 4, 6, 1, 7, 2, 5, 8],
  [5, 1, 7, 2, 3, 8, 9, 6, 4],
  [6, 8, 2, 4, 5, 9, 3, 7, 1],
  [1, 5, 9, 8, 7, 4, 6, 2, 3],
  [7, 4, 6, 3, 2, 5, 8, 1, 9],
  [3, 2, 8, 1, 9, 6, 5, 4, 7],
];

console.log(sudokuIsValid(p8zzle)); // false
