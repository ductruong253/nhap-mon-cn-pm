/*Bài tập 23
Viết chương trình tìm mảng con liên tục có tổng giá trị nhỏ nhất trong mảng số nguyên.
Ví dụ: cho -2, 1, -3, 4, -1, 2, 1, -5, 4 è 4, -1, 2, 1 có tổng là 6 là lớn nhất
*/

const sampleArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let arrSize = sampleArray.length;

let minSum = 0;
const subArrSize = 4;
let boundary = arrSize - subArrSize;
let temp = 0;
let start = 0;
for (let i = 0; i < boundary; i++) {
    temp = sampleArray[i] + sampleArray[i + 1] + sampleArray[i + 2] + sampleArray[i + 3];
    if (temp < minSum) {
        minSum = temp;
        start = i;
    }
}

console.log(`Gia tri tong min = ${minSum}`);
console.log('Mang con: ', sampleArray.slice(start, start + subArrSize));