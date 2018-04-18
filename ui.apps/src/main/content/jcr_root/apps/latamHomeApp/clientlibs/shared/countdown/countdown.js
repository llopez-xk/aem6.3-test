/**
 * @description
 * (encabezadoLandingDestinos, encabezadoAgrupacionDestinos: destino, destinoAgrupacion)
 */
app.directive('countdown', ['dataTrustedDomains', '$interval', function(dataTrustedDomains, $interval) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      countdownColor: '@countdownColor',
      'timeout': "@"
    },
    link: function(scope, element, attribute){

      var normalDate = new Date(scope.timeout),
          timeOut = new Date(normalDate.getTime() + normalDate.getTimezoneOffset() * 60000),
          interval,
          getUTCDate = function() {
            var timeNow = new Date();
            return new Date(timeNow.getTime() + timeNow.getTimezoneOffset() * 60000); // Calculate today UTC Date
          },
          timeStart = getUTCDate(),
          fixLocaleLabels = function(time) {
            // Fix plural/singular labels
            if(time.days === 1) {
              scope.locale.days = app.localeDays.daysS;
            } else {
              scope.locale.days = app.localeDays.days;
            }

            if(time.minutes === 1) {
              scope.locale.minutes = app.localeDays.minutesS;
            } else {
              scope.locale.minutes = app.localeDays.minutes;
            }

            if(time.hours === 1) {
              scope.locale.hours = app.localeDays.hoursS;
            } else {
              scope.locale.hours = app.localeDays.hours;
            }
          },
          checkTime = function() {
            if( timeStart < timeOut ) {
              timeStart = getUTCDate();
            } else {
              timeStart = timeOut;
            }
            scope.time = countdown(timeOut, timeStart, ~(countdown.WEEKS | countdown.MONTHS));
            fixLocaleLabels(scope.time);
          };

      // Default english locales
      scope.locale = {};
      app.localeDays = app.localeDays || {days : "Days", daysS: "Day", hours: "Hours", hoursS: "Hour", minutes: "Minutes", minutesS: "Minute"};
      checkTime();

      // Calculate difference every minute
      interval = $interval(function() {
        if( timeStart < timeOut ) {
          checkTime();
        } else {
          $interval.cancel(interval);
        }
      }, 60000);
    },
    templateUrl: function(elm, attrs) {
      return dataTrustedDomains.getCheckedUrl( attrs.templateUrl );
    }
  };
}]);