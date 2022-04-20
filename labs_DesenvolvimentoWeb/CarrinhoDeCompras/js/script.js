window.onload = function() {
    //carregando os itens do menu: menu é um array do menu.js
    loadMenu(menu);
    //caso haja algum elemento selecionado
    loadCashRegister();
    //recupere todos os items do DOM
    let items = document.querySelectorAll(".item");
    
    //para cada um dos itens recuperados, atribua 
    //a função addCart
    items.forEach(item => {
        item.onclick = addCart;
    });

    let btClear = document.getElementById("clearRegisterCash");
    btClear.onclick = function() {
        localStorage.clear();
        loadCashRegister();
    }
}

/* ========================================
    FUNÇÕES PRINCIPAIS 
   ======================================== */
   
//identifica o item clicado no menu e salva no carrinho de compras
function addCart(){
    //descobre o item clicado
    let chosenItem = this;
    let itemId = chosenItem.id;
    //salva no localStorage
    saveItem(itemId);
    //sempre que alguma alteração ocorre, é preciso 
    //atualizar a caixa registradora
    loadCashRegister();
}


/* ========================================
    FUNÇÕES DE MANIPULAÇÃO DO STORAGE 
   ======================================== */

//Adiciona itens no localStorage
function saveItem(item) {
    //buscando o que estiver armazenado na localStorage
    let cart = localStorage.getItem("shoppingCart");
    //se o carrinho estiver vazio, crie um array vazio, caso contrário
    // converta a string armazenada em um array e armazene em "cart"
    cart = (cart === "" || cart === null)?[]:cart.split(",");
    //armazenando o novo item em cart
    cart.push(item);
    //atualizando o localStorage com o cart
    localStorage.setItem("shoppingCart", cart);
}

// Atualiza os itens no storage na medida em que excluimos 
// da caixa registradora
function updateStorage(item){
    //retorna a posição na <ol> para definir o indice do shoppingCart a ser removido
    //let selectedItemList = document.querySelector(".selected-items");
    let index = Array.prototype.indexOf.call(item.parentNode.children, item);
    //recuperando o array shoppingCart; lembrando que ele vem como uma string
    // e precisa ser convertido em array
    let shoppingCart = localStorage.getItem("shoppingCart").split(",");
    //removendo o item do array
    shoppingCart.splice(index, 1);
    //atualizando o localStorage
    localStorage.setItem("shoppingCart", shoppingCart);
}

/* ========================================
    FUNÇÕES DE MANIPULAÇÃO DO DOM 
   ======================================== */
/* Carrega dinamicamente os itens 
    de menu no DOM
*/

//delegação de eventos clique para li da caixa registradora
document.addEventListener("click", function(event){
    if (event.target && event.target.matches(".selected-items li")) {
        //event.target é o li selecionado
        removeItem(event.target);
    }
});

function loadMenu(menuList){
    let divMenu = document.querySelector(".menu");   
    menuList.forEach(item =>{
        let divContainer = document.createElement("div");
        divContainer.classList.add("col-md-6");
        divContainer.innerHTML = `<div id="${item.id}" class="item">
            <figure><img src="${item.photo}">
                <figcaption>${item.title}</figcaption>
            </figure>
            <div class="item-description">${item.description}
                <span>${item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div></div>`;   
        divMenu.appendChild(divContainer);
    });
}

//carrega a caixa registradora com os itens comprados
function loadCashRegister(){
    let items = localStorage.getItem("shoppingCart"); //string
//se a lista estiver vazia, zera o caixa, apaga a lista e pára tudo
    if(items==="" || items === null) {
        document.querySelector(".total").innerHTML = (0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        //ol da caixa registradora
        let listObj = document.querySelector(".selected-items");
        //remove todos os elementos para recomeçar a lista
        listObj.innerHTML = "";
        return false;
    }
    let itemsList = items.split(",");
    loadItem(itemsList);
    return true;
}

function loadItem(itemsList){
    let totalBill = 0;
    //ol da caixa registradora
    let listObj = document.querySelector(".selected-items");
    //remove todos os elementos para recomeçar a lista
    listObj.innerHTML = "";
    itemsList.forEach(itemId =>{
        let item = getProductById(itemId);
        totalBill += item.price;
        listObj.innerHTML += `<li>${item.title}
            <span>${item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}
            </span></li>`;
    });
    //atualizando o valor total da compra
    document.querySelector(".total").innerHTML = totalBill.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function removeItem(selectedItem) {
    updateStorage(selectedItem);
    let priceStr = selectedItem.querySelector("span").innerHTML;
    let totalBillStr = document.querySelector(".total").innerHTML;
    //convertendo para numero:
    //substr remove R$; replace troca "," por "."
    //os valores estão armazenados com formato R$&nbsp; - por isso substr(8) 
    let price = priceStr.substr(8).replace(",","."); //R$&nbsp;18,00 >> 18.00
    let totalBill = Number(totalBillStr.substr(8).replace(",","."));
    totalBill -= price;
    document.querySelector(".total").innerHTML = totalBill.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    //removendo da lista
    selectedItem.parentNode.removeChild(selectedItem);
}