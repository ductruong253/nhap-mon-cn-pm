/* Bài tập 14.
Tính S(n) = x + x^3 + … + x^(2n+1)
Trong đó x, n được nhập từ người dùng.*/

const x = 2;
const n = 4;

function sumT(x, n) {
    let result = 0;
    for (i = 0; i <= n; i++) {
        result += Math.pow(x, (i * 2) + 1);
    }
    return result;
}

console.log('T(x, n) = ', sumT(x, n));