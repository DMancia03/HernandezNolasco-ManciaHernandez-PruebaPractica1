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

//Una clase
class candidatoInfo extends Persona{
    constructor(email){
        this.email = email;
        
    }
}