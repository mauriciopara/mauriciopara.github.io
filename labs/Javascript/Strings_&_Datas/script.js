const text = document.getElementById("texto")

const result = document.getElementById("resultOne")

//inverter texto
const inv = document.getElementById("invert")

inv.onclick = function(){
    text.type = 'text';
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
        text.type = 'text';

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

//////////////////////////////////////Maior ocorrencia 

/*const valor = document.getElementById("text_more")
const but  = document.getElementById("separe")
const TR = document.getElementById("tr")
const table = document.getElementById("acervo")
const rest = document.getElementById("chocolate")


    but.onclick = function(){
        rest.innerHTML = "ola"
        let valorPalavra = valor.value;
        const regex = /[0-9]/;
        if(regex.test(valorPalavra) || valorPalavra == '')
        {
            alert("Digite um valor válido.");
        }
        else{


            var ps = valorPalavra.split(" ").map(function(palavra){ 
                return palavra.toLocaleLowerCase().replace(/[.,]/g, ''); 
            });
            console.log(ps);

            var i = 0;
            var array_oco = [];
            var jaForam = [];
            var x = 0;
            for(palavra of ps){
                if(jaForam.indexOf(palavra) == -1){
                    let oco = (repeticoes(ps, palavra));
                    jaForam.push(palavra);
                    array_oco[x] = oco;
                }
                else{
                    x--;
                }
                i++;
                x++;
                }

            for(i=0;i<jaForam.length;i++)
            {
                let objeto_tr = TR;
                table.append(objeto_tr);
                        

                let objeto_td =document.getElementById("td1"); 
                let objeto_td2 =document.getElementById("td2"); 
                objeto_td.text(jaForam[i]);
                objeto_td2.text(array_oco[i]);
                console.log(jaForam);

                objeto_tr.append(objeto_td);
                objeto_tr.append(objeto_td2);

                
            }
            
        }


    };

    function repeticoes(ps, palavra){
        return ps.filter((v) => (v === palavra)).length;
    }

*/




///////////////////////////// MAior ocorrencia


////////////////////////////////////////////////





///////////////////////////////////// Troca


const middle = document.getElementById("bigone")
const wish = document.getElementById("one")
const final = document.getElementById("two")
const changes = document.getElementById("resultTwo")
const swap = document.getElementById("swap")

swap.onclick = function(){
    
    let alfa = middle.value

    alfa = alfa.split(' ')

    for( let i = 0; i < alfa.length; i++){
        if (alfa[i] == wish.value){
            alfa[i] = final.value
        }
    }

    alfa = alfa.join(' ')

    changes.innerHTML = alfa

}


//Conta palavras

/////////////////////////Força da senha
const forca = document.getElementById("password")

forca.onclick = function(){
    
            
        
            text.type = 'password';

            const letm = /[a-z]/;
            const letM = /[A-Z]/;
            const especiais = /[@#!$%&*()-+.,=]/;
            const numeros = /[1-9]/;
            
            if(letm.test(text.value) || letM.test(text.value) || (numeros.test(text.value) != True))
            {
                text.style.backgroundColor="red"
                result.innerHTML = "Senha fraca"
            }
            if(letm.test(text.value) && letM.test(text.value) && numeros.test(text.value))
            {
                text.style.backgroundColor="orange"
                result.innerHTML = "Senha moderada"

            }
            
            if(letm.test(text.value) && letM.test(text.value) && numeros.test(text.value)  && especiais.test(text.value))
            {
                text.style.backgroundColor="green"
                result.innerHTML = "Senha forte"
            }
            if(text.value == '')
            {
                text.style.backgroundColor="blue"
                result.innerHTML = "Não existe senha no campo acima"
            }
             

}
///////////////////////// Codificador

const code = document.getElementById("code")

code.onclick = function (){
    yale = text.value

    yale = yale.split('')

    for ( let i=0; i< text.value.length; i++){
        
        if (yale[i] == 'T' || yale[i] == 't') {if (yale[i] == 'T'){ yale[i] = 'P'}else{ yale[i] = 'p'}}
        else if (yale[i] == 'P' || yale[i] == 'p') {if (yale[i] == 'P'){yale[i] = 'T'}else{yale[i] = 't'}}
        else if (yale[i] == 'E' || yale[i] == 'e') {if (yale[i] == 'e'){ yale[i] = 'o'} else{ yale[i] = 'O'}}
        else if (yale[i] == 'O' || yale[i] == 'o') {if (yale[i] == 'O'){yale[i] = 'E'}else{yale[i] = 'e'}}
        else if (yale[i] == 'N' || yale[i] == 'n') {if (yale[i] == 'N'){yale[i] = 'L'}else{yale[i] = 'l'}}
        else if (yale[i] == 'L' || yale[i] == 'l') {if (yale[i] == 'L'){yale[i] = 'N'}else{yale[i] = 'n'}}
        else if (yale[i] == 'I' || yale[i] == 'i') {if (yale[i] == 'I'){yale[i] = 'A'}else{ yale[i] = 'a'}}
        else if (yale[i] == 'A' || yale[i] == 'a') {if (yale[i] == 'A'){yale[i] = 'I'}else{yale[i] = 'i'}}
        else if (yale[i] == 'S' || yale[i] == 's') {if (yale[i] == 'S'){yale[i] = 'R'}else{yale[i] = 'r'}}
        else if (yale[i] == 'R' || yale[i] == 'r') {if (yale[i] == 'R'){yale[i] = 'S'}else{ yale[i] = 's'}}
    }
    yale = yale.join('')
    result.innerHTML = yale

}

///////////////////////// Distancia entre datas

const data1 = document.getElementById("done")

const daysgone = document.getElementById("birthday")
const retorna = document.getElementById("resultThree")

daysgone.onclick = function(){
    let d = new Date(data1.value)
    let year = d.getFullYear()
    let d2 = new Date()
    let yeartoday = d2.getFullYear()
    retorna.innerHTML = "Você possui "+ calculaIdade(d,d2) +" anos de idade."
}


function calculaIdade(nascimento, hoje){
    return Math.floor(Math.ceil(Math.abs(nascimento.getTime() - hoje.getTime()) / (1000 * 3600 * 24)) / 365.25);
}

/////////////////////////Imprime por extenso

const ex = document.getElementById("data")

ex.onclick = function(){
    var dataset = new Date(data1.value)
    var horas = dataset.getHours();
    var minutos = dataset.getMinutes();
    var segundos = dataset.getSeconds(); 
    var dia = dataset.getDate()+1; 
    var mes = dataset.getMonth();
    var ano = dataset.getFullYear();  
    var Dia = dataset.getDay(); 
    var Mes = dataset.getUTCMonth();

    if (minutos < 10)
    minutos = "0" + minutos
    if (segundos < 10)
    segundos = "0" + segundos
    if (dia < 10)
    dia = "0" + dia
    if (mes < 10)
    mes = "0" + mes

    arrayDia = new Array();
    arrayDia[0] = "Domingo";arrayDia[1] = "Segunda-Feira";arrayDia[2] = "Terça-Feira";arrayDia[3] = "Quarta-Feira";arrayDia[4] = "Quinta-Feira";arrayDia[5] = "Sexta-Feira";arrayDia[6] = "Sábado";

    var arrayMes = new Array();
    arrayMes[0] = "Janeiro";arrayMes[1] = "Fevereiro";arrayMes[2] = "Março";      arrayMes[3] = "Abril";arrayMes[4] = "Maio";arrayMes[5] = "Junho";arrayMes[6] = "Julho";arrayMes[7] = "Agosto";arrayMes[8] = "Setembro";arrayMes[9] = "Outubro";arrayMes[10] = "Novembro";arrayMes[11] = "Dezembro";
    retorna.innerHTML = arrayDia[Dia+1] + ", " + (dia) + " de " + arrayMes[Mes] + " de " + ano


}

/////////// Distancia entre semanas

const d1 = document.getElementById("distance1")
const d2 = document.getElementById("distance2")
const distance = document.getElementById("weeks")
const retornadistance = document.getElementById("resultFourth")

distance.onclick = function(){
    
    
    
        let a = new Date(d1.value)
        let b = new Date(d2.value)
        weeks = Math.ceil(Math.abs(a - b) / (1000 * 60 * 60 * 24 * 7));

        retornadistance.innerHTML= 'A distância corresponde a: '+weeks+' semana(s)'
    } 