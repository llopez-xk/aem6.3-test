angular.module('app').directive('nav',['$ariaExpandedHandler', '$templateCache', '$window', 'dataLogin', function(ariaExpandedHandler, $templateCache, $window, dataLogin){
    return {
        restrict: 'A',
        bindToController: true,
        link: function navLink (scope, element, attributes) {
            //select all of the  main menu items

            if($window.viewport.isMobile()){
                var MobileMenu = document.querySelector(".MobileMenu");

                function ToggleMenu( e ) {
                    //check if the element exist
                    var  Loginprofile = document.querySelector(".Login-profile");
                    if (Loginprofile) {
                        Loginprofile.classList.remove("isOpen");
                    }

                    var HeaderCookie = document.querySelector('.Header-cookie');
                    if ( HeaderCookie ) {
                        var NavHeight = window.innerHeight - HeaderCookie.offsetHeight;
                        MobileMenu.style.height = NavHeight + 'px';
                    }
                    maskDiv.classList.toggle('MobileMenu-mask--visible');

                    var HeaderLogo = document.querySelector(".Header-logo");
                    HeaderLogo.classList.toggle('MobileMenu--notDisplay');
                    var HeaderMobile = document.querySelector(".Header-stepBar--wPadding");
                    HeaderMobile.classList.toggle('MobileMenu--noPadding');
                    MobileMenu.classList.toggle('MobileMenu--open');
                    var html = document.querySelector('html');
                    var body = document.querySelector('body');
                    body.classList.toggle('PreventScroll');
                    html.classList.toggle('PreventScroll');
                    e.preventDefault();
                }
                
                //mask added on document ready
                //event only when the profile action is done
                var maskDiv = document.createElement("div");
                maskDiv.className = "MobileMenu-mask";
                document.body.appendChild(maskDiv);
    
                var ItemMenu = element.find(".MainNav-menuLink");

                //trigger on the hamburger icon
                ItemMenu.on('mouseenter', function(e) {
                    ariaExpandedHandler(e.target,false);
                });
                
                ItemMenu.on('mouseleave', function(e) {
                    ariaExpandedHandler(e.target,true);
                });
                var MobileMenuTrigger = document.querySelector(".Header-burger");
                MobileMenuTrigger.addEventListener("click", function(e) {
                    ToggleMenu( e );
                });
                
                //hide on mask click
                maskDiv.addEventListener("click", function(e) {
                    ToggleMenu( e );
                });

                /* Menu Swipe Event */

                var swipe = MobileMenu,
                    startX,
                    startY;

                function handleswipe(e, isrightswipe) {
                    if (isrightswipe) ToggleMenu( e );
                }
                
                swipe.addEventListener('touchstart', function(e) {
                    var touchobj = e.changedTouches[0];
                    startX = touchobj.pageX;
                    startY = touchobj.pageY;
                }, false);
                
                swipe.addEventListener('touchmove', function(e) {
                }, false);
                
                swipe.addEventListener('touchend', function(e) {
                    var threshold = 30; //required min distance traveled to be considered swipe
                    var touchobj = e.changedTouches[0];
                    handleswipe(e, ( (touchobj.pageX - startX) >= threshold ) );
                }, false);

            } else {

                if(scope.selectedIndexNav) {
                    var mainNavSelectedIndex = document.querySelectorAll('.MainNav-menuItem')[scope.selectedIndexNav-1];
                    mainNavSelectedIndex.classList.add('isActive');
                }
    
                toggleNavMain = function (e) {
                    var elementClasses = e.target.classList;
                    if ((e.keyCode === 13 || e.keyCode === 32) && elementClasses.contains( 'MainNav-menuLink' )) {
                        if (!elementClasses.contains( 'active' )) {
                            var mainNavMenuLink = document.querySelector(".MainNav-menuLink");
                            if (mainNavMenuLink){
                                mainNavMenuLink.classList.remove("active");
                            }
                            elementClasses.add('active');
                        } else {
                            ariaExpandedHandler(e.target,true);
                            elementClasses.remove('active');
                            elementClasses.remove('NoFocusable');
                            e.target.focus();
                        }
                    }
                    if (e.keyCode === 40) {
                        elementClasses.add('active');
                    }
                    if (e.keyCode === 27 || e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 38) {
                        elementClasses.remove('active');
                    }
                };
                scope.pushNavMain = toggleNavMain;
            }

            if (dataLogin.isLoggedIn()){
                var menuItemInitial = document.querySelector(".MainNav-menuItem--initial");
                var userData = Auth.getUserData();
                menuItemInitial.innerHTML = "";

                if (userData.program === "LP" || userData.program === "LT") {
                    if($window.viewport.isMobile()){
                        var lanpassMobile = document.querySelector(".button_lanpass");
                        menuItemInitial.appendChild(lanpassMobile);
                    } else {
                		var lanpass = document.querySelector(".all_lanpass");
                        menuItemInitial.appendChild(lanpass);
                    }
                } else if (userData.program === "LF" || userData.program === "TM" || userData.program === "EB") {
                    if($window.viewport.isMobile()){
                        var fidelidadeMobile = document.querySelector(".button_fidelidade");
                        menuItemInitial.appendChild(fidelidadeMobile);
                    } else {
                        var fidelidade = document.querySelector(".all_fidelidade");
                        menuItemInitial.appendChild(fidelidade);
                    }
                }
            }
        }
    }
}]);
