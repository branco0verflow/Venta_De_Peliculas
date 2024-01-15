let container = document.querySelector(".contenedor"); // Cargamos el contenedor del curd.HTML

window.addEventListener('load', function () { //Al cargar la pagina
  let peliculasAlmacenadas = obtenerPeliculasDeLocalStorage(); // Obtener las peliculas almacenadas en el localStorage
  if (peliculasAlmacenadas.length > 0) { // Si hay peliculas en el localStorage
    cargarPeliculas(peliculasAlmacenadas) // Cargar las peliculas en la pagina
  } else {
    guardarPeliculasEnLocalStorage(peliculas) // De lo contrario, guardar las peliculas que tenemos en variables.js en el localStorage
    cargarPeliculas(peliculas) // Cargar las peliculas en la pagina
  }
});

// Cambiamos la ruta de imagen para que cargue en el crud
function convertirRuta(ruta) {
  if (ruta.startsWith("./")) {
    ruta = "./../" + ruta.substring(2);
  }
  return ruta;
}

// Cargamos las peliculas 
function retornarCardHTML(pelicula) {
  return `<div class="div-card">
            <div class="imagen"><img src='${convertirRuta(pelicula.imagen)}' class='portada'></img></div>
            <div class="precio"><p>$ ${pelicula.precio}</p></div> 
            <div class="acciones">
              <button id="${pelicula.codigo}" onclick="eliminarPelicula(${pelicula.codigo})" class="btn btn-danger">Eliminar</button>
            </div>
          </div>`;
} 

// Función para agregar una tarjeta por cada pelicula que tengamos en el array que le pasamos
function cargarPeliculas(array) {
  container.innerHTML = "";
  array.forEach((pelicula) => {
    container.innerHTML += retornarCardHTML(pelicula);
  });
}

// Guardamos las peliculas que le pasamos en el localStorage
function guardarPeliculasEnLocalStorage(peliculas) {
  localStorage.setItem('peliculas', JSON.stringify(peliculas));
}

//Agregar peliculas 
document.querySelector("#formulario").addEventListener("submit", (e) =>{
    e.preventDefault();
    // Obtenemos los valores del formulario
    let imagen = document.querySelector("#imagen").value;
    let genero = document.querySelector("#genero").value;
    let precio = parseInt(document.querySelector("#precio").value);
    let nombre = document.querySelector("#nombre").value;
    let trailer = document.querySelector("#trailer").value;
    // Validar que todos los campos esten completos
    if (imagen == "" || genero == "" || precio == 0 || nombre == "" || trailer == "") {
        alert("Por favor complete todos los campos");
      } else {
          let peliculasStorage = obtenerPeliculasDeLocalStorage();
          let cantidad  = peliculasStorage.length > 0 ? peliculasStorage.length : peliculas.length;
          // Crear una nueva pelicula
          let pelicula= {
            imagen: "./images/" + imagen.slice(12),
            codigo: cantidad + 1,
            genero: genero,
            precio: precio,
            nombre: nombre,
            trailer: trailer
        };
        // Agregar la nueva pelicula al array
        if (peliculasStorage.length <= 0){  
            peliculas.push(pelicula);
            guardarPeliculasEnLocalStorage(peliculas);
          }else{
            peliculasStorage.push(pelicula);
            guardarPeliculasEnLocalStorage(peliculasStorage);
        }
          alert("Alta dada correctamente");
    }
});

function obtenerPeliculasDeLocalStorage() {
    let peliculasString = localStorage.getItem('peliculas');
    return peliculasString ? JSON.parse(peliculasString) : [];

  }

//Eliminar peliculas
function eliminarPelicula(id) { 
  let peliculasStorage = obtenerPeliculasDeLocalStorage(); // traigo el array del localstorage
  let indice = peliculasStorage.findIndex((pelicula) => pelicula.codigo === id); // buscamos esa pelicula, tal que la pelicula.codigo sea igual al id, y con el findindex encontramos el indice de la pelicula, y la guardamos en la variable indice.
  if (indice !== -1) { 
    peliculasStorage.splice(indice, 1); //elimina la pelicula del array
    guardarPeliculasEnLocalStorage(peliculasStorage);//guarda de nuevo las peliculas en el localStorage
    cargarPeliculas(peliculasStorage); //recarga la lista de peliculas de la pagina
    alert("Pelicula eliminada correctamente");
  } else {
    alert("No se encontró la pelicula");
  }
}


