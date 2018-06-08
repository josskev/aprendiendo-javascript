var imagenes = [
    'http://www.sololearn.com/uploads/slider/1.jpg', 
    'http://www.sololearn.com/uploads/slider/2.jpg', 
    'http://www.sololearn.com/uploads/slider/3.jpg'
];

var num = 0;

function next() {
    var slider = document.getElementById("slider");
    num++;
    if (num >= imagenes.length) {
        num = 0;
    }
    slider.src = imagenes[num];
}

function prev() {
    var slider = document.getElementById("slider");
    num --;
    if (num < 0) {
        num = imagenes.length-1;
    }
    slider.src = imagenes[num];
}