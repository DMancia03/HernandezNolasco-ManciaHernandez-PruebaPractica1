//clase para la creación del objeto 
class Persona{
    constructor(name, lastName, birthday, genre, homeCountry  ){
        this.nombre =  name; 
        this.apellido = lastName;
        this.nacimiento =  birthday;
        this.genero =   genre;
        this.pais_Nacimiento=  homeCountry; 
    }
}

var ayudante = new Persona("juan", "Perez", "4/1/2020", "Masculino", "El Salvador");
console.log(ayudante);