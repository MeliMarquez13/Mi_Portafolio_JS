// SweetAlert

function mensaje(){

    Swal.fire({
        title: '¡Bienvenido!',
        text: 'Gracias por visitar mi sitio sobre Jacob Elordi',
        icon: 'success'
    });

}

// Typed.js

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

// AOS

AOS.init();