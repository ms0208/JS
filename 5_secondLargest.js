let a
// a = [1, 2, 6, 8, 10, 9, 11, 11, 2, 3]
a = [10,5,9]

let n = a.length;
let largest = -Infinity
let second_largest = -Infinity
for (let i = 0; i < n; i++) {
    if (a[i] > largest) {
        second_largest = largest
        largest = a[i]

    }
    else if (a[i] > second_largest && a[i] !== largest) {
        second_largest = a[i];
    }
}
console.log("Second largest element " + second_largest);