app.directive('footer', [function() {
    return {
        restrict: 'A',
        link: function footer(scope, element, attributes){
            // Get logo from directive and send it to the template
            scope.tam   = (attributes["tam"] == "true") ? true : false;
            
            // Show process footer
            scope.process = (attributes["process"] == "true") ? true : false;
            
            // Show payment footer
            scope.payment = (attributes["payment"] == "true") ? true : false;
        }
    };
}]);
