// Bài tập 10.
// Tính T(x, n) = xn
// Trong đó x, n được nhập từ người dùng.

const x = 2;
const n = 4;

function sumT(x, n) {
    let result = 0;
    for (i = 1; i <= n; i++) {
        result += Math.pow(x, i);
    }
    return result;
}

console.log('T(x, n) = ', sumT(x, n));