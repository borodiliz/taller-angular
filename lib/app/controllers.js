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

        $movieService.getMovies(onGetMoviesSuccess, onGetMoviesError);
    }

    angular.module('moviegami').controller('MoviesController', ['$movieService', MoviesController]);
})();