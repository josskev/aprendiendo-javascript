var villa = document.getElementById('villa');
var papel = villa.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOk: false
}
var vaca = {
  url: "vaca.png",
  cargaOk: false
}

var cantidad = aleatorio(0, 10)


//CREAR OBJETOS DEL MAPA

//CREA EL FONDO
fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

//CREA LA VACA
vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVaca);



function cargarFondo() {
  fondo.cargaOk = true;
  dibujar();
}


function cargarVaca() {
  vaca.cargaOk = true;
  dibujar();
}



function dibujar() {
  if (fondo.cargaOk) {
    papel.drawImage(fondo.objeto, 0, 0);
  }
  if (vaca.cargaOk) {

    for (var v = 0; v < cantidad; v++) {
      var x = aleatorio(0, 7)
      var y = aleatorio(0, 7)
      var x = x * 60
      var y = y * 60
      papel.drawImage(vaca.objeto, x, y);
    }
  }
}



//crear una funcion para que arroje un numero aleatorio que siempre
//estara entre un minimo y un maximo
function aleatorio(min, max) {
  //Math.floor sirve para redondear el numero hacia abajo, y Math.ceil para redondearlo hacia arriba

  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}