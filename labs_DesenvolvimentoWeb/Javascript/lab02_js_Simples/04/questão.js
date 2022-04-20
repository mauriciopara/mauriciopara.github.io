


let cash = 1280;

let notas = 0;
let cinq = 0;
let vint = 0;
let ten = 0;
let fiv = 0;
let tw = 0;
console.log("Valor de saque: " + cash)
    while( cash > 0){
        while(cash>=100){
            
            cash = cash -100;
            notas += 1;

        }
        if (notas > 0){ console.log(notas+ " cédula(s) de 100")}

        while(cash>=50 && cash < 100){
          
            cash = cash-50;
            notas += 1;
            cinq += 1;
            

        }

        if (cinq> 0){ console.log((cinq)+ " cédula(s) de 50")}
        

        while(cash>=20 && cash < 50){
            cash = cash -20;
            notas += 1;
            vint += 1;
        }

        if (vint> 0){ console.log((vint)+ " cédula(s) de 20")}

        while(cash>=10 && cash < 20){
            cash = cash -10;
            notas += 1;
            ten += 1;
        }

        if (ten> 0){ console.log((ten)+ " cédula(s) de 10")}

        while(cash>=5 && cash < 10){
            
            cash = cash -5;
            notas += 1;
            fiv += 1;
        }
        if (fiv> 0){ console.log((fiv)+ " cédula(s) de 5")}
        while(cash>=2 && cash < 5){
            
            cash = cash -2;
            notas += 1;
            tw += 1;
    }
    if (tw> 0){ console.log((tw)+ " cédula(s) de 2")}

}

console.log("Total de cédulas: " + notas)

    
