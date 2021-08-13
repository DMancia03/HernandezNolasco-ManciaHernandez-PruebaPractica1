window.onload = function(){
    var btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.onclick = function(){
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

        if(txtApellidos.value == ""){
            errores++;
        }
        if(txtNombres.value == ""){
            errores++;
        }
        if(emailCandidato.value == ""){
            errores++;
        }
        if(dtNacimiento.value == ""){
            errores++;
        }
        if(stcPaisNacimiento.value == ""){
            errores++;
        }
        if(rdbGenero.value == ""){
            errores++;
        }
        if(sltPResidencia.value == ""){
            errores++;
        }
        if(sltDResidencia.value == ""){
            errores++;
        }
        if(txtDomicilio.value == ""){
            errores++;
        }
        if(txtTelefono.value == ""){
            errores++;
        }
        if(txtCelular.value == ""){
            errores++;
        }

        if(errores > 0){
            alert("Llene correctamente los campos.");
        }else{
            var candidato = new Persona(txtNombres.value, txtApellidos.value, dtNacimiento.value, rdbGenero.value, stcPaisNacimiento.value , txtTelefono.value, emailCandidato.value, txtCelular.value, sltPResidencia.value, sltPResidencia.value, txtDomicilio.value );
            alert("correcto");
        }
    }
}