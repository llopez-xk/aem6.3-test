/**
 * @description
 * (bannersInformacionGenerica, bannerProductosCatalogo: subHomeFidelizacion)
 */
app.directive('catalogSlider',[function(){
  return {
    restrict: 'A',
    link: function(scope,element,attrs) {
      //console.log(attrs.sliderSelector);
      $("."+attrs.sliderSelector).slick({
        variableWidth: true,
        dots: true,
        arrows: false,
        swipe: true,
        infinite: false,
        responsive: [
          {
            breakpoint: 768,
            slidesToShow: 1,
            slidesToScroll: 2
          },
          {
            breakpoint: 3000,
            settings: "unslick"
          }
        ]
      });
    }
  }
}]);
