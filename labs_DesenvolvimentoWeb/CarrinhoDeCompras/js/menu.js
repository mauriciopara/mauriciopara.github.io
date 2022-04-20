menu = [{id:1,photo:"./img/capuccino.png",title:"Capuccino",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",price: 13.00}
        , {id:2, photo:"./img/espresso.png",title:"Espresso",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",price:3.99}
        , {id:3, photo:"./img/chococcino.png",title:"Chococcino",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",price:16.00}
        , {id:4,photo:"./img/frapuccino.png",title:"Frapuccino",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",price:18.00}
        , {id:5, photo:"./img/chocolate_quente.png",title:"Chocolate",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",price:13.00}
        , {id:6, photo:"./img/frape.png",title:"Frape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",price:11.50}
        , {id:7, photo:"./img/suco_laranja.png",title:"Suco de Laranja",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",price:7.00}
        , {id:8, photo:"./img/acai.png",title:"Açai",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",price:13.75}
        , {id:9, photo:"./img/bolo_laranja.png",title:"Bolo de Laranja",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",price:8.00}];

//retorna o item escolhido
function getProductById(productId){
    return menu.find(item =>{
        return item.id == productId;
    })
}