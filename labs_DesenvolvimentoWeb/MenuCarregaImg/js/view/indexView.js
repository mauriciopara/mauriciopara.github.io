/**
 * Scripts de view determinam como será apresentado
 * o seu modelo de dados na tela
 * 
 */

/**
 * Define como os itens serão carregados na tela
 * @param {lista de itens} foods 
 */
function createItems(foods) {
    //recupera o container dos itens
    let menu = document.querySelector("#menu");
    //apagando os itens atuais do DOM
    menu.innerHTML = "";
    foods.forEach(food => {
        let figFood = document.createElement("figure");
        figFood.id = `food-${food.id}`;
        
        figFood.innerHTML =`<div class="edit"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQhJREFUSEvFlOENAUEQhT8V0AEqoAQ6oQQV0AEd0IESKIEO6EAH5MlNMhl3l909Yn9J3Lzv7ezM6/Hj0/uxPhEwA/bAqBB8A5bA2eojQB8MC8WtTBrjJsCz+qO0dR/1USgVMACOwAq4uBt/DbAB1sADmDtIZ4CcbyvnO2AKaDAE0ukEkPipElVb5FzHxDsBvLiErsG5PUPRDVLFi26QI14EsGlpa4vfy+wWGaCp53HpswG5qfF/gGa6X2Pb5t5mPj6+L7n7NK6L60NDovrlsoWLXiS+aIvrup7LrfJ94jJHEZH08Kmx7CGpI/s2mwrQtwbRbx9wrZOWAzBIDLivAnL3IqtF2eIqeAGlTUsZgC2BbAAAAABJRU5ErkJggg=="/> </div> <img src="${food.image}" alt="${food.name}">
                <figcaption>${food.name}</figcaption>`;
        menu.appendChild(figFood);
    });
}

function save() {
    document.querySelector('#save-food').blur();
    return Object.fromEntries(new FormData(formFood));
}

export default { createItems, save };