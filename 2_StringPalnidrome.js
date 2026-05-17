let a
a = "abcba"

let arr = a.split("") // array convert from string 
let n = arr.length;

let isPalindrome = true
for (let i = 0; i < n / 2; i++) {
    if (arr[i] !== arr[n - 1 - i]) {
        isPalindrome = false;
        break;
    }
}
if (isPalindrome) {
    console.log("String is Palindrome")
}
else {
    console.log("String is not Palindrome")
}