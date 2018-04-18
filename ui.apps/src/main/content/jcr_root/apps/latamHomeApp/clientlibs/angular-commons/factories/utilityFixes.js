/**
 * @ngdoc service
 * @name utilityFixes
 *
 * @description
 * A service to handle fixes
 */
app.factory('utilityFixes', ['$window', function($window) {
  var picture = function(baseElement) {
    if ( !window.HTMLPictureElement ) {
      if(!baseElement){
        return;
      }
      var _last_viewport = null,
        picture = $('picture', baseElement);

      if( picture.length > 0 ){
        var viewport = $window.viewport.isMobile() ? 'mobile' : 'desktop';

        if ( _last_viewport !== viewport ){

          picture.each(function(){
            var image = $(this),
              desktop = $('source[media="(min-width: 768px)"]', image).attr('srcset'),
              mobile = $('source[media="(max-width: 767px)"]', image).attr('srcset'),
              img = new Image();

            img.onload = function(){
              $('img', image).prop('src', img.src);
            };
            var imgSrc = (viewport === 'desktop' ? desktop : (mobile ? mobile : desktop) );
            if(!!imgSrc){
              img.src = imgSrc;
            }
          });
          _last_viewport = viewport;
        }
      }
    }
  };

  return {
    picture: picture
  };
}]);
