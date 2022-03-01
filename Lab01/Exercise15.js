/* Bài tập 15.
Tính S(n) = 1 + 1/(1+2) + 1/(1+2+3) + ... + 1/(1+2+3+..+n)
Trong đó n được nhập từ người dùng.*/

const x = 2;
const n = 4;

function sumT(x, n) {
    let sum = 0;
    result = 0;
    for (i = 1; i <= n; i++) {
        sum += i
        result += 1 / sum;
    }
    return result;
}

console.log('T(x, n) = ', sumT(x, n));