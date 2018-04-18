app.directive('login',['$templateCache', 'dataLogin', '$cookies', '$timeout', function($templateCache, dataLogin, $cookies, $timeout){
  return {
    restrict: 'A',
    link: function(scope, el, attributes){

      scope.session = {};

      attributes.$observe('tam', function(value) {
        init(value ? 'tam' : 'lan');
      });

      ProfileDropdownTrigger=document.querySelector(".Header-profile");
      ProfileIcon = document.querySelector(".Header-userProfileIcon");
      LauncherDropdownTrigger=document.querySelector(".Login-launcher");
      LoginContainerForm = document.querySelector('.LoginForm');
      LoginContainerProfile = document.querySelector('.Login-profile');


      function init(tam) {
        scope.submitLoginForm = function() {
          submitForm( tam );
        };

        switchDropdown();

      }

      function submitForm( tam ){
        if ( scope.loginUser == 'admin' && scope.loginPassword == 'admin' ){

          dataLogin.get( scope.loginUser, scope.loginPassword, tam, scope.selectDemo.value ).then(function( status ){
            if ( status == 'ok' ) {

              scope.session = {
                "name": "Maria Soledad",
                "tam": tam,
                "pass": {
                  "type": scope.selectDemo.value,
                  "card": "comodoro",
                  "title": "Comodoro",
                  "kms": "120.000"
                }
              };


              /*
              scope.session = {
                "name": $cookies.profile_name,
                "tam": tam,
                "pass": {
                  "type": $cookies.profile_type,
                  "card": $cookies.profile_card,
                  "title": $cookies.profile_title,
                  "kms": $cookies.profile_kms
                }
              };
              */
              //console.log( scope.session );




            }else{
              scope.session = {};
            }

            switchDropdown();
          });

        }else{
          $('#LoginFormErrorModal').modal('show');
        }
      }

      function switchDropdown(){
        if ( !angular.equals({}, scope.session) ){
          LoginContainerForm.style.display = 'none';
          ProfileIcon.classList.add('isLoggedIn');
          LauncherDropdownTrigger.classList.add('isVisible');
          ProfileDropdownTrigger.classList.remove('isOpen');
          //LoginContainerProfile.style.display = 'block';
        }else{
          LoginContainerForm.style.display = 'block';
          ProfileIcon.classList.remove('isLoggedIn');
          LauncherDropdownTrigger.classList.remove('isVisible');
          //LoginContainerProfile.style.display = 'none';
        }
      }

      function ToggleDropdown(e){
        // TODO: Check if is logged in or not, and open the appropiated div

        if ( !angular.equals({}, scope.session) ) {
          LoginContainerProfile.classList.toggle('isOpen');
        }else{
          LoginContainerForm.classList.toggle('isOpen');
        }
        LauncherDropdownTrigger.classList.toggle('isOpen');
        ProfileDropdownTrigger.classList.toggle('isOpen');

        if (e) e.preventDefault();
      }

      LauncherDropdownTrigger.addEventListener('mouseover', function(e){
        LoginContainerProfile.classList.add('isOpen');
        LauncherDropdownTrigger.classList.add('isOpen');
        ProfileDropdownTrigger.classList.add('isOpen');
        e.preventDefault();
      });

      LauncherDropdownTrigger.addEventListener('click', function(e){
        LoginContainerProfile.classList.remove('isOpen');
        LauncherDropdownTrigger.classList.remove('isOpen');
        ProfileDropdownTrigger.classList.remove('isOpen');
        e.preventDefault();
      });

      ProfileDropdownTrigger.addEventListener('click', function(e){
        ToggleDropdown(e);
      });

    },
    templateUrl: function(elm, attrs){
      return app.templateLogin;
    }
  }
}]);
