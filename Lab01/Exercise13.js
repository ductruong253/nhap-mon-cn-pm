/* Bài tập 13.
 Tính T(x, n) = x^2 + x^4 + … + x^2n
 Trong đó x, n được nhập từ người dùng.*/

const x = 2;
const n = 4;

function sumT(x, n) {
    let result = 0;
    for (i = 1; i <= n; i++) {
        result += Math.pow(x, i * 2);
    }
    return result;
}

console.log('T(x, n) = ', sumT(x, n));