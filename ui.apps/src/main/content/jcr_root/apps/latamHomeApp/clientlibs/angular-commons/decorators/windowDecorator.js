app.config(['$provide', function ($provide) {
    
    $provide.decorator('$window', ['$delegate', function ($delegate) {

        function isExtraSmall() {
            return $delegate.matchMedia("(max-width: 767px)").matches;
        }

        function isSmall() {
            return $delegate.matchMedia("(min-width: 768px) and (max-width: 959px)").matches;
        }

        function isMedium() {
            return $delegate.matchMedia("(min-width: 960px) and (max-width: 1199px)").matches;
        }

        function isLarge() {
            return $delegate.matchMedia("(min-width: 1200px)").matches;
        }
        
        function isDesktop() {
            return $delegate.matchMedia("(min-width: 960px)").matches;
        }
        
        $delegate.viewport = (function() {
            return {
                /* bootstrap breakpoint */
                isExtraSmall: isExtraSmall,
                isSmall: isSmall,
                isMedium: isMedium,
                isLarge: isLarge,

                /* easy methods */
                isMobile: isExtraSmall,
                isTablet: isSmall,
                isDesktop: isDesktop
            }
        })();
        return $delegate;
    }]);
}]);