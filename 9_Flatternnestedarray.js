// Method-1
// let arr = [1, [2, 3], [4, [5, 6]]];
// console.log(arr.flat(2));
// Method-2
function flatternarray(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) { 
            let temp = flatternarray(arr[i])
            for(let j=0;j<temp.length;j++)
            {
                result.push(temp[j]);
            }
        } else {
            result.push(arr[i]);
        }
        
    }
    return result;
}
let arr = [1, [2, 3], [4, [5, 6]]];
console.log(flatternarray(arr));

