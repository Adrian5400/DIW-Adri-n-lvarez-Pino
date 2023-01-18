if(localStorage.getItem("jugador")){
    let jugador=JSON.parse(localStorage.getItem("jugador"));
    console.log(jugador);
} else {
    console.log("No hay datos del jugador en el localStorage");
    var jugador = {
        nombre: "Christian", 
        apellido: "Muñoz", 
        edad: "37", 
        posicion: "bateador",
        equipo: "Sporting Alfas",
        imagen: "https://cricketspain.es/wp-content/uploads/2019/10/15-270x370.png"
    };

    localStorage.setItem("jugador",JSON.stringify(jugador));
}


