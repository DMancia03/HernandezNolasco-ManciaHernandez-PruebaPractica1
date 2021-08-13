//clase para la creación del objeto donde tendremos todas la propiedades y metodos
class Persona{
    constructor(name, lastName, birthday, genre, homeCountry , tel, email, phone, nowCountry, dep, direction ){
        this.nombre =  name; 
        this.apellido = lastName;
        this.nacimiento =  birthday;
        this.genero =   genre;
        this.pais_Nacimiento=  homeCountry; 
        this.email = email;
        this.telefono = tel;
        this.celular = phone;
        this.paisR = nowCountry;
        this.depR = dep;
        this.direccion = direction;
    }

    savePerson(){
        var json = {
            "apellido" : this.apellido,
            "nombre": this.nombre,
            "Fnacimiento" : this.nacimiento,
            "genero": this.genero,
            "paisNatal" :  this.pais_Nacimiento,
            "paisRecidencia": this.paisRecidencia,
            "Departamento": this.depR,
            "email": this.email,
            "telefono": this.telefono,
            "celular": this.celular
        };
    }

}