//numeros romanos

function convertToRoman(num) {
    var roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    var str = '';
  
    /* Object.keys(roman) --> retorna um array cujo os  elementos são strings correspondentes para a propriedade enumerável encontrada 
    diretamento sobre o objeto.  A ordenação das propriedades é a mesma que a dada pelo loop sobre as propriedades 
    do objeto manualmente.*/

    //Math.floor --> retorna o menor número inteiro dentre o número "x".

    //Repeat() --> constrói e retorna uma nova string com um determinado número de cópias concatenadas da string original.


    for (var i of Object.keys(roman)) {
      var q = Math.floor(num / roman[i]);
      num -= q * roman[i];
      str += i.repeat(q);
    }
  
    return str;
  }

  console.log("3 =", convertToRoman(3))
  console.log("6 =", convertToRoman(6))
  console.log("9 =", convertToRoman(9))
  console.log("48 =", convertToRoman(48))
  console.log("59 =", convertToRoman(59))
  console.log("93 =", convertToRoman(93))
  console.log("575 =", convertToRoman(575))