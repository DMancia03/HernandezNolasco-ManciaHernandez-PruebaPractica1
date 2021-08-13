//Países Centroamérica

//País
class Pais {
    departamentos = new Array();

    getDepartamento() {
        return this.departamentos;
    }
}

//Belice
class Belice extends Pais {
    
    constructor(){
        super();
        this.departamentos = [ "Belice", "Cayo", "Corozal", "Orange Walk", "Stann Creek", "Toledo" ];
    }

}

//Guatemala
class Guatemala extends Pais {

    constructor(){
        super();
        this.departamentos = [ "Alta Verapaz", 'Baja Verapaz', "Chimaltenango", "Chiquimula",
        "El Progreso", "Escuintla", "Guatemala", "Huehuetenango", "Izabal", "Jalapa", "Jutiapa",
        "Peten", "Quetzaltenango", "Quiche", "Retalhuleu", "Sacatepequez", "San Marcos", "Santa Rosa",
        "Solola", "Suchitepequez", "Totonicapan", "Zacapa" ];
    }

}

//El Salvador
class ElSalvador extends Pais {

    constructor(){
        super();
        this.departamentos = [ "Ahuachapán", "Cabañas", "Chalatenango", "Cuscatlán", "La Libertad",
        "La Paz", "La Unión", "Morazán", "San Miguel", "San Salvador", "San Vicente", "Santa Ana",
        "Sonsonate", "Usulutan" ];
    }

}

//Honduras
class Honduras extends Pais {

    constructor(){
        super();
        this.departamentos = [ "Atlántida", "Choluteca", "Colón", "Comayagua", "Copán",
        "Cortés", "El Paraíso", "Francisco Morazán", "Gracias a Dios", "Intibucá", "Islas de la Bahía", "La Paz",
        "Lempira", "Ocotepeque", "Olancho", "Santa Bárbara", "Valle", "Yoro" ];
    }

}

//Nicaragua
class Nicaragua extends Pais {

    constructor(){
        super();
        this.departamentos = [ "Atlántico Norte", "Atlántico Sur", "Boaco", "Carazo", "Chinandega",
        "Chontales", "Esteli", "Granada", "Jinotega", "León", "Madriz", "Managua", "Masaya",
        "Matagalpa", "Nueva Segovia", "Río San Juan", "Rivas" ];
    }

}

//Costa rica
class CostaRica extends Pais {

    constructor(){
        super();
        this.departamentos = [ "San José Alajuela", "Cartago", "Heredia", "Guanacaste",
        "Puntarenas", "Limón" ];
    }

}

//Panama
class Panama extends Pais {

    constructor(){
        super();
        this.departamentos = [ "Coclé", "Colón", "Chiriquí", "Los Santos", "Panamá",
        "Veraguas", "Balboa", "Bocas del Toro", "Darién", "Tulenega" ];
    }

}