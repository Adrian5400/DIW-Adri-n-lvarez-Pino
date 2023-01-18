if(localStorage.getItem("jugadores")){
    let jugadores=JSON.parse(localStorage.getItem("jugadores"));
    console.table(jugadores);
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