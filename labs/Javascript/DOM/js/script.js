window.onload = function () {
    let body = document.getElementsByTagName("body")[0];
    console.log(body);
    for (receita of receitasList) {
        body.appendChild(montaDiv(receita));
    }
   
}

function montaDiv(receita) {
    let divReceita = document.createElement("div");
    divReceita.classList.add("receita");

    let listaUl = document.createElement("ol");
    let divUl =document.createElement("div");
    divUl.classList.add("listas");
    let listaOl = document.createElement("ul");
    let divOl =document.createElement("div")
    divOl.classList.add("listas");
    

    
    let titulo = document.createElement("h3");
    let tituloText = document.createTextNode(receita.nome);
    let descricao = document.createElement("p");
    let descricaoText = document.createTextNode(receita.descricao);
    let foto = document.createElement("img");
    foto.src = receita.foto;
    let titulo1 = document.createElement("h4");
    let titulo1Text = document.createTextNode("Preparo")
    let titulo2 = document.createElement("h4");
    let titulo2Text = document.createTextNode("Ingredientes")
    
    


 receita.preparo.forEach((preparo)=> {
        let prepare = document.createElement("li");
        let prepareText = document.createTextNode(preparo);
        prepare.appendChild(prepareText)
        listaUl.appendChild(prepare)});

    receita.ingredientes.forEach((ingrediente)=> {
        let ingre = document.createElement("li");
        let ingreText = document.createTextNode(ingrediente);
        ingre.appendChild(ingreText)
        listaOl.appendChild(ingre) });







    
    titulo.appendChild(tituloText);
    descricao.appendChild(descricaoText);
    divReceita.appendChild(titulo);
    divReceita.appendChild(descricao);
    divReceita.appendChild(foto); 
    titulo1.appendChild(titulo1Text);
    titulo2.appendChild(titulo2Text);
    divUl.appendChild(titulo1)
    divOl.appendChild(titulo2)
    divUl.appendChild(listaUl);
    divOl.appendChild(listaOl);
    divReceita.appendChild(divUl);
    divReceita.appendChild(divOl);
    
    

   
    
    return divReceita;
}





// /* <div class="receita">
//         <h3>(receita.nome) </h3>
//         <p>(receita.descricao)</p>
//         <img src="<<receita.foto>>" alt="receita.foto">
//         <h4>receita.preparo (array a ser iterado)</h4>
//         <ol>
//             <li></li>
//         </ol>
//         <h4>receita.ingredientes (array que precisa ser iterado)</h4>
//         <ul>
//             <li>1kg de cebola</li>
//         </ul>
//     </div> */