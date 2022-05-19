/*Bài tập 25.
Viết chương trình tìm phần tử có giá trị giữa nhất trong một mảng chưa được sắp xếp.
Ví dụ: [10, 2, 38, 23, 38, 23, 21] -> Output: 23
*/

let sampleArray = [10, 2, 38, 12, 38, 24, 21, 55, 22];
sampleArray.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});
let arraySize = sampleArray.length;

let mean;
if (arraySize % 2 == 0) mean = sampleArray[(arraySize / 2) - 1]
else mean = sampleArray[(arraySize - 1) / 2]

console.log(sampleArray);
console.log('Gia tri giua nhat:', mean);