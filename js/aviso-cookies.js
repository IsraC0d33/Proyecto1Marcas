// Editado por Marcos
const cookiesAceptadas = localStorage.getItem("cookiesAceptadas");
const botontAceptarCookies = document.querySelector('.boton');
const avisoCookies = document.querySelector('.aviso-cookies');
const fondoAvisoCokies = document.querySelector('.fondo-aviso-cookies');

if (cookiesAceptadas) {

    avisoCookies.classList.remove('activo');
    fondoAvisoCokies.classList.remove('activo');
}
else {

    avisoCookies.classList.add('activo')
    fondoAvisoCokies.classList.add('activo')

    botontAceptarCookies.addEventListener('click', () => {

        avisoCookies.classList.remove('activo');
        fondoAvisoCokies.classList.remove('activo');

        localStorage.setItem("cookiesAceptadas", true);
    });
}

