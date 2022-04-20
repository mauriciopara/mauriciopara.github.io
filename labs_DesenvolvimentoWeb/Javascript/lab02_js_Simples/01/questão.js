let number1 = [1,2,3]
let number2 = [2,2,2]
let number3 = [1,2,3,4,5,6]

//sum




let sum1  = number1 .reduce(function(acum,value){
    return acum + value
}, 0)

console.log(sum1)

let sum2  = number2 .reduce(function(acum,value){
    return acum + value
}, 0)

console.log(sum2)

let sum3  = number3 .reduce(function(acum,value){
    return acum + value
}, 0)

console.log(sum3)

//sumodss

let acum = 0

number1.forEach(function(number, indice){
    if (number1[indice] % 2 != 0){
        acum = acum + number1[indice]}
    
})


console.log(acum)
acum = 0



number2.forEach(function(number, indice){
    if (number2[indice] % 2 != 0){
        acum = acum + number2[indice]}
    
})

console.log(acum)
acum = 0

number3.forEach(function(number, indice){
    if (number3[indice] % 2 != 0){
        acum = acum + number3[indice]}
    
})

console.log(acum)

//product

m = 1

number1.forEach(function(number, indice){
    
    m = m * number1[indice]
    
})

console.log(m)

m = 1

number2.forEach(function(number, indice){
    
    m = m * number2[indice]
    
})

console.log(m)

m = 1

number3.forEach(function(number, indice){
    
    m = m * number3[indice]
    
})

console.log(m)