// seleccionamos los botones
const holaBtn = document.getElementById('hola-btn');
const quienSoyBtn = document.getElementById('quien-soy-btn');
const queHagoBtn = document.getElementById('que-hago-btn');

// agregamos eventos click a cada botón
holaBtn.addEventListener('click', function() {
  alert('Hola!');
});

quienSoyBtn.addEventListener('click', function() {
  alert('Estudiante de Ticmas Haciendo un CV para trabajo Practico');
});

queHagoBtn.addEventListener('click', function() {
  alert('Practicando para ser programador');
});