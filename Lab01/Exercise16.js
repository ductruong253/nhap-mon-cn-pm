/* Bài tập 16.
Tính S(x, n) = x + (x*2)/(1+2) + (x*3)/(1+2+3) + ... + (x*n)/(1+2+3+...+n)
Trong đó x, n được nhập từ người dùng.*/

const x = 2;
const n = 4;

function sumT(x, n) {
    let sum = 0;
    result = 0;
    for (i = 1; i <= n; i++) {
        sum += i
        result += (x * i) / sum;
    }
    return result;
}

console.log('T(x, n) = ', sumT(x, n));