app.directive('footer',['$templateCache',function($templateCache){
  return {
    restrict: 'A',
    link: function(scope, element, attributes){
      // Get logo from directive and send it to the template
      scope.tam   = (attributes["tam"] == "true") ? true : false;

      // Show process footer
      scope.process = (attributes["process"] == "true") ? true : false;

      // Show payment footer
      scope.payment = (attributes["payment"] == "true") ? true : false;

    },
    templateUrl: function(elm, attrs) {
      return attrs.templateUrl;
    }
  }
}]);
