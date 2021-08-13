window.onload = inicio;
var mytablesDiv = document.getElementById("mydatas");
function inicio(){

    if(!(localStorage.length>0)){
        var text = "<h1>AÚN NO HAY DATOS INGRESADOS</h1>";
        mytablesDiv.innerHTML +=text;
    }else{

        var table = "<table>";
        table += "<tr>" +
        "<th>Apellidos</th>"+
        "<th>Nombre</th>"+
        "<th>Fecha de nacimiento</th>"+
        "<th>Genero</th>"+
        "<th>País de nacimiento</th>"+
        "<th>Email</th>"+
        "<th>Telefono</th>"+
        "<th>Celular</th>"+
        "<th>País de Residencia</th>"+
        "<th>Departamento</th>"+
        "<th>Direcccion</th>"+
    "</tr><tr>";
        table +="<td>"+localStorage.getItem('apellido')+"</td>";
        table +="<td>"+localStorage.getItem('nombre')+"</td>";
        table +="<td>"+localStorage.getItem('genero')+"</td>";
        table +="<td>"+localStorage.getItem('nacionalidad')+"</td>";
        table +="<td>"+localStorage.getItem('email')+"</td>";
        table +="<td>"+localStorage.getItem('telefono')+"</td>";
        table +="<td>"+localStorage.getItem('celular')+"</td>";
        table +="<td>"+localStorage.getItem('residencia')+"</td>";
        table +="<td>"+localStorage.getItem('departamento')+"</td>";
        table +="<td>"+localStorage.getItem('direccion')+"</td>";

        mytablesDiv.innerHTML = table;
    }
}