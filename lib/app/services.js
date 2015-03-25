(function() {
    'use strict';

    function MovieService($http) {

        var rootPath = 'http://localhost:1337';

        function getMovies(successCallback, errorCallback) {
            $http.get(rootPath + '/movies')
                .success(successCallback)
                .error(errorCallback);
        }

        function getActors(successCallback, errorCallback) {
            $http.get(rootPath + '/actors')
                .success(successCallback)
                .error(errorCallback);
        }

        return {
            getMovies: getMovies,
            getActors: getActors
        };
    }

    angular.module('moviegami').service('$movieService', ['$http', MovieService]);
})();