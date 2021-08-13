//Ocupando funciones, cuando se carge la página le asignamos una función al evento
//onclick del botón submit para poder validar los distintos input que tenemos en nuestro formulario
window.onload = function(){
    //Obtenemos el boton submit
    var btnSubmit = document.getElementById("btnSubmit");

    //Le asignamos la función
    btnSubmit.onclick = validateFORM;
}

//Función para validar el formulario
function validateFORM() {
    var errores = 0;
        var frmNew = document.getElementById("frmNew");
        var txtApellidos = document.getElementById("txtApellidos");
        var txtNombres = document.getElementById("txtNombres");
        var emailCandidato = document.getElementById("txtEmail");
        var dtNacimiento = document.getElementById("dtNacimiento");
        var stcPaisNacimiento = document.getElementById("pNacimiento");
        var rdbGenero = document.getElementById("rdbMasculino");
        var sltPResidencia = document.getElementById("pResidencia");
        var sltDResidencia = document.getElementById("dResidencia");
        var txtDomicilio = document.getElementById("txtDomicilio");
        var txtTelefono = document.getElementById("txtTelefono");
        var  txtCelular = document.getElementById("txtCelular");

        if(esVacio(txtApellidos) && esVacio(txtNombres) && esVacio(emailCandidato) && esVacio(dtNacimiento) && esVacio(stcPaisNacimiento) && esVacio(sltDResidencia) && esVacio(sltPResidencia) && esVacio(txtDomicilio) && esVacio(txtTelefono) && esVacio(txtCelular)){
            errores++;
        }

        if(!(esNumeroTelefono(txtTelefono)) && !(esNumeroTelefono(txtCelular))){
            errores++;
        }

        if(!(esEmail(emailCandidato))){
            errores++;
        }

        if(!(esDireccion(txtDomicilio))){
            errores++;
        }

        if(errores > 0){
            alert("Llene correctamente los campos.");
        }else{
            var candidato = new Persona(txtNombres.value, txtApellidos.value, dtNacimiento.value, rdbGenero.value, stcPaisNacimiento.value , txtTelefono.value, emailCandidato.value, txtCelular.value, sltPResidencia.value, sltDResidencia.value, txtDomicilio.value );
            candidato.savePerson();
            alert("Registro completado, puede ver los candidatos en Ver candidatos.");
        }
}

//Función para validar si el value de un input esta vacío
function esVacio(input) {
    if(input.value == ""){
        return true;
    }else{
        return false;
    }
}

//Función para validar si el value de un input tel es un número, solo se valido que
//tenga por lo menos 8 caracteres
function esNumeroTelefono(input) {
    var numero = input.value;
    if(numero.length >= 8){
        return true;
    }else{
        return false;
    }
}

//Función para validar si el value de un input email es un email con la comprobacion de caracteres
function esEmail(input) {
    var email = input.value;
    if(email.length >= 5){
        caracteres = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
        if (caracteres.test(email)){
            return true;
        } else {
            return false;
        }
    }else{
        return false;
    }
}

//Función para validar si el value de un input no es corto, por que estos datos no son cortos
function esDireccion(input) {
    var direccion = input.value;
    if(direccion.length >= 10){
        return true;
    }else{
        return false;
    }
}