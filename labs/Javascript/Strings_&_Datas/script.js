const text = document.getElementById("texto")

const result = document.getElementById("resultOne")

//inverter texto
const inv = document.getElementById("invert")

inv.onclick = function(){
    let str = text.value
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    result.innerHTML= newString;
    
}

//vogais em negrito

const vog = document.getElementById("strong")

vog.onclick = function(){
   

        let frase = "";
        let arm = text.value;

        for (var i = 0; i < arm.length; i++) {
          if (arm[i] == "A" || arm[i] == "a" || arm[i] == "E" || arm[i] == "e" || arm[i] == "I" || arm[i] == "i" || arm[i] == "O" || arm[i] == "o" || arm[i] == "u" || arm[i] == "U" ) {
             frase += arm[i].bold();
        }else
        {
            frase += arm[i];
        }
        }

        result.innerHTML = frase
        console.log(frase)//teste
}

// separa em tabela


//Conta palavras

// Distancia entre datas
const data1 = document.getElementById("one")
const data2 = document.getElementById("two")
const daysgone = document.getElementById("birthday")
const retorna = document.getElementById("resultThree")

daysgone.onclick = function(){
    let d = new Date(data1.value)
    let year = d.getFullYear()
    let d2 = new Date()
    let yeartoday = d2.getFullYear()
    retorna.innerHTML = calculaIdade(d,d2)
}


function calculaIdade(nascimento, hoje){
    return Math.floor(Math.ceil(Math.abs(nascimento.getTime() - hoje.getTime()) / (1000 * 3600 * 24)) / 365.25);
}

