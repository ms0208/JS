function fact(a)
{
    if(a === 0 || a === 1) // base case.
    {
        return 1
    }
    let result  
    result = a * fact(a-1) // recursion

    return result
}
function fact2(b)
{
    let result  = 1
    for(let i=1 ; i<=b;i++)
    {
        result = result * i
    }
    return result
}
console.log(fact(10))
console.log(fact2(20))
