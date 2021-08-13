window.onload = inicio;
var mytablesDiv = document.getElementById("mydatas");
function inicio(){

    if(!(localStorage.length>0)){
        var text = "<h1>AÚN NO HAY DATOS INGRESADOS</h1>";
        mytablesDiv.innerHTML +=text;
    }
}