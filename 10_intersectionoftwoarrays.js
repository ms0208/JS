// Method -1
// function nestedarray(arr1,arr2){
// let result = []
// for(let i=0;i<arr1.length;i++)
// {
//     for(let j=0;j<arr2.length;j++)
//     {
//         if(arr1[i]===arr2[j])
//         {
//             result.push(arr1[i])
//         }
//     }
// }
// return result
// }
// let arr1 = [1,2,3,4,5,6]
// let arr2 = [5,6,7]
// console.log(nestedarray(arr1,arr2))

// Method 2
function nestedarray(arr1,arr2){
    let result = []
    let count = {}
    for(let i=0;i<arr2.length;i++)
    {
        count[arr2[i]] = true;
    }
    for(let i=0;i<arr1.length;i++)
    {
        if(count[arr1[i]]) // it print only those who are true 
        {
            result.push(arr1[i])
        }
    }
    return result;
}
let arr1 = [1,2,3,4,5,6]
let arr2 = [5,6,7]
console.log(nestedarray(arr1,arr2))
