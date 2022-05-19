/* Bài tập 21.
Viết chương trình nhập và ma trận A có n dòng và m cột. 
Thực hiện các yêu cầu sau: 
- Tìm giá trị max. 
- Tìm giá trị min. Lập trình Java Lab 01 – Cú pháp ES cơ bản
- Nhập một giá trị k, xuất ra vị trí i và j của giá trị này trong ma trận, nếu không có thì 
return ra (-1, -1)
*/

const prompt = require('prompt-sync')();

let positions = {
    "min": {
        "x": -1,
        "y": -1
    },
    "max": {
        "x": -1,
        "y": -1
    },
    "kPos": {
        "x": -1,
        "y": -1
    }
}
//Default matrix for testing
const testMatrix = [
    [1, 2, 3],
    [4, 0, 6],
    [7, 8, 22]
]
//default constants for testing
const defaultRowCount = 3;
const defaultColCount = 3;

var min = 0;
var max = 0;

let rowCount;
let colCount;

//Function for reading and parsing number input from console
function readIntNumberFromInput(message) {
    let value;
    do {
        value = parseInt(prompt(message));
        isNaN(value) ? console.log('Invalid input. Please retry.') : "";
    }
    while (isNaN(value));
    return value;
}

//Function for matrix input from console
function readMatrix() {
    rowCount = readIntNumberFromInput('Input row size: ');
    colCount = readIntNumberFromInput('Input col size: ');
    let matrix = []
    let col;
    for (let x = 0; x < rowCount; x++) {
        col = [];
        for (let y = 0; y < colCount; y++) {
            col.push(readIntNumberFromInput(`matrix[${x},${y}] = `));
        }
        matrix.push(col);
    }
    return matrix;
}

//Function for finding Min and Max value, and position of k (k is a number input from console)
function findPosition(k, inputMatrix) {
    const rowCount = inputMatrix.length;
    const colCount = inputMatrix[0].length;
    // let row = [];
    for (let x = 0; x < rowCount; x++) {
        // row = inputMatrix[x];
        for (let y = 0; y < colCount; y++) {
            if (inputMatrix[x][y] > max) {
                max = inputMatrix[x][y]
                positions.max.x = x;
                positions.max.y = y;
            };
            if (inputMatrix[x][y] < min) {
                min = inputMatrix[x][y]
                positions.min.x = x;
                positions.min.y = y;
            };
            if (inputMatrix[x][y] == k) {
                positions.kPos.x = x;
                positions.kPos.y = y;
            };
        };
    };
}
let matrix = [];
matrix[0] = [];
let k = readIntNumberFromInput("Input k = ");
matrix = readMatrix();
findPosition(k, matrix);
console.log(`===> Max value = ${max}`);
console.log(`===> Min value = ${min}`);
console.log(`===> Position of value k='${k}' = (${positions.kPos.x},${positions.kPos.y})`);