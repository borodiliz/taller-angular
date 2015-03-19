(function() {
    'use strict';

    function MoviesController($http) {
        var me = this;

        $http.get('http://localhost:1337/movies')
            .success(function(data) {
                me.moviesCollection = data;
            })
            .error(function(data) {
                console.log('Error trying to get the movies :-(');
            });
    }

    angular.module('moviegami').controller('MoviesController', ['$http', MoviesController]);
})();