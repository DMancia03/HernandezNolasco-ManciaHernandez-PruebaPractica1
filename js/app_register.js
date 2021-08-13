//Una función la cual nos ayuda a cambiar los diferentes departamentos dependiendo 
// de el país 
document.getElementById('pResidencia').addEventListener("change", function(e){
    var target = e.target; 
    var dpinput = document.getElementById('dResidencia');
    var departamentos, pais ;

    switch(target.value){
        case "1":
            pais = new  ElSalvador();
        break;
        case "2":
            pais = new Guatemala();
        break;
        case "3":
                pais = new Belice()
         break;
         case "4":
            pais = new Nicaragua();
         break
         case "5":
            pais = new CostaRica();
         break;
         case "6":
             pais = new Honduras();
        break
        case "7":
            pais = new Panama();
       break
        default:
            dpinput.disabled = true;
    }
    dpinput.innerHTML = "";
    departamentos = pais.getDepartamento();
    for(var i = 0; i<departamentos.length; i++){
        var name =  departamentos[i];
        dpinput.innerHTML += "<option value='"+ name+"' >"+name +"</option>"; 
    }
    dpinput.disabled = false;
})