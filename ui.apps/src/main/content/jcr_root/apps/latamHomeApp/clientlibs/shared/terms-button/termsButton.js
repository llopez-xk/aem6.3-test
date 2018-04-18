/**
 * @ngdoc directive
 * @name termsButton
 *
 * @description
 * (destinos-ofertas/encabezadoLandingDestinos: destino, destinos-ofertas/encabezadoAgrupacionDestinos: destinoAgrupacion)
 */
angular
.module('app')
.directive('termsButton', ['ngDialog','dataRatesConditions',function(ngDialog, dataRatesConditions){
    var directive={
      restrict: 'A',
      transclude:true,
      link: linkFunc,
      template:'<ng-transclude></ng-transclude>'
    }

    return directive;

    function linkFunc(scope, el, attr) {

      var termsButton = el.find('.Btn');
      var termsId = function (e){
        var jsonOption = el.data('json');
        if(jsonOption){
          var url= jsonOption;
          dataRatesConditions.getRateConditions(url).then( function(data){
            ngDialog.open({
              template: 'ModalTerms', // script id
                data: {
                  conditions: data.terms,
                },
              className: 'ngDialog-md',
              preserveFocus: false, // True by default
              ariaRole: 'dialog',
              ariaLabelledById: 'myModalLabel',
              preCloseCallback: function (value) {
                var trigger = attr['loginFocusReturn'];
                if (trigger)
                  el.find(trigger).focus();
              }
            });
          });
        }
        else{
            ngDialog.open({
              template: 'ModalAgrupaciones', // script id
              className: 'ngDialog-md',
              preserveFocus: false, // True by default
              ariaRole: 'dialog',
              ariaLabelledById: 'myModalLabel',
              preCloseCallback: function (value) {
                var trigger = attr['loginFocusReturn'];
                if (trigger)
                  el.find(trigger).focus();
              }
            });
            return false;

        }
      };

      angular.element(termsButton).click(termsId);

    }
}]);

