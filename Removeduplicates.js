function removeDuplicates(arr) {
    let count = {};
    let result = [];

    for (let i = 0; i < arr.length; i++) {

        if (count[arr[i]]) {
            count[arr[i]]++;
        } else {
            count[arr[i]] = 1;
            result.push(arr[i]);
        }
    }

    return result;
}

let a = [1, 2, 3, 4, 5,5, 6, 7, 7, 8, 8];

console.log(removeDuplicates(a));