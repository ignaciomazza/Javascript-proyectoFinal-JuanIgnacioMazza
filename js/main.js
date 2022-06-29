class equipo{
    constructor(ciudad, nombre){
        this.ciudad = ciudad;
        this.nombre = nombre;
        this.equipo = ciudad + " " + nombre;
    }
}

const equipos = [];

equipos.push(new equipo("atlanta", "hawks"));
equipos.push(new equipo("boston", "celtics"));
equipos.push(new equipo("brooklyn", "nets"));
equipos.push(new equipo("charlotte", "hornets"));
equipos.push(new equipo("chicago", "bulls"));
equipos.push(new equipo("cleveland", "cavaliers"));
equipos.push(new equipo("dallas", "mavericks"));
equipos.push(new equipo("denver", "nuggets"));
equipos.push(new equipo("detroit", "pistons"));
equipos.push(new equipo("golden state", "warriors"));
equipos.push(new equipo("houston", "rockets"));
equipos.push(new equipo("indiana", "pacers"));
equipos.push(new equipo("los angeles", "clippers"));
equipos.push(new equipo("los angeles", "lakers"));
equipos.push(new equipo("memphis", "grizzlies"));
equipos.push(new equipo("miami", "heat"));
equipos.push(new equipo("milwakee", "bucks"));
equipos.push(new equipo("minesota", "timberwolves"));
equipos.push(new equipo("new orleans", "pelicans"));
equipos.push(new equipo("new york", "knicks"));
equipos.push(new equipo("oklahoma", "city thunder"));
equipos.push(new equipo("orlando", "magic"));
equipos.push(new equipo("philadelphia", "76ers"));
equipos.push(new equipo("phoenix", "suns"));
equipos.push(new equipo("portland", "trail blazers"));
equipos.push(new equipo("sacramento", "kings"));
equipos.push(new equipo("san antonio", "spurs"));
equipos.push(new equipo("toronto", "raptors"));
equipos.push(new equipo("utah", "jazz"));
equipos.push(new equipo("washington", "wizards"));



let equipoUsuario = prompt("De que euipo es el jugador del que busca la zapatilla?");

const existeEquipo = equipos.some((el) => el.ciudad == equipoUsuario || el.nombre == equipoUsuario || el.equipo == equipoUsuario);

if(existeEquipo){
    const buscarEquipo = equipos.filter((el) => el.ciudad == equipoUsuario || el.nombre == equipoUsuario || el.equipo == equipoUsuario);
    let aparecerEquipo = document.getElementById(buscarEquipo[0].nombre);
    aparecerEquipo.classList.toggle("none");
}