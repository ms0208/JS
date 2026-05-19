function fibonacci(n)
{
    let a = 0
    let b = 1
    let c = a + b
    console.log(a)
    console.log(b)
    for(let i=0;i<n;i++)
    {
        a = b
        b = c 
        c = a+b
        console.log(c)
    }
}
fibonacci(20)