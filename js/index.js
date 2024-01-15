let container = document.querySelector(".container"); //Cargamos el container del HTML
let compras = document.querySelector(".carrito");
let listaUsuarios = document.getElementById("lista-usuarios");
let listaGeneros = document.getElementById("lista-generos");
let cantiCompra = document.querySelector(".mostrar-cantidad");

let inputBuscar = document.getElementById("inputSearch");
let botonBuscar = document.getElementById("boton-buscar");
let botonGeneros = document.getElementById("lista-generos");

cargarUsuarios(usuarios);
cargarCarritos(usuarios);
cargarPeliculas(peliculas);
cargarGeneros(generos);

function cargarPeliculas(peliculas) {
    container.innerHTML = "";
    peliculas.forEach((pelicula) => {
      container.innerHTML += retornarCardHTML(pelicula);
    });
    activarClickEnBotones()
}
  
function retornarCardHTML(pelicula) {
    return `<div class="div-card">
              <div class="imagen"><img src='${pelicula.imagen}' class='portada'></img></div>
              <div class="precio"><p>$ ${pelicula.precio}</p></div>
              <div class="comprar"><button class="boton-comprar" id="${pelicula.codigo}">Comprar</button></div>
              <div class="trailer"><a href="${pelicula.trailer}" target="_blank">
              <div><button id="boton-trailer" class="css-button css-button-rounded css-button-rounded--grey"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ver trailer</font></font></button></div>
              
            </div>`;
} 

function cargarUsuarios(array) {
    listaUsuarios.innerHTML = "";
    array.forEach((usuario) => {
      listaUsuarios.innerHTML += retornarUsuarioHTML(usuario);
    });
}

function retornarUsuarioHTML(usuario) {
    return `<option value="${usuario.id}">${usuario.nombre}</option>`;
}

function cargarGeneros(array) {
  listaGeneros.innerHTML = "";
  array.forEach((genero) => {
    listaGeneros.innerHTML += retornarGeneroHTML(genero);
  });
}

function retornarGeneroHTML(genero) {
    return `<option value="${genero}">${genero}</option>`;
}

function cargarCarritos(array) {
    compras.innerHTML = "";
    array.forEach((usuario) => {
      compras.innerHTML += retornarCarritosHTML(usuario);
    });
}

function retornarCarritosHTML(usuario) {
    return `<p></p>`;    
}

function filtrarPeliculas() {
    let resultado = peliculasAlmacenadas.filter((pelicula) =>
      pelicula.nombre.toLowerCase().includes(inputBuscar.value.toLowerCase().trim())
    );
    if (resultado !== []) {
      cargarPeliculas(resultado);
    }
}
  
botonBuscar.addEventListener("click", filtrarPeliculas);
inputBuscar.addEventListener("search", filtrarPeliculas);
listaGeneros.addEventListener("click", cargarGenerosTotales);

window.addEventListener('load', function() {
    let peliculasAlmacenadas = obtenerPeliculasDeLocalStorage();
    peliculasAlmacenadas.length > 0 ? cargarPeliculas(peliculasAlmacenadas) : cargarPeliculas(peliculas);
});

let peliculasAlmacenadas = obtenerPeliculasDeLocalStorage() 

function obtenerPeliculasDeLocalStorage() {
  let peliculasString = localStorage.getItem('peliculas');
  return peliculasString ? JSON.parse(peliculasString) : [];
}

function guardarPeliculasEnLocalStorage(peliculas) {
  localStorage.setItem('peliculas', JSON.stringify(peliculas));
}

// Carrito
function activarClickEnBotones() {
  let botones = document.querySelectorAll(".comprar");
  let peliculasLocalStorage = obtenerPeliculasDeLocalStorage();
  if (botones !== null) {
    for (let boton of botones) {
      boton.addEventListener("click", (e) => {
        let pelicula = peliculasLocalStorage.find(       
          (pelicula) => pelicula.codigo === parseInt(e.target.id)
        );
        let usuarioSeleccionado = listaUsuarios.value;
          for (let usuario of usuarios) {
          if (usuario.id == usuarioSeleccionado) {
            usuario.peliculas.push(pelicula);
          }
        }
        pelicula.cantidadVendida+=1
        guardarPeliculasEnLocalStorage(peliculasLocalStorage);
        devolverTotal(usuarios);
      });
    }
  }
}

devolverTotal(usuarios);
  
function devolverTotal(array) {
  cantiCompra.innerHTML = ""
  array.forEach((usuario) => {
    cantiCompra.innerHTML += totalCompras(usuario)
  })
}
   
function totalCompras(usuario) {
  let total = sumaTotal(usuario);
  if (usuario.peliculas.length >= 5) {
    return `<p class="canti-total">${usuario.nombre} En Carrito: ${usuario.peliculas.length}<br>Precio total con 10% de descuento : $ ${total - (total * 0.1)}</p><hr>`; 
  }else {
    return `<p class="canti-total">${usuario.nombre} En Carrito: ${usuario.peliculas.length}<br>Total a pagar: $ ${total}</p><hr>`;
  }
}
  
function sumaTotal(usuario) {
  let total = 0;
  for(let pelicula of usuario.peliculas) {
    total += pelicula.precio;
  }
  return total;
  }

function cargarGenerosTotales() {
  guardarPeliculasEnLocalStorage(peliculas)
  obtenerPeliculasDeLocalStorage(peliculas)
  let elGenero = peliculas.filter((pelicula)=>
  pelicula.genero == listaGeneros.value)
  if (listaGeneros.value == 'Todas') {
    cargarPeliculas(peliculasAlmacenadas) 
}else{
  cargarPeliculas(elGenero);
 }
}


