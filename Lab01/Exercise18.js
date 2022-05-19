/* Bài tập 18.
Tính S(x, n) = 1 + (x*2)/2! + (x*3)/3! + ... + (x*n)/n!
Trong đó x, n được nhập từ người dùng.*/

const x = 2;
const n = 4;

function sumT(x, n) {
    let giaiThua = 1;
    result = 0;
    for (i = 1; i <= n; i++) {
        giaiThua *= i;
        result += (x * i) / giaiThua;
    }
    return result;
}

console.log('T(x, n) = ', sumT(x, n));