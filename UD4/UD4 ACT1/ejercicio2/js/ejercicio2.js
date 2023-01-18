var equipos = ["Royal Challengers Bangalore", "Caballeros de Kolkata", "Sporting Alfas"];

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
]

var jugadoresJSON = JSON.stringify(jugadores);

var jugadores2 = JSON.parse(jugadoresJSON);

jugadores2.forEach(function(e){
    console.table(`Jugador: ${e.nombre} ${e.apellido} ${e.edad} ${e.posicion} ${e.equipo} ${e.imagen}`);
});


