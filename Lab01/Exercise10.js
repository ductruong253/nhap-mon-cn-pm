// Bài tập 10.
// Tính T(x, n) = xn
// Trong đó x, n được nhập từ người dùng.

const x = 2;
const n = 3;

function sumT(x, n) {
    let result = 1;
    for (i = 1; i <= n; i++) {
        result *= x;
    }
    return result;
}

console.log('T(x, n) = ', sumT(x, n));