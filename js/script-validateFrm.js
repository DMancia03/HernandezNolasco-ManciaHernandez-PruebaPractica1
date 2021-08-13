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

        if(errores > 0){
            alert("Llene correctamente los campos.");
        }else{
            var candidato = new Persona(txtNombres.value, txtApellidos.value, dtNacimiento.value, rdbGenero.value, stcPaisNacimiento.value , txtTelefono.value, emailCandidato.value, txtCelular.value, sltPResidencia.value, sltPResidencia.value, txtDomicilio.value );
            alert("correcto");
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