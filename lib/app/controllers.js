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

    angular.module('moviegami').controller('MoviesController', ['$movieService', MoviesController]);
})();