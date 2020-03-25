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

var button = d3.select("#filter-btn");

// filtramos la base de datos

button.on("click", function(event) {
  d3.event.preventDefault();
  deleteTbody();
  var filteredData = datos;
  var inputId = document.getElementsByClassName("form-control");

  // iterar para poner lo filtardo
  for (var i = 0; i < inputId.length; i++) {
	var idName = inputId[i].id;
	var field = d3.select("#" + idName).property("value");

	//  el if para los vacios
	if (field.trim() !== "") {
	  var filteredData = filteredData.filter(ufoSighting => 
		ufoSighting[idName].toUpperCase().trim() ===
		field.toUpperCase().trim());
	};
  };

  // mensaje para los no encontrados
  tbody = d3.select("tbody")
  if (filteredData.length == 0) {
    d3.select("tbody")
    tbody.text("");
    tbody.append("tr");
    tbody.append("td").text("No hay datos");
  };

  

  // display the database

  console.log(filteredData);

  displayData(filteredData);

});