app.directive('nav',[function(){
  return {
    restrict: 'A',
    link: function(scope, element, attributes){

      function ToggleMenu( e ){
        Loginprofile.classList.remove("isOpen");
        LoginForm.classList.remove("isOpen");
        maskDiv.classList.toggle('MobileMenu-mask--visible');
        Loginprofile.classList.remove("isOpen");
        LoginForm.classList.remove("isOpen");
        HeaderLogo.classList.toggle('MobileMenu--notDisplay');
        HeaderMobile.classList.toggle('MobileMenu--noPadding');
        MobileMenu.classList.toggle('MobileMenu--open');
        e.preventDefault();
      }
      //mask added on document ready
      var  Loginprofile=document.querySelector(".Login-profile");
      var  LoginForm=document.querySelector(".LoginForm");
      var maskDiv=document.createElement("div");
      maskDiv.className="MobileMenu-mask";
      document.body.appendChild(maskDiv);
      MobileMenuTrigger=document.querySelector(".Header-burger");
      var  Loginprofile=document.querySelector(".Login-profile");
      var  LoginForm=document.querySelector(".LoginForm");
      HeaderMobile=document.querySelector(".Header-stepBar--wPadding");
      HeaderLogo=document.querySelector(".Header-logo");
      MobileMenu=document.querySelector(".MobileMenu");
      //trigger on the hamburger icon
      MobileMenuTrigger.addEventListener("click",function(e){
        ToggleMenu( e );
      });
      //hide on mask click
      maskDiv.addEventListener("click",function(e){
        ToggleMenu( e );
      });

      /* Menu Swipe Event */

      var swipe = MobileMenu,
        startX,
        startY,
        threshold = 30; //required min distance traveled to be considered swipe


      function handleswipe(e, isrightswipe){
        if (isrightswipe) ToggleMenu( e );
      }

      swipe.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0];
        startX = touchobj.pageX;
        startY = touchobj.pageY;
      }, false);

      swipe.addEventListener('touchmove', function(e){
      }, false);

      swipe.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0];
        handleswipe(e, ( (touchobj.pageX - startX) >= threshold ) );
      }, false);

      $('#chooseCountry').on('change', function(el){
        window.location.href = $(this).val();
      });
    },

    templateUrl: function(elm, attrs){
      return app.templateNav;
    }
  }
}]);
