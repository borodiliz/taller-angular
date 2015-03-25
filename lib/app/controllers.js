(function() {
    'use strict';

    function MoviesController($movieService) {
        var me = this;

        function onGetMoviesSuccess(data) {
            me.moviesCollection = data;
        }

        function onGetMoviesError() {
            console.log('Error trying to get the movies :-(');
        }

        this.load = function() {
            $movieService.getMovies(onGetMoviesSuccess, onGetMoviesError);
        };

        this.load();
    }

    function ActorsController($movieService) {
        var me = this;

        function onGetActorsSuccess(data) {
            me.actorsCollection = data;
        }

        function onGetActorsError() {
            console.log('Error trying to get the movies :-(');
        }

        this.load = function() {
            $movieService.getActors(onGetActorsSuccess, onGetActorsError);
        };

        this.load();
    }

    function NavigationStatusController($location) {

        this.isMoviesPath = function() {
            return '/movies' == $location.path();
        };

        this.isActorsPath = function() {
            return '/actors' == $location.path();
        };

    }

    angular
        .module('moviegami')
        .controller('moviesController', ['$movieService', MoviesController])
        .controller('actorsController', ['$movieService', ActorsController])
        .controller('navigationStatusController', ['$location', NavigationStatusController]);
})();