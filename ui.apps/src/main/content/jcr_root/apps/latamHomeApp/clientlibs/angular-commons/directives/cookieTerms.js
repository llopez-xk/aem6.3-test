/**
 * @ngdoc directive
 * @name cookieTerms
 *
 * @description
 * cookieTerms is a directive that handles the behavior of a cookies terms bar, originally positioned at sticky header.
 *
 * @param {string} template Path to the template used to show the message.
 * @requires - normally indicates that a JavaScript module is required; in an Angular service it is used to describe what other services this service relies on
 */
app.directive('cookieTerms', ['dataCookieTerms', '$window', function(dataCookieTerms, $window) {

  var closeButton = '.Header-cookieCloseButton',
  handleBodyPadding = function( element, action ) {
    var height = element.height(),
        wrapper = $('.Wrapper'),
        container = wrapper.length ? wrapper : $('body'); //Check if Wrapper exists, else apply to the body

	if( $window.viewport.isMobile() && action === 'add' ){
       container.css('paddingTop', + height);
    }

    if ( action === 'substract' ) {
      // Substract the padding with an animation to softly move up the content.
      container.animate({
        'paddingTop': '-=' + height
      });
    }
  },
  setEvents = function( element ) {
    // Set the close event to the button
    element.find( closeButton ).on('click', function() {
      // Set the cookie to avoid message re-appear
      dataCookieTerms.setCookie();
      //Get height of showed element and suppress it to the padding-top on body or wrapper.
      handleBodyPadding(element, 'substract');
      // Hide the element with an animation.
      element.slideUp();
    });
  },
  cookieTermsLink = function(scope, element, attrs) {
    var cookieExists = dataCookieTerms.getCookie(); // Search for 'cookieTerms' cookie.

    //If cookie doesn't exists.
    if( !cookieExists ) {
      //Get height of showed element and add it to padding-top on body or wrapper.
      handleBodyPadding(element, 'add');
      setEvents( element );
    } else {
      element.find('.Header-cookie.clearfix').remove();
      handleBodyPadding(element, 'substract');
    }
  };

  return {
    restrict: 'A',
    replace: true,
    link: cookieTermsLink
  };
}]);
