let menuVisible = false;
// funcuion que ocutlta o muestra el menui

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false
    } else {
        document.getElementById("nav").classList="";
        menuVisible=true
    }
}

function seleccionar() {
    // Oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList="";
    menuVisible = false;
}

// Funcion que aplica las anumaciones en las habilidades

function efectoHabilidades() {
    var skills = document.getElementById("skills")
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
if(distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    /* DEVELOPMENT */
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("react");
    habilidades[3].classList.add("redux");
    habilidades[4].classList.add("nodejs");
    habilidades[5].classList.add("expressjs");
    habilidades[6].classList.add("postgresql");
    habilidades[7].classList.add("scrum");
    habilidades[8].classList.add("bootstrap");
    habilidades[9].classList.add("materialui");
    /* PHOTOGRAPHY */
    habilidades[10].classList.add("lightroom");
    habilidades[11].classList.add("premierepro");
    habilidades[12].classList.add("canon");
    habilidades[13].classList.add("ia");
    /* PROFESSIONAL */
    habilidades[14].classList.add("comunicacion");
    habilidades[15].classList.add("teq");
    habilidades[16].classList.add("problemas");
    habilidades[17].classList.add("dedicación");
}}

// Detecto en scrolling para aplicar la anumacion en la barra

window.onscroll = function(){
    efectoHabilidades();
}

document-getElementById('button')


  