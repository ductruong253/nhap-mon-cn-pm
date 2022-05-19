/**Bài tập 30.
Viết chương trình để kiểm tra chuỗi có các ký tự duy nhất hay không?
Ví dụ 01: input: “Green” -> output: False
Ví dụ 02: input: “Orange” -> output: True */

//Co phan biet Uppercase/lowercase

const str = "Orange";


function charDuplicateCheck(str) {
    let strArr = str.split('');
    let strLen = strArr.length;
    while (strLen > 1) {
        char = strArr.pop();
        if (strArr.includes(char)) return false;
        strLen = strArr.length;
    }
    return true;
}


console.log(charDuplicateCheck(str))