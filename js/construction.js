const changeImg = () => {
    var grain = ['img/grain1.png', 'img/grain2.png', 'img/grain3.png', 'img/grain4.png', 'img/grain5.png', 'img/sheet1.png', 'img/sheet3.png'];
    var change = Math.floor(Math.random() * grain.length);
    return grain[change];
}

function bloques() {
    var contenido = document.querySelector('.container');

    for (var i = 0; i < 60; i++) {
        let grain = changeImg();
        var block = document.createElement("img");
        block.classList.add("grain");
        block.src = grain;
        contenido.appendChild(block);
    }
}

function reparte() {
    var cantidadBloques = document.querySelectorAll('.grain');

    cantidadBloques.forEach(function (elemento) {
        var traslado = posicionVariante() * 3;
        var traslado2 = posicionVariante() * 3;
        var s1 = Math.round(Math.random() + 1);
        // var grain = changegrain();
        // elemento.style.transform = "translate(" + traslado + "em," + traslado2 + "em)";
        elemento.style.transform = 'matrix(' + s1 + ', 0, 0,' + s1 + ',' + traslado + ', ' + traslado2 + ')';
        // elemento.style.background = grain;
    });

}

const posicionVariante = () => {
    return Math.floor((0.5 - Math.random()) * 500);
}


// console.log(posicionVariante())
var intervalo = setInterval(reparte, 3000);
bloques();