//   if(y === 0){
//       // get rows that correspond in the quadrant
//       let row1 = getRow(board,0)
//       let row2 = getRow(board,1)
//       let row3 = getRow(board,2)
      
//       if(x === 0){
//         let col1 = row1.splice(0, 3)
//         let col2 = row2.splice(0, 3)
//         let col3 = row3.splice(0, 3)
//         // add corresponding col* arrays to grid array 
//         grid.push(col1, col2, col3)
//       }

//       if( x === 1){
//         let col4 = row1.splice(3, 3)
//         let col5 = row2.splice(3, 3)
//         let col6 = row3.splice(3, 3)
//         grid.push(col4, col5, col6)
//       }

//       if( x === 2){
//         let col7 = row1.splice(6, 3)
//         let col8 = row2.splice(6, 3)
//         let col9 = row3.splice(6, 3)
//         grid.push(col7, col8, col9)
//       }

//     }
//     if(y === 1){
//       // get rows that correspond in the quadrant
//       let row4 = getRow(board,3)
//       let row5 = getRow(board,4)
//       let row6 = getRow(board,5)

//       // add corresponding rows to grid array
//       // grid.push(row4, row5, row6)

//       if(x === 0){
//         let col1 = row4.splice(0, 3)
//         let col2 = row5.splice(0, 3)
//         let col3 = row6.splice(0, 3)
//         // add corresponding col* arrays to grid array 
//         grid.push(col1, col2, col3)
//       }

//       if( x === 1){
//         let col4 = row4.splice(3, 3)
//         let col5 = row5.splice(3, 3)
//         let col6 = row6.splice(3, 3)
//         grid.push(col4, col5, col6)
//       }

//       if( x === 2){
//         let col7 = row4.splice(6, 3)
//         let col8 = row5.splice(6, 3)
//         let col9 = row6.splice(6, 3)
//         grid.push(col7, col8, col9)
//       }
//     }
//     if(y === 2){
//       // get rows that correspond in the quadrant
//       let row1 = getRow(board,0)
//       let row2 = getRow(board,1)
//       let row3 = getRow(board,2)
//       // add corresponding rows to grid array
//       // grid.push(row1, row2, row3)
//       if(x === 0){
//         let col1 = row1.splice(0, 3)
//         let col2 = row2.splice(0, 3)
//         let col3 = row3.splice(0, 3)
//         // add corresponding col* arrays to grid array 
//         grid.push(col1, col2, col3)
// }
// if( x === 1){
//   let col4 = row4.splice(3, 3)
//   let col5 = row5.splice(3, 3)
//   let col6 = row6.splice(3, 3)
//   grid.push(col4, col5, col6)

// }
// if( x === 2){
//   let col7 = row7.splice(6, 3)
//   let col8 = row8.splice(6, 3)
//   let col9 = row9.splice(6, 3)
//   grid.push(col7, col8, col9)

// }
// }
//converts grid array from a 2D array --> 1D array
    //  for(let i = x; i < x*3; i++){
    //    let currentElement = returnArray[i]
    //    console.log(returnArray)
    //    if(Array.isArray(currentElement)){
    //      for(let k = 0; i <=3;i++){
    //        let element = currentElement[i]
    //        grid += element 
    //      }
    //    }
    //   }