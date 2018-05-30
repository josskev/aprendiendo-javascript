var teclas = {
  UP: 38, //Flecha Arriba: KeyCode = 38
  DOWN: 40, //Flecha Abajo: KeyCode = 40
  LEFT: 37, //Flecha Izquierda: KeyCode = 37
  RIGHT: 39 //Flecha Derecha: KeyCode = 39
};




document.addEventListener("keyup", dibujarTeclado);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("Red", 149, 149, 151, 151, papel)

//FUNCIONES ////////////////////////////////


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}



function dibujarTeclado(evento) {
  //Variables de la funcion
  var colorcito = "blue";
  var movimiento = 10;

  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea("colorcito", x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;
    case teclas.DOWN:
      dibujarLinea("colorcito", x, y, x, y + movimiento, papel);
      y = y + movimiento;
      break;
    case teclas.RIGHT:
      dibujarLinea("colorcito", x, y, x + movimiento, y, papel);
      x = x + movimiento;
      break;
    case teclas.LEFT:
      dibujarLinea("colorcito", x, y, x - movimiento, y, papel);
      x = x - movimiento;
      break;
    default:
      console.log("Otra tecla");
  }


}