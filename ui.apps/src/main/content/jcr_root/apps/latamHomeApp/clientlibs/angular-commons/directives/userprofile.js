/**
* @description
* (header, login: cross)
*/
app.directive('userprofile',['dataLogin', '$rootScope', '$compile', '$ariaExpandedHandler', function(dataLogin, $rootScope, $compile, ariaExpandedHandler){
    return {
        restrict: 'A',
        link: function userprofileLink(scope, element, attributes){
            $rootScope.inLoginProcess = false;
            scope.$on('LoggedIn', function() {
                if (!$rootScope.inLoginProcess) {
                    if( !!scope.session.program ) {
                        scope.milesSign = app.userMilesLabels[scope.session.program];
                    } else {
                        scope.milesSign = app.milesSign || 'Kms.';
                    }
                    
                    var templateUrl = attributes.loginTemplateUrl,
                        categoryCodesArray = [['LTAM','latam'],['GOLD','gold'],['PLTN','platinum'],['BLCK','black'],['BSIG','black-signature']],
                        categoryCodesMap = new Map(categoryCodesArray);
                    
                    scope.categoryCodeClass = categoryCodesMap.get(scope.session.categoryCode) ? categoryCodesMap.get(scope.session.categoryCode) : 'latam';
                    $rootScope.inLoginProcess = true;
                    templateUrl += "?profileLatam=" + scope.session.categoryCode;
                    dataLogin.profileLATAM( templateUrl ).then(loadProfileAction());
                }
            });
            
            function loadProfileAction( site ) {
                return function( source ){
                    element.html( source ).show();
                    $compile(element.html( source ).children())(scope);
                    eventTrigger();
                    
                    scope.$emit('ProfileDone', element, attributes);
                };
            }
            
            function eventTrigger(){
                var ProfileDropdownTrigger = document.querySelector(".Header-profile");
                var LauncherDropdownTrigger = document.querySelector(".Login-launcher");
                var LoginContainerProfile = document.querySelector('.Login-profile');
                
                var contentUserProfile = document.getElementById("userProfile");
                
                contentUserProfile.addEventListener('mouseleave', function(e){
                    LoginContainerProfile.classList.remove('isOpen');
                    LauncherDropdownTrigger.classList.remove('isOpen');
                    ProfileDropdownTrigger.classList.remove('isOpen');
                    ariaExpandedHandler(LauncherDropdownTrigger, true);
                    e.preventDefault();
                });

                LauncherDropdownTrigger.addEventListener('click', function(e){
                    LoginContainerProfile.classList.toggle('isOpen');
                    LauncherDropdownTrigger.classList.toggle('isOpen');
                    ProfileDropdownTrigger.classList.toggle('isOpen');
                    ariaExpandedHandler(LauncherDropdownTrigger, false);
                    e.preventDefault();
                });

                var ProfileIcon = document.querySelector(".Header-userProfileIcon");
                ProfileIcon.classList.add('isLoggedIn');
                LauncherDropdownTrigger.classList.add('isVisible');
                ProfileDropdownTrigger.classList.remove('isOpen');
            }

            // key events
            var loginCllbkGMM = function(e){
                var LauncherDropdownTrigger = document.querySelector(".Login-launcher");
                if(e.keyCode === 32 || e.keyCode === 13){
                    e.stopPropagation();
                    e.preventDefault();
                    if(LauncherDropdownTrigger.classList.contains("isOpen")){
                        var LoginContainerProfile = document.querySelector('.Login-profile');
                        LoginContainerProfile.classList.remove("isOpen");
                        ariaExpandedHandler(LauncherDropdownTrigger,true);
                    }
                    LauncherDropdownTrigger.classList.toggle("isOpen");
                    LauncherDropdownTrigger.focus();
                }
                if(e.keyCode === 38 || e.keyCode === 27){
                    if(e.target.classList.contains("Login-launcher")){
                        LauncherDropdownTrigger.classList.remove("isOpen");
                    }
                }
                if(e.keyCode === 40){
                    LauncherDropdownTrigger.classList.add("isOpen");
                    LauncherDropdownTrigger.focus();
                }
            };
            
            scope.loginCllbkGMM = loginCllbkGMM;
        }
    };
}]);
