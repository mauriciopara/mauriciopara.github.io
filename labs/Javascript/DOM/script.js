window.onload = function () {
    let body = document.getElementsByTagName("body")[0];
    console.log(body);
    for (receita of receitasList) {
        body.appendChild(montaDiv(receita));
    }
    /*
    receitasList.forEach(function (receita){
        console.log(receita);
    })
    */


}

function montaDiv(receita) {
    let divReceita = document.createElement("div");
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
    return divReceita;
}
/*
<div class="receita">
        <h3>(receita.nome) </h3>
        <p>(receita.descricao)</p>
        <img src="<<receita.foto>>" alt="receita.foto">
        <h4>receita.preparo (array a ser iterado)</h4>
        <ol>
            <li></li>
        </ol>
        <h4>receita.ingredientes (array que precisa ser iterado)</h4>
        <ul>
            <li>1kg de cebola</li>
        </ul>
    </div>
    */ 