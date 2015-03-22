(function() {
    'use strict';

    function MovieService($http) {

        var rootPath = 'http://localhost:1337';

        function getMovies(successCallback, errorCallback) {
            $http.get(rootPath + '/movies')
                .success(successCallback)
                .error(errorCallback);
        }

        return {
            getMovies: getMovies
        };
    }

    angular.module('moviegami').service('$movieService', ['$http', MovieService]);
})();