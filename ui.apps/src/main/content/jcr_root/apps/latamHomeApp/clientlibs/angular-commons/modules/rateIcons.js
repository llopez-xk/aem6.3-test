(function () {
    'use strict';
    angular.module('rateicons', [])

    .filter('rateicon', function () {
        var types = {
            'PASAJE': 'icon-plane-departure',
            'CANJE': 'icon-plane-kms',
            'DINERO': 'icon-money-positive',
            'HOTEL': 'icon-hotel',
            'AUTO': 'icon-car'
        };
        return function (input) {
            if (input === undefined) return;
            if (typeof input === 'object') return input;
            return (types[input] ? types[input] : input);
        };
    })
    
    .filter('rateiconlatam', function() {
        /* dynamic pricing types: PASAJE, CANJE, DINERO, HOTEL, AUTO */
        var types = {
            'PASAJE': 'icon-regular-air001',
            'CANJE': 'icon-regular-ffp008',
            'DINERO': 'icon-regular-sig011',
            'HOTEL': 'icon-regular-peo010',
            'AUTO': 'icon-regular-sig054',
            'PROGRAMA': 'icon-regular-tra006'
        };
        return function (input) {
            if (input === undefined) return;
            if (typeof input === 'object') return input;
            return (types[input] ? types[input] : input);
        };
    });
    
}());
