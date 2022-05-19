/*
Bài tập 17.
Tính S(n) = n!
Trong đó n được nhập từ người dùng.
*/

const n = 5;

function sumT(n) {
    let result = 1;
    for (i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log('T(x, n) = ', sumT(n));