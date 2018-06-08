//Llamamos la funcion en windows.onload para asegurarnos de que el HTML fue cargado
window.onload = function () {
    var pos = 0;
    //jalamos nuestro elemnto box
    var box = document.getElementById("box");
    //Indicamos un intervalo para ejecutar una función llamada mover
    var t = setInterval(mover, 10);

    function mover() {
        if (pos >= 150) {
            clearInterval(t);
        }
        else {
            pos += 1;
            box.style.left = pos+ "px";
        }

    }
}
