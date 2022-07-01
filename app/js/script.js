// HEADER
function navMenu() {
    const navs = document.querySelectorAll('.mobile__header-navlinks');

    navs.forEach(nav => nav.classList.toggle('responsive'));
}
  
document.querySelector('.header__button')
        .addEventListener('click', navMenu);


// Herobanner
// var herobanner = document.querySelectorAll('.herobanner');
// herobanner.addEventListener( 'load', function() {
//     var splide = new Splide( '.splide', {
//         type    : 'loop',
//         autoplay: true,
//     });

//     splide.on( 'pagination:mounted', function ( data ) {
//         // You can add your class to the UL element
//         data.list.classList.add( 'splide__pagination--custom' );
      
//         // `items` contains all dot items
//         data.items.forEach( function ( item ) {
//           item.button.textContent = String( item.page + 1 );
//         } );
//     } );


//     splide.mount();
//   } );


$('.herobanner').ready(function() {
    var splide = new Splide( '.splide', {
        type    : 'loop',
        autoplay: true,
    });

    splide.on( 'pagination:mounted', function ( data ) {
        // You can add your class to the UL element
        data.list.classList.add( 'splide__pagination--custom' );
      
        // `items` contains all dot items
        data.items.forEach( function ( item ) {
          item.button.textContent = String( item.page + 1 );
        } );
    } );


    splide.mount();
}) 