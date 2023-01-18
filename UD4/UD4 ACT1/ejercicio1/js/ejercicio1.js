var equipos = ["Royal Challengers Bangalore", "Caballeros de Kolkata", "Sporting Alfas"];

var jugador = {
    nombre: "Christian", 
    apellido: "Muñoz", 
    edad: "37", 
    posicion: "bateador",
    equipo: "Sporting Alfas",
    imagen: "https://cricketspain.es/wp-content/uploads/2019/10/15-270x370.png"
}

var jugadorJSON = JSON.stringify(jugador);

let jugador2=JSON.parse(jugadorJSON);

console.log(" Nombre: " + jugador2.nombre + " Apellido: " + jugador2.apellido + " Edad: " + jugador2.edad + " Posicion: " + jugador2.posicion + " Equipo: " + jugador2.equipo + " Imagen: " + jugador2.imagen);