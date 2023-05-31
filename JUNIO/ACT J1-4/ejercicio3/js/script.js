window.addEventListener("load", cargarPagina); 

function cargarPagina(){
    document.getElementById("hamburguesa").addEventListener("click", pulsa);
}

function pulsa(){
    document.getElementById("menu-responsive").classList.toggle("active");
}

