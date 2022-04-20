$(function(){
    fetch('https://rafaelescalfoni.github.io/desenv_web/receitas.json')
    .then(res => res.json())
    .then(data => {
        let aux = '';
        data.forEach(receita => {
       
            const sec = $('<section>');

            const h1 = $('<h1>');
            h1.append(receita.nome);
            sec.append(h1);

            const h2 = $('<h2>');
            h2.append(receita.descricao);
            sec.append(h2);

         
            

            sec.append(`<img src ="${receita.foto}">`);
            
            sec.append(`<h3> Ingredientes </h3>`);

            const ul = $('<ul>');
            receita.ingredientes.forEach((ingrediente) =>{
                        const li = $("<li>");
                        li.text(ingrediente);
                        ul.append(li);
                    })
            sec.append(ul);

            sec.append(`<h3> Preparo</h3>`);
            const ol = $('<ol>');
            receita.preparo.forEach((preparo) =>{
                        const li = $("<li>");
                        li.text(preparo);
                        ol.append(li);
                    })
            sec.append(ol);

            


       
            
            $('body').append(sec);
        })
    })
})