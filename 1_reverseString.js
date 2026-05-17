function swap(arr,a,b){
    let temp 
    temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}
let a  
a = "Deepak" // string 
let arr = a.split("") // Strings to array


let n = arr.length; // length is a property 

for(let i = 0;i<n/2;i++)
{
    swap(arr,i,n-1-i)
}
a = arr.join("") // array to string 
console.log(a)