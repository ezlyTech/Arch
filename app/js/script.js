// HEADER
function navMenu() {
    const navs = document.querySelectorAll('.mobile__header-navlinks');

    navs.forEach(nav => nav.classList.toggle('responsive'));
}
  
document.querySelector('.header__button')
        .addEventListener('click', navMenu);


// Herobanner
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' );
    splide.mount();
  } );