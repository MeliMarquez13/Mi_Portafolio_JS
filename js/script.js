// ESPERAR A QUE CARGUE LA PAGINA

document.addEventListener("DOMContentLoaded", function(){

// SWEET ALERT

function mensaje(){

    Swal.fire({
        title: '¡Bienvenido!',
        text: 'Gracias por visitar mi sitio sobre Jacob Elordi',
        icon: 'success'
    });

}

window.mensaje = mensaje;

// TYPED.JS

if(document.getElementById('texto')){

    var typed = new Typed('#texto', {

        strings: [
            'Bienvenido a mi sitio web',
            'Jacob Elordi',
            'Actor australiano'
        ],

        typeSpeed: 60,
        backSpeed: 40,
        loop:true
    });

}

// AOS

if(typeof AOS !== "undefined"){

    AOS.init();

}

// PREGUNTAS FRECUENTES

var acc = document.getElementsByClassName("acordeon");

for (let i = 0; i < acc.length; i++) {

    acc[i].addEventListener("click", function () {

        this.classList.toggle("activo");

        var panel = this.nextElementSibling;

        if (panel.style.display === "block") {

            panel.style.display = "none";

        } else {

            panel.style.display = "block";

        }

    });

}

// GRAFICA DE BARRAS

const ctx = document.getElementById('miGrafica');

if(ctx){

    new Chart(ctx, {

        type: 'bar',

        data: {

            labels: [
                'Euphoria',
                'Saltburn',
                'The Kissing Booth'
            ],

            datasets: [{

                label: 'Popularidad',

                data: [95, 85, 100]

            }]
        }

    });

}

});
