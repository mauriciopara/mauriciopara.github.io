function even(n) 
{
    var result = 0;
    for(i = 1; i<=n; i++)
    {
    if(i%2==0){
        console.log(i)
        result = result + i}
}
}

even(1000)