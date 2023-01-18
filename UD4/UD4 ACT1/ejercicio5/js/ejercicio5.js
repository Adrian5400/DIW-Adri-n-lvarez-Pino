window.addEventListener("load", cargarPagina);

function cargarPagina(){
    document.getElementById("jugadores").innerHTML = "";
    if(localStorage.getItem("jugadores")){
        let jugadores=JSON.parse(localStorage.getItem("jugadores"));
        jugadores.forEach(function(e){
        let html = `<div class="card col-4 m-3">
        <div class="card-body">
        <h5 class="card-title">${e.nombre}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${e.apellido}</h6>
        <p class="card-text">Edad: ${e.edad} </p>
        <p class="card-text">Posicion: ${e.posicion} </p>
        <p class="card-text">Equipo: ${e.equipo} </p>
        <img src="${e.imagen}" class="w-100 align-center card-img-top">
        </div>
        </div>`;

        document.getElementById("jugadores").innerHTML += html;
        });
    } else {
        console.log("No hay datos de los jugadores en el localStorage");
        var jugadores = [
            {
                nombre: "Christian", 
                apellido: "Muñoz", 
                edad: "37", 
                posicion: "bateador",
                equipo: "Sporting Alfas",
                imagen: "https://cricketspain.es/wp-content/uploads/2019/10/15-270x370.png",
            },
        
            {
                nombre: "Jorge", 
                apellido: "Lopez", 
                edad: "25", 
                posicion: "wicket keeper",
                equipo: "Royal Challengers Bangalore",
                imagen: "https://pbs.twimg.com/profile_images/1204204456092397568/sKIKwz3S_400x400.jpg",
            },
        
            {
                nombre: "Alvaro", 
                apellido: "Mendoza", 
                edad: "29", 
                posicion: "lanzador",
                equipo: "Caballeros de Kolkata",
                imagen: "https://media.gettyimages.com/id/85297342/es/foto/australian-batsman-phillip-hughes-raises-his-bat-and-helmet-as-he-celebrates-after-scoring-his.jpg?s=612x612&w=gi&k=20&c=4RgR3HPZvI_ZyGPM_9n_KWz382P8lTWcGdlvfLeEvr8=",
            }
        ];
    
        localStorage.setItem("jugadores",JSON.stringify(jugadores));
    }
}