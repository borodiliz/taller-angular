(function() {
    'use strict';

    function configureApp($sceDelegateProvider, $routeProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'http://*.media-imdb.com/**'
        ]);

        $routeProvider
            .when('/movies', {
                templateUrl: 'templates/moviesListing.html',
                controller: 'moviesController'
            })
            .when('/actors', {
                templateUrl: 'templates/actorsListing.html',
                controller: 'actorsController'
            })
            .when('/', {
                redirectTo: '/movies'
            })
            .otherwise({
                redirectTo: '/movies'
            });
    }

    angular
        .module('moviegami', ['ngRoute'])
        .config(['$sceDelegateProvider', '$routeProvider', configureApp]);
})();

