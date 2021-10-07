//////////////1 input

const input = document.getElementById("input")
const returna = document.getElementById("return")


const pri = document.getElementById("Prime")
pri.onclick = function() {

    let exemple = parseInt(input.value);
    let control = 1;
    
    
    for(let i = 1; i < exemple; i++){
        if(exemple%i == 0){
            control++;
        }
    }

    if (control == 2){
        returna.innerHTML = exemple + " é primo";
    }
    else{
        returna.innerHTML = exemple + " não é primo";
    }
        
    
    
    
        
}

const temp = document.getElementById("celcius")
temp.onclick = function(){
    t = input.value;

    let celc = (((t -32) * 5 )/ 9).toFixed(2);

    returna.innerHTML = "O temperatura "+ t +"<small>F°</small> equivale a " + celc +"<small>C°</small>";

}


////////////// 2 inputs

const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const result = document.getElementById("result")



const sum = document.getElementById("sum")
sum.onclick = function () {
    sum1 = parseInt (input1.value)
    sum2 = parseInt( input2.value)
    let sum = sum1 + sum2
    result.innerText =  "A soma corresponde  a " + sum;
    
};

const big = document.getElementById("biggest")
big.onclick = function (){

    if (input1.value > input2.value){
        result.innerHTML = input1.value + " é maior que "+ input2.value;
    }
    else if (input1.value < input2.value){
        result.innerHTML = input2.value + " é maior que "+ input1.value;
    }
    else{
        result.innerHTML = input2.value + " é igual a"+ input1.value;
    }

}

const h = document.getElementById("hipotenusa")

h.onclick = function(){
    let c1 = input1.value;
    let c2 = input2.value;

    let pitagoras = c1**2 + c2**2;

    pitagoras = Math.sqrt(pitagoras);

    result.innerHTML = "Considerando os catetos ("+c1+","+c2+") a hipotenusa é "+pitagoras;
}

const money = document.getElementById("cash");

money.onclick = function(){
    let x = parseFloat(input1.value);
    let y = parseFloat(input2.value);

    let z = x * (1 + (y / 100));

    z = z.toFixed(2);

    result.innerHTML = "Considerando o percentual de aumento "+ y + "%, o novo salário corresponde a: R$" +z;

}


///////////////// 3 inputs

const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const input5 = document.getElementById("input5");
const result2 = document.getElementById("resultGrade");
const element = document.getElementById("grade");

element.onclick = function(){
    let a = input3.value;
    let b = input4.value;
    let c = input5.value;

    let d = ((a * 2 + b *3  +c * 5)/10);

    result2.innerHTML = "A média para as notas acima corresponde a: " +d
}

