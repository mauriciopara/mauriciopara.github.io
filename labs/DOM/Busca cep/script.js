window.onload =function(){
    let btexecuta = document.getElementById('executa');
    btexecuta.addEventListener("click", buscaCep);
}

function buscaCep(){
    let cep = document.getElementById("cep").value;
   
    let url = `https://api.postmon.com.br/v1/cep/${cep}`;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            
            let endereco = JSON.parse(this.responseText);
            montaUl(endereco)

        }
    }
    xhttp.open("GET", url);
    xhttp.send();

}   

function montaUl (endereco){
    let ul =document.getElementById("endereco");
    if(endereco.bairro){
        let libairro = document.createElement("li");
        let bairroText = document.createTextNode(endereco.bairro)
        libairro.appendChild(bairroText);
        ul.appendChild(libairro)
    }
    if(endereco.logradouro){
        let lilogradouro = document.createElement("li");
        let logradouroText = document.createTextNode(endereco.logradouro)
        lilogradouro.appendChild(logradouroTextt);
        ul.appendChild(lilogradouro)
    }
}