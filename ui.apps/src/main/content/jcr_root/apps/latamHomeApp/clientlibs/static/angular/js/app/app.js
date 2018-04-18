var app = angular.module('app', ['ngAnimate', 'ngSanitize', 'ngCookies', 'rateicons', 'ariaExpandedHandler', 'ngAria', 'ngAccess', 'ngDialog', 'ellipsis', 'Scope.onReady', 'slugify', 'TAMLangMap'], ['$ariaProvider', '$compileProvider', function config($ariaProvider, $compileProvider) {
    $ariaProvider.config({
        ariaInvalid: false
    });
    if (app.environment === 'production') {
        $compileProvider.debugInfoEnabled(false);
    }
}]);
