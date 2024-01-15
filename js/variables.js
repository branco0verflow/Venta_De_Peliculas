let peliculas= [
    {nombre: "avatar 2", imagen: "./images/avatar.jpg", trailer: "https://www.youtube.com/watch?v=jYRtFFa4hT8"  ,codigo: 1, genero: 'Accion', precio: 330, cantidadVendida:0},
    {nombre: "contratiempo", imagen: "./images/contratiempo.jpg" , trailer: "https://www.youtube.com/watch?v=4HOrjGQhpV4", codigo: 2, genero:'Suspenso', precio:55, cantidadVendida:0},
    {nombre: "cuestion de tiempo", imagen: "./images/cuestion de tiempo.jpg", trailer: "https://www.youtube.com/watch?v=5DQAZtFHLEA",codigo: 3, genero: 'Romance', precio: 300, cantidadVendida:0},
    {nombre: "it", imagen: "./images/it.jpg", trailer: "https://www.youtube.com/watch?v=fP4BBZ76DGg", codigo: 4, genero: 'Terror', precio:140, cantidadVendida: 0},
    {nombre: "jurassic world", imagen: "./images/jurassic world.jpg", trailer: "https://www.youtube.com/watch?v=GrUs5FR_eTA", codigo: 5, genero: 'Accion', precio: 400, cantidadVendida: 0},
    {nombre: "la huerfana", imagen: "./images/la huerfana.jpg", trailer: "https://www.youtube.com/watch?v=u0Ofrd29vfQ" ,codigo: 6, genero: 'Terror', precio: 350, cantidadVendida: 0},
    {nombre: "la isla siniestra", imagen: "./images/la isla siniestra.jpg", trailer: "https://www.youtube.com/watch?v=sybSFbmzyUg" , codigo: 7, genero: 'Suspenso', precio: 600, cantidadVendida: 0},
    {nombre: "misterio a bordo", imagen: "./images/misterio a bordo.jpg", trailer: "https://www.youtube.com/watch?v=5oVqgbRrH08" , codigo: 8, genero: 'Comedia', precio:500, cantidadVendida: 0},
    {nombre: "plan de escape", imagen: "./images/plan de escape.jpg", trailer: "https://www.youtube.com/watch?v=HZ2NNH--TXs ",codigo: 9, genero: 'Accion', precio: 250, cantidadVendida: 0},
    {nombre: "son como niños 2", imagen: "./images/son como niños 2.jpg", trailer: "https://www.youtube.com/watch?v=HGvO0ben8dI ",codigo: 10, genero: 'Comedia', precio: 100, cantidadVendida: 0},
    {nombre: "ted", imagen: "./images/ted.jpg", trailer: "https://www.youtube.com/watch?v=vRymJpzD-NE ",codigo: 11, genero: 'Comedia', precio: 300, cantidadVendida: 0},
    {nombre: "una esposa de metira", imagen: "./images/una esposa de mentira.jpg", trailer: "https://www.youtube.com/watch?v=xuZnmYjAKww", codigo: 12, genero: 'Comedia', precio: 450, cantidadVendida:0}
];

let usuarios = [
    {id: 0, nombre: 'Agustina', peliculas: [] },
    {id: 1, nombre: 'Branco', peliculas: [] },
    {id: 2, nombre: 'Laura', peliculas: [] }
];

let generos = ["Todas","Comedia", "Terror", "Accion", "Suspenso", "Romance"];

let carrito = [];

let pelicula = {
    nombre:"",
    codigo:0,
    genero:"",
    precio:0,
    cantidadVendida:0
  }
