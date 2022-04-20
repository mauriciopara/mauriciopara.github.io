function prime() {
    
    

    for (let example = 1; example <= 1000; example++ ){
        let i= 1;
        let control = 0
        while(i<=1000){
            if(example%i==0){
            control = control + 1
            }
            i = i + 1
        }
        if(control == 2){
            console.log(example)
        }

    }
}
prime()