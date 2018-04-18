app.directive('countrySelector', ['dataCookies', function(dataCookies) {
  return {
    restrict: 'A',
    link: function countrySelector (scope, element, attributes) {
      var component = element,
          dropdown = element.find('.countrySelector-dropDown'),
          link = element.find('.countrySelector-flagLink'),
          caret = element.find('.countrySelector-flagCaret');

      function openContrySelector(close) {
        var toggleDropdown, toggleAria;

        if (close) {
          toggleDropdown = 'true';
          toggleAria = 'false';
        } else {
          toggleAria = link.attr('aria-expanded') === 'true' ? 'false' : 'true' ;
          toggleDropdown = dropdown.attr('aria-hidden') === 'true' ? 'false' : 'true' ;
        }

        link.attr('aria-expanded', toggleAria);
        dropdown.attr('aria-hidden', toggleDropdown);

        if ( toggleDropdown === 'false' ) {
          component.addClass('visible');
          dropdown.addClass('visible');
          caret.removeClass('icon-int-caret-down');
          caret.addClass('icon-int-caret-up');
        } else {
          component.removeClass('visible');
          dropdown.removeClass('visible');
          dropdown.removeAttr('style'); //remove style from JGMM if mouse interact
          caret.removeClass('icon-int-caret-up');
          caret.addClass('icon-int-caret-down');
        }
        toggleClick = !toggleClick;
      }

      var CllbkGMM = function(e) {
        if (e.keyCode === 32 || e.keyCode === 13) {
          openContrySelector();
          link.focus();
          e.preventDefault();
        }
        if (e.keyCode === 27) {
          e.stopPropagation();
          var div = $('#countrySelectorDesktop');
          div.removeClass('visible');
          div.find('.countrySelector-flagLink').attr('aria-expanded', false);
          div.find('.countrySelector-dropDown').removeClass('visible').removeClass('style').attr('aria-hidden', true);
          div.find('.countrySelector-flagCaret').removeClass('icon-caret-up').addClass('icon-caret-down');
        }
      };

      var toggleClick = true;

      element[0].addEventListener('mouseleave', function(e) {
        openContrySelector(true);
      });

      link.on('click', function(event) {
        openContrySelector();
        event.preventDefault();
      });

      link.on('keydown', function(event) {
        CllbkGMM(event);
      });

      scope.callbackGMM=CllbkGMM;
      // Cambio de mercado

      function countrySelector(valor_cookie, homeinfo) {
      	var dDate = new Date();
      	var pcom_date = parseInt(Date.UTC(dDate.getUTCFullYear(),dDate.getUTCMonth(),dDate.getUTCDate(),dDate.getUTCHours(),dDate.getUTCMinutes(),dDate.getUTCSeconds(),dDate.getUTCMilliseconds())/1000);
        var expiration = 60*60*24;
        dataCookies.setCookieDominio('pcom', valor_cookie, expiration, dataCookies.getDomain());
      	dataCookies.setCookieDominio('homeInfo', homeinfo, expiration,dataCookies.getDomain());
      	dataCookies.setCookieDominio('pcom_date', pcom_date, expiration,dataCookies.getDomain());
      	dataCookies.setCookieDominio('pcom_new_home1', "1", expiration,dataCookies.getDomain());
      	dataCookies.setCookieDominio('pcom_new_home2', "1", expiration,dataCookies.getDomain());
      	dataCookies.setCookieDominio('stop_mobi',"yes",1,dataCookies.getDomain());
      }

      var changeCountry = function(e) {
        var valor_cookie = angular.element(e.currentTarget).data('pcom'),
            homeinfo = angular.element(e.currentTarget).data('homeinfo');

        countrySelector(valor_cookie, homeinfo);
      };

      var links =  element.find('.countrySelector-unorderedLink');
      links.on('click',changeCountry);
    }
  };
}]);
