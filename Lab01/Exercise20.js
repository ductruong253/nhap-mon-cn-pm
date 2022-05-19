/* Bài tập 20.
Tính S(x, n) = 1 + x + (x*3)/3! + (x*5)/5! + ... + (x*(2n+1))/((2n+1)!)
Trong đó x, n được nhập từ người dùng.*/

/*Giai thich:
- Do (x*(2*n+1))/((2*n+1)!) <=> x / (2*n)!
- Nen luc nay S(n) = 1 + x + x/2! + x/4! + ... + x / (2*n)!
*/

const x = 2;
const n = 4;

function giaiThua(n) {
    if (n == 1) return 1
    else return (n * giaiThua(n - 1));
}


function sumT(x, n) {
    result = 1 + x;
    for (i = 1; i <= n; i++) {
        result += x / giaiThua(2 * i);
    }
    return result;
}
console.log('T(x, n) = ', sumT(x, n));