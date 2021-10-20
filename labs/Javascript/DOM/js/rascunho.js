
window.onload = function () {
    let retorna = " ";

    receitasList.forEach(receita =>{
        let a = '';
        let b = '';

        receita.preparo.forEach((prepara) =>{
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(prepara))
            a += li.outerHTML;
        })

        console.log(a)

        receita.ingredientes.forEach((ingrediente) =>{
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(ingrediente))
            b += li.outerHTML;
        })

        console.log(b)
        retorna +=` 
        <div id =receita>
        <h1>${receita.nome} </h1>
        <img src = "${receita.foto} ">
        <h3>${receita.descricao}</h3>
        <h2> Preparo: <h2/> <ol>${a}</ol> 
        <h2> Ingredientes: <h2/> <ol>${b}</ol> 
        </div>
     `
    });

    
    document.querySelector('body').innerHTML = retorna;
    





}


window.onload = function () {
    let body = document.getElementsByTagName("body")[0];
    console.log(body);
    for (receita of receitasList) {
        body.appendChild(montaDiv(receita));
    }
   
}

function montaDiv(receita) {
    let divReceita = document.createElement("div");

    let Listaul = document.createElement("ul")

    divReceita.classList.add("receita");
    let titulo = document.createElement("h3");
    let tituloText = document.createTextNode(receita.nome);
    let descricao = document.createElement("p");
    let descricaoText = document.createTextNode(receita.descricao);
    let foto = document.createElement("img");
    foto.src = receita.foto;
    

   

    titulo.appendChild(tituloText);
    descricao.appendChild(descricaoText);
    divReceita.appendChild(titulo);
    divReceita.appendChild(descricao);
    divReceita.appendChild(foto); 




     receita.preparo.forEach((preparo)=> {
        let prepare = document.createElement("li");
        let prepareText = document.createTextNode(preparo);
        prepare.appendChild(prepareText)
        divReceita.appendChild(prepare)
        
        
    });

    receita.ingredientes.forEach((ingrediente)=> {
        let ingre = document.createElement("li");
        let ingreText = document.createTextNode(ingrediente);
        ingre.appendChild(ingreText)
        divReceita.appendChild(ingre)
    
        
        
    });
    


      
    return divReceita;
}

window.onload = function () {
    let retorna = " ";

    receitasList.forEach(receita =>{
        let a = '';
        let b = '';

        receita.preparo.forEach((prepara) =>{
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(prepara))
            a += li.outerHTML;
        })

        console.log(a)

        receita.ingredientes.forEach((ingrediente) =>{
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(ingrediente))
            b += li.outerHTML;
        })

        console.log(b)
        retorna +=` 


        <div id =receita class = "container">


        <h1>${receita.nome} </h1>
        <h3>${receita.descricao}</h3>

        <img src = "${receita.foto} ">

            
            <h2> Preparo: </h2> 
            <ol>${a}</ol> 
            
            <h2> Ingredientes: </h2> 
            <ul>${a}</ul> 
            
        </div>
     `
    });

    
    document.querySelector('body').innerHTML = retorna;
    





}
