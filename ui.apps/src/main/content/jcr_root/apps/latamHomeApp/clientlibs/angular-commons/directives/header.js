app.directive('header', ['$window', function($window) {
    var headerLink = function(scope, element) {
        var wrapper = document.querySelector('.Wrapper');
        var container = (wrapper !== null ? wrapper : document.body); //Check if Wrapper exists, else apply to the body

        // header sr-only focus events
        var headerSrOnly = document.querySelector(".Header-sr-only");
        var currentPaddingTop = parseInt(container.style.paddingTop) || 0;
        headerSrOnly.addEventListener("focus", function(){
            container.style.paddingTop = (currentPaddingTop + 52) + "px";
        });
        headerSrOnly.addEventListener("focusout", function(){
            container.style.paddingTop = currentPaddingTop + "px";
        });

        // Check if exists the <main> tag (For B2C applications)
        if(!$window.viewport.isExtraSmall() && scope.process !== true && document.getElementsByTagName("main")[0] != undefined) {
            var stickyHeader = new StickyHeader('.Header-stepBar--main', 'Header-stepBar--hidden', 'Header-stepBar--visible', 36, 36 + 80);
        }
        
        // Change body padding when scope.process is true
        if (scope.process) {
            document.body.style.paddingTop = 0;
            wrapper.style.paddingTop = "58px";
        }

    },
        headerController = ['$scope', '$attrs', function ($scope, $attrs) {
            
            // Get logo from directive and send it to the template
            $scope.logoProcess = $attrs["logoProcess"];
            $scope.tam = $attrs["tam"];

            $scope.selectedIndexNav = $attrs["selectedIndexNav"]; // TODO try to move this to 'nav' directive

            // Show process header
            $scope.process = ($attrs["process"] === "true") ? true : false;
            $scope.navProcess = $scope.process;
        }];
    
    return {
        restrict: 'A',
        link: headerLink,
        controller: headerController
    };
}]);
