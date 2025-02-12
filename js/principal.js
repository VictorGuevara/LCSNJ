/* --------------------------------------------------------------------------------- */
/*                                                                                   */
/*                                    VARIABLES                                      */
/*                                                                                   */
/* --------------------------------------------------------------------------------- */

// Variable del link para llamar los colores de la página.
const tag_link_color_page = document.getElementById('tag_link_color_page');

// MENU MOSTRAR Y OCULTAR 
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');
let navLink = document.querySelectorAll('.nav__link');

/* --------------------------------------------------------------------------------- */
/*                                                                                   */
/*                                    FUNCIONES                                      */
/*                                                                                   */
/* --------------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------------- */
/*                      Función que cambia los colores del tema                      */
/* --------------------------------------------------------------------------------- */

const change_color_theme = (nombre_docCSS) => {
	tag_link_color_page.href = '';
	tag_link_color_page.href = './css/' + nombre_docCSS + '.css';
}

// Función declarativa para llamar los cambios de los items.
function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    navMenu.classList.remove('show')
}


/* --------------------------------------------------------------------------------- */
/*                                                                                   */
/*                                     EVENTOS                                       */
/*                                                                                   */
/* --------------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () =>	{
	change_color_theme('colores');
});

// Mostar menú 
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');
})

// Ocultar menú
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show');
})

navLink.forEach(n => n.addEventListener('click', linkAction));
