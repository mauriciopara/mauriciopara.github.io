

function leianome() {
    nome = prompt("Escreva seu nome:","")
       if (!nome || nome=="" || nome=="null")
         nome="Fulano(a)"
         document.write ("Olá  <b> " + nome + " </b>! Obrigado pela visita !")
       }
   leianome()
   
   
   
   
   
   //1
   
       function factorial(n) {
       return n === 0? 1: n*factorial(n-1);
       
       }
       
       
       console.log(factorial(12));