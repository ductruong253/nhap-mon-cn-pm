// Bài tập 11.
// Tính S(n) = 1 + 1 * 2 + 1 * 2 * 3 + … + 1 * 2 * 3…* n
// Trong đó n được nhập từ người dùng.

const n = 4;

function sumN(n) {
    let result = 0;
    let temp = 1;
    for (i = 1; i <= n; i++) {
        temp = temp * i;
        result += temp;
    }
    return result;
}

console.log('T(x, n) = ', sumN(n));