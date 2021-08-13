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

        localStorage.setItem("apellido", this.apellido);
        localStorage.setItem("nombre", this.nombre);
        localStorage.setItem("nacimiento", this.nacimiento)
        localStorage.setItem("genero", this.genero);
        localStorage.setItem("nacionalida", this.pais_Nacimiento);
        localStorage.setItem("email", this.email);
        localStorage.setItem("telefono", this.telefono)
        localStorage.setItem("celular", this.celular);
        localStorage.setItem("residencia", this.paisR);
        localStorage.setItem("departamento", this.depR);
        localStorage.setItem("direccion", this.direccion);
    }

}