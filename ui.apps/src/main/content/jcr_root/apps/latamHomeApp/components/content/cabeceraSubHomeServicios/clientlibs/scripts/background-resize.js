/* background to the div inside data attribute data-background-url */
var SubHomeHeader = $('.SubHomeHeader');

function resizing(){
    var mobile = SubHomeHeader.data('background-mobile');
    var desktop = SubHomeHeader.data('background');
    
    var background = window.matchMedia("(max-width: 767px)").matches ? (mobile ? mobile : desktop) : desktop;
    
    
    if ( SubHomeHeader.length && SubHomeHeader.data('background') ) {
        SubHomeHeader.css('background-image', 'url(' + background + ')') ;
    }
}

$(window).on('resize', function(){
    resizing();
});

resizing();