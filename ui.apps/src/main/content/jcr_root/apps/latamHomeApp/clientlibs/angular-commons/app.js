try {
    angular.module('latamCommonsApp');
    angular.module('latamApp', ['app', 'latamCommonsApp']);
} catch (e) {
    (function(window) {
        window.Latam = window.Latam || {};
        Latam.Utils = Latam.Utils || {};
    })(window);

    angular.module('latamApp', ['app']);
}
