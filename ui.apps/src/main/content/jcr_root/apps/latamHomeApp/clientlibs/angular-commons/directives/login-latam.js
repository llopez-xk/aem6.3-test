app.directive('loginLatam', ['$rootScope', '$timeout', 'dataLogin', function($rootScope, $timeout, dataLogin){
    return {
        restrict: 'A',
        replace: true,
        link: function loginLatamLink(scope, el, attributes){
            scope.milesSign = app.milesSign;
            scope.session = {};
            scope.url = null;

            function init(params) {
                if(dataLogin.isLoggedIn()){
                    session();
                }
                updateUserLogoState();
            }
            
            function session(){
                //global event on logged in user
                scope.session = Auth.getUserData();
                scope.$parent.session = scope.session;
                scope.$parent.loggedIn = !!scope.session;
                $timeout(function(){
                    $rootScope.$broadcast('LoggedIn');
                    scope.$emit('LoggedIn', el, attributes);
                });
            }
            
            function login(e) {
                if( !!Auth ) {
                    e.preventDefault();
                    Auth.toLogin();
                }
            }
            
            var ProfileDropdownTrigger = document.querySelector(".Header-profile");
            function updateUserLogoState(){
                // this logo is used on xs-screens
                var ProfileIcon = document.querySelector(".Header-userProfileIcon")
                if(Object.keys(scope.session).length !== 0) {
                    ProfileIcon.classList.add("isLoggedIn");
                    ProfileDropdownTrigger.classList.remove("isOpen");
                } else {
                    ProfileIcon.classList.remove("isLoggedIn");
                }
            }
            
            function ToggleDropdown(e){
                // Check if is logged in or not, and open the appropiated div
                if(Object.keys(scope.session).length !== 0) {
                    var LoginContainerProfile = document.querySelector('.Login-profile');
                    LoginContainerProfile.classList.toggle('isOpen');
                    ProfileDropdownTrigger.classList.toggle('isOpen');

                    if(e) {
                        e.preventDefault();
                    }
                }
            }
            
            ProfileDropdownTrigger.addEventListener('click', function(e){
                ToggleDropdown(e);
            });
            
            init();
        }
    };
}]);
