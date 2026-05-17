// Largest element in array

let a 
a = [5,6,3,8,1,2]

let n = a.length
let largest = a[0]
for(let i=0;i<n;i++)
{
    // TO SORT ARRAY
    if(a[i]>largest)
    {
        largest = a[i]
    }
}
console.log("Largest element is: "+largest)

