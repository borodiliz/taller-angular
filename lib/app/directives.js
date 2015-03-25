(function() {
    'use strict';

    angular.module('moviegami')
        .directive('movieItem', function() {
            return {
                restrict: 'E',
                templateUrl: 'templates/movie.html'
            };
        })
        .directive('actorItem', function() {
            return {
                restrict: 'E',
                templateUrl: 'templates/actor.html'
            };
        });
})();

