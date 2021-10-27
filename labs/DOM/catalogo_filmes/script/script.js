let url = `https://rafaelescalfoni.github.io/desenv_web/filmes.json`;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            
            let filmes = JSON.parse(this.responseText);
            console.log(filmes);
            page(filmes);
            
        }
    }
    xhttp.open("GET", url);
    xhttp.send();

    function page (filmes){
        let fisrtDiv =  document.getElementById("base");

     var divNode = document.createElement("div");

        
        

        for (let i = 0; i < filmes.length; i++){
            let item = document.createElement("div");
            item.classList.add("item");
            
            let divfirst = document.createElement("div");
            divfirst.classList.add("title") 
            
            let divtitle = document.createElement("div");
            let title = document.createElement("h2");
            let titleText = document.createTextNode(filmes[i].titulo);
            title.appendChild(titleText);
            divtitle.appendChild(title)
            divfirst.appendChild(divtitle);
            
            let ind = filmes[i].classificacao;
            let divind = document.createElement("div")
            divind.classList.add("Indicacoes")
            let number = document.createElement("p")
            if (ind == 0){
                Text  = document.createTextNode("L")
                number.appendChild(Text)
                divind.appendChild(number)
                number.classList.add("green");

            }
            else if(ind < 14){
                Text  = document.createTextNode(ind)
                number.appendChild(Text)
                divind.appendChild(number)
                number.classList.add("yellow");
            }
             else if(ind >= 14 && ind < 18){
                Text  = document.createTextNode(ind)
                number.appendChild(Text)
                divind.appendChild(number)
                number.classList.add("yellow");
            }
            else{
                Text  = document.createTextNode(ind)
                number.appendChild(Text)
                divind.appendChild(number)
                number.classList.add("red");

            }
            divfirst.appendChild(divind);


            let foto = document.createElement("img");
            foto.src = filmes[i].figura;

            foto.classList.add("firstImage");
            

            let preview = document.createElement("h4");
            let previewText = document.createTextNode(filmes[i].resumo);
            preview.appendChild(previewText)
            
            let total = document.createElement("div");
            total.classList.add("stars")

            let comment = document.createElement("h5");
            let commentText = document.createTextNode("Comentários: ");
            comment.appendChild(commentText)
            total.appendChild(comment)

            filmes[i].opinioes.forEach((opina)=>{
               
                let aux = opina.rating;

                for(let j = 1; j <= aux; j++){
                let img = document.createElement("img");
                img.src= "https://mauriciopara.github.io/labs/DOM/catalogo_filmes/imagens/star.svg";
                total.appendChild(img)
                }
                

                let description = document.createElement("p");
                let descriptionText = document.createTextNode(opina.descricao);
                description.appendChild(descriptionText)
                total.appendChild(description)
                
            })


            let divUl = document.createElement("div");
            divUl.classList.add("listas");

            let divul1 = document.createElement("div");
            let title1 = document.createElement("h4");
            title1.classList.add("h4Listas")
            let titlet1 = document.createTextNode("Gênero");
            title1.appendChild(titlet1);
            divul1.appendChild(title1);
            let list = document.createElement("ul");
            
            filmes[i].generos.forEach((gener)=>{
                
                let li = document.createElement("li");
                let liText = document.createTextNode(gener);
                li.appendChild(liText);
                list.appendChild(li);
                divul1.appendChild(list)
                divUl.appendChild(divul1);
                
            })


            let divul2 = document.createElement("div");
            let title2 = document.createElement("h4");
            let titlet2 = document.createTextNode("Elenco");
            title2.appendChild(titlet2);
            title2.classList.add("h4Listas")
            let list2 = document.createElement("ul");
            divul2.appendChild(title2)

            filmes[i].elenco.forEach((people)=>{
                
                let li = document.createElement("li");
                let liText = document.createTextNode(people);
                li.appendChild(liText);
                list2.appendChild(li);
                divul2.appendChild(list2)
                divUl.appendChild(divul2)
            })



            
            let ul = document.createElement("ul");
            let divul3 = document.createElement("div");
            let title3 = document.createElement("h4");
            title3.classList.add("h4Listas")
            let titlet3 = document.createTextNode("Semelhantes");
            title3.appendChild(titlet3)
            divul3.appendChild(title3)
            filmes[i].titulosSemelhantes.forEach( (titulos) => {
                if(titulos != undefined){
                    
                    let aux = titulos;
                    let li = document.createElement("li");
                    let liText = document.createTextNode(filmes[aux].titulo);
                    li.appendChild(liText);
                    ul.appendChild(li);
                    divul3.appendChild(ul)
                    divUl.appendChild(divul3);     
                }
            });
            
            let hr = document.createElement("hr");
            let hr2 = document.createElement("hr");

            fisrtDiv.appendChild(item);
            item.appendChild(foto);
            item.appendChild(divfirst); 
            item.appendChild(preview);
            item.appendChild(hr);
            item.appendChild(total);
            item.appendChild(hr2);
            item.appendChild(divUl);
            
        }
        
    }