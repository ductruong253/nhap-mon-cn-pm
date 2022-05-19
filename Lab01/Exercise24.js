/*Bài tập 24
Viết chương trình tìm mảng con liên tục có tổng giá trị nhỏ nhất trong mảng số nguyên.
Ví dụ: cho -2, 1, -3, 4, -1, 2, 1, -5, 4 è 4, -1, 2, 1 có tổng là 6 là lớn nhất
*/

let sampleArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
sampleArray.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});
let arrSize = sampleArray.length;


const k = -6;

function seekNInsert(k, arr) {
    if (k > sampleArray[arrSize - 1]) {
        sampleArray.push(k);
        return sampleArray.length;
    }
    if (k < sampleArray[0]) {
        sampleArray.splice(0, 0, k);
        return 0;
    }
    for (let i = 0; i < arrSize - 1; i++) {
        if (k == sampleArray[i]) return i;
        else if ((sampleArray[i] < k) && (sampleArray[i + 1] > k)) {
            sampleArray.splice(i + 1, 0, k);
            return i + 1;
        }
    }
}

console.log('Mang truoc khi chen:', sampleArray);

console.log('Ket qua:', seekNInsert(k, sampleArray));
console.log('Mang sau khi chen:', sampleArray);