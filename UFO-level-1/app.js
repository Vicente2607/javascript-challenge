// from data.js
var datos = data;

// YOUR CODE HERE!
//console.log(datos);

// seleccionamos el tbody 
tbody = d3.select("tbody")


// hacemos una funcion para desplegar la tabla
// a traves de un loop
function displayData(something){ 
    tbody.text("")
    something.forEach(function(et_sighting){
    new_tr = tbody.append("tr")
    Object.entries(et_sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}


// función para limpiar tabla
function deleteTbody() {
    d3.select("tbody")
      .selectAll("tr").remove()
      .selectAll("td").remove();
  };


// desplegamos la tabla
displayData(datos)

// Seleccionar Botón
var boton = d3.select("#filter-btn");

//Filtrar y desplegar la base

boton.on("click", function(event) {

    d3.event.preventDefault();
    deleteTbody();
    var dateInput = d3.select("#datetime").property("value");
 
    if (dateInput.trim() === "" ) {
      // si no hay fecha despliega toda la base
      var filteredData = datos;
      displayData(datos);
    } else {
      // sino, despliega lo filtrado 
      var filteredData = datos.filter(ufoSighting => ufoSighting.datetime === dateInput.trim());
    };

    //si no hay datos depliega...
    console.log(filteredData.length);

  
    tbody = d3.select("tbody")

  if (filteredData.length === 0) {
    tbody.text("");
    tbody.append("tr");
    tbody.append("td").text("No hay datos");
    
   };
  console.log(filteredData);

  displayData(filteredData);

});