const botontAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCokies = document.getElementById('fondo-aviso-cookies');

avisoCookies.classList.add('activo')
fondoAvisoCokies.classList.add('activo')

botontAceptarCookies.addEventListener('click', () => {
    avisoCookies.classList.remove('activo');
    fondoAvisoCokies.classList.remove('activo');

    localStorage.setItem('cookies-aceptadas', true );
});