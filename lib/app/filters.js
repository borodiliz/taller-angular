(function() {
    'use strict';

    angular.module('moviegami').filter('temperature', function() {
        return function(text) {
            if (text)
                return text + '&deg;C';
            else
                return '0&deg;C';
        };
    });
})();