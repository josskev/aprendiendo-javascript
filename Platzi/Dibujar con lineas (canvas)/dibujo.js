var texto = document.getElementById("txt_lineas"); //obtiene el valor de txt_linea y lo almacena en la variable
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick); //crea un evento donde al dar click ejecuta una funcion llamada dibujoPor Click


var d = document.getElementById('dibujito') //obtiene el valor de dibujito y lo almacena en la variable
var ancho = d.width; //almacena el valor de width que tiene d y lo almacena en la variable ancho
var lienzo = d.getContext("2d"); //establece el lienzo trabajara sobre 2d


//dibuja lineas de color tanto a lo alto como a lo ancho
dibujarLinea(color_linea, 1, 1, 1, 300)
dibujarLinea(color_linea, 1, 299, 299, 299)


//funcion que se ejecuta cada vez que queremos dibujar una linea
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}


//funcion llamada "dibujo por click" que obtiene de la caja de texto de html (variable llamda en js como "xxx") el numero de lineas que se
//quieren dibujar, y activa un ciclo que termina hasta el el total de las linas
//son dibujadas
function dibujoPorClick() {

  //almacena en "xxx" el valor que tiene la variable "texto", el cual se obtiene de la caja de texto
  //en html llamada txt_lineas, que son el numero de lineas a dibujar
  var xxx = parseInt(texto.value);

  var lineas = xxx
  var l = 0
  var yi, xf;
  var color_linea = "red";


  for (l = 0; l < lineas; l++)

  {
    yi = (ancho / lineas) * l;
    xf = (ancho / lineas) * (l + 1);
    dibujarLinea("grey", 0, yi, xf, 300)

  }

}