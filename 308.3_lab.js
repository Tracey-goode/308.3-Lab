// Fizz Buzz
// // Part One

// let x = 1

// for (x = 0; x <= 100; x++) {
//     if (x % 3 == 0 && x % 5 == 0) {
//         console.log(`${x} FIZZ BUZZ`)
//     } else if (x % 3 == 0) {
//         console.log(`${x} Fizz`)
//     } else if (x % 5 == 0) {
//         console.log(`${x} Buzz`)
//     } else {
//         console.log(x)
//     }
// }

// //

// Part 3

let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let cell1 = "", cell2 = "", cell3 = "", cell4 = "";
let currentCell = "";
let currentCellIndex = 0;

for (let i = 0; i < csv.length; i++) {
  let char = csv[i];

  if (char === ',') {
    if (currentCellIndex === 0) cell1 = currentCell;
    else if (currentCellIndex === 1) cell2 = currentCell;
    else if (currentCellIndex === 2) cell3 = currentCell;

    currentCell = "";
    currentCellIndex++;
  } else if (char === '\n') {
    cell4 = currentCell;

    console.log(cell1, cell2, cell3, cell4);

    cell1 = cell2 = cell3 = cell4 = "";
    currentCell = "";
    currentCellIndex = 0;
  } else {
    currentCell += char;
  }
}

if (currentCell !== "") {
  cell4 = currentCell;
  console.log(cell1, cell2, cell3, cell4);
}
