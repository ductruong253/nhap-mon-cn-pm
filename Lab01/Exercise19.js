/* Bài tập 19.
Tính S(x, n) = 1 + (x*2)/2! + (x*3)/4! + ... + (x*n)/(2*n!)
Trong đó x, n được nhập từ người dùng.*/

const x = 2;
const n = 4;

function giaiThua(n) {
    if (n == 1) return 1
    else return (n * giaiThua(n - 1));
}


function sumT(x, n) {
    result = 1;
    for (i = 1; i <= n; i++) {
        result += ((x * i) * 2) / giaiThua(2 * i);
    }
    return result;
}
console.log('T(x, n) = ', sumT(x, n));