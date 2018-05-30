// Creamos la clase Billete que contendra el valor de cada billete y su cantidad
class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}

// Creamos la funcion calcular
function calcular()
{
  var t = document.getElementById("retirar")
  dinero = parseInt(t.value);
// creamos la iteracion para que use cada elemento contenido en el array caja
  for (var bi of caja)
  {
    if (dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);
        if (div > bi.cantidad)
        {
          papeles = bi.cantidad;
        }
        else {
          papeles = div;
        }
        entregado.push(new Billete(bi.valor, papeles));
        dinero -= (bi.valor * papeles);
    }

    }
    if (dinero > 0)
    {
    resultado.innerHTML = "No tengo efectivo suficiente";
    }
    else
    {
      for (var e of entregado)
      {
        if (e.cantidad > 0)
        {
          resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br>";
        }
      }
    }
  }


// Creamos array de caja y entregado
var caja = [];
var entregado = [];

/* Contruimos e insertamos en la clase billetes los correspondientes billetes
junto con su valor y cantidad */
caja.push(new Billete(100, 5));
caja.push(new Billete(50, 50));
caja.push(new Billete(20, 30));
caja.push(new Billete(10, 20));
caja.push(new Billete(5, 20));

var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado")
var b = document.getElementById("boton_retirar");
b.addEventListener("click", calcular);
