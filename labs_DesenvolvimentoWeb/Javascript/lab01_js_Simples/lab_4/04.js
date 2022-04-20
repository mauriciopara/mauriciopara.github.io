function fibonacci() {
    let next = 0;
    let previous = 0;
    let i = 0;
    

        while (i<=100){
            if (next == 0){
                next = next + 1;
            }
            console.log(next)
            i++;
            next = next + previous;
            previous = next - previous;
            
        }


}
fibonacci()