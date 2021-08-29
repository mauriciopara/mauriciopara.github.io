let ent1 = [0,100]
let result = []
let acum = 0

console.log("Primos em um intervalo de 0 a 100:")

ent1.forEach(function(number, indice){
    if (ent1.length == 1){
        var value = ent1[0]
    
        for (let example = 1; example <= 1000; example++ ){
            if(value!=0){
                let i= 1;
                let control = 0
                while(i<=1000){
                if(example%i==0){
                control = control + 1
                }
                i = i + 1
                }
                if(control == 2){
                value = value - 1
                console.log(example)
                 }}}

    }
    else{
        
        

        if(acum == 0)
        {for(i=ent1[0]; i<=ent1[1]; i++){
                
                let control = 0
                let x = 0

                while(x<=1000){
                    if(i%x==0){
                        control = control + 1
                }
                    x = x + 1
                }
                    if(control == 2){
                
                        console.log(i)
                 }}
                 acum += 1}
    }







    })
    
   





