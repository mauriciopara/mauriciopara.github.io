window.onload = function () {
    let btProp = document.getElementById("setproperties");
    let btExecute = document.getElementById("execute");
    let btClear = document.getElementById("clear");

    btProp.addEventListener("click", populateStorage);
    btExecute.addEventListener("click", setStyle);
    btClear.addEventListener("click", clearProperties);
}


function setStyle(){
    if(localStorage.length == 0) {
        let currentColor = "red";
        let currentFont = "times";
        let currentImage = "#";
    }else{
    let currentColor = localStorage.getItem("bgcolor");
    let currentFont = localStorage.getItem("font");
    let currentImage = localStorage.getItem('image');
    let teste = document.getElementById('teste');

    teste.style.backgroundColor = currentColor;
    teste.style.fontfamily = currentFont;
    document.getElementById("image").src = currentImage;}
}

function populateStorage(){
    localStorage.setItem('bgcolor', 'white');
    localStorage.setItem('font', 'helvetca');
    localStorage.setItem('image', './rosanorte.jpg');

}

function clearProperties(){
    localStorage.clear();
}