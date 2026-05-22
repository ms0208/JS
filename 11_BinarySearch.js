function binarysearch(arr, left, right, key) {
    while (left <= right) {
      let mid = Math.floor((left + right) / 2) // to remove decimal part only give in integer form .
        if (arr[mid] === key) {
            return mid
        }
        else if (arr[mid] > key) {
            right = mid-1;
        }
        else {
            left = mid + 1 ;
        }
    }
    return -1
}
let arr = [11, 12, 13, 14, 15, 16, 17]
let key = 14
console.log(binarysearch(arr, 0, arr.length-1, key))
