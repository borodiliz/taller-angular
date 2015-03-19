(function() {
    'use strict';

    var app = angular.module('helloWorld', []);

    app.controller('MoviesController', function($http) {
        var me = this;

        $http.get('http://localhost:1337/movies')
            .success(function(data) {
                me.moviesCollection = data;
            })
            .error(function(data) {
                console.log('Error trying to get the movies :-(');
            });
    });
})();

