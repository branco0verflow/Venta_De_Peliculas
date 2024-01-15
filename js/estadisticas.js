// Obtenemos el div donde se mostrará la tabla de estadisticas
let contenedor = document.getElementById("cont-principal");

// Traemos el información de peliculas
function obtenerPeliculasDeLocalStorage() {
    let peliculasString = localStorage.getItem('peliculas');
    return peliculasString ? JSON.parse(peliculasString) : [];
  }

// Creamos y mostraramos la tabla de peliculas
let peliculasLocalStorage = obtenerPeliculasDeLocalStorage();
contenedor.innerHTML = generarTablaPeliculas(peliculasLocalStorage);
// Función para generar la tabla HTML de peliculas
function generarTablaPeliculas(peliculas) {
  let lineas = '';
    
    if (peliculas.length > 0) {
      lineas += '<table class="table table-dark table-borderless">';
      lineas += '<tr>';
      lineas += '<th>Nombre</th>';
      lineas += '<th>Precio</th>';
      lineas += '<th>Cantidad vendida</th>';
      lineas += '<th>Total de ingresos</th>';
      lineas += '</tr>';
      
      peliculas.forEach(function(pelicula) {
        lineas += '<tr>';
        lineas += '<td>' + pelicula.nombre + '</td>';
        lineas += '<td>' + pelicula.precio + '</td>';
        lineas += '<td>' + pelicula.cantidadVendida+ '</td>';
        lineas += '<td>' + (pelicula.cantidadVendida * pelicula.precio) + '</td>';
        lineas += '</tr>';
      });
      
      lineas += '</table>';
    } else {
    lineas += '<p>No hay peliculas</p>';
    }
    
    return lineas;
  }

 let mostrarTotal = document.getElementById("totality");
 mostrarTotal.innerHTML=""
 


  function totalrecaudo(){
    let sumaTotalRecau = 0
    peliculasLocalStorage.forEach((pelicula) =>
      sumaTotalRecau += pelicula.cantidadVendida*pelicula.precio
    )
    return sumaTotalRecau
  }
  sumaTotalRecau = totalrecaudo()


