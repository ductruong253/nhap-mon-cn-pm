// Bài tập 1.
// Tính S(n) = 1 + 2 + 3 + 4 + … + n
// Trong đó n được nhập từ người dùng với 3 < n và n < 50

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Nhap n: ', n => {
    if (n <= 5) console.log('So nhap vao khong hop le.')
    else console.log(sumN(n));
    readline.close();
});

function sumN(n) {
    let sum = 0;
    for (i = 0; i <= n; i++) {
        console.log((2 * i + 1) / (2 * i + 2));
        sum += (2 * i + 1) / (2 * i + 2);
    }
    return sum;
}