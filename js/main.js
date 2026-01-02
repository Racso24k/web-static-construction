document.addEventListener('DOMContentLoaded', () => {

    // Seleccionamos los elementos del DOM
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    // Función para abrir/cerrar menú
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('is-active');
    });

    // Cerrar el menú cuando se hace clic en un enlace (UX móvil)
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('is-active');
    }));

});