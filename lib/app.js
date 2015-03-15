(function() {
    'use strict';

    var app = angular.module('helloWorld', []);

    app.controller('MoviesController', function() {
        this.moviesCollection = [
            {
                title: 'The Bourne Identity',
                year: '2002',
                imdbRating: '7.9'
            },
            {
                title: 'The Bourne Supremacy',
                year: '2004',
                imdbRating: '7.8'
            },
            {
                title: 'The Bourne Ultimatum',
                year: '2007',
                imdbRating: '8.1'
            },
            {
                title: 'The Bourne Legacy',
                year: '2012',
                imdbRating: '6.7'
            }
        ];
    });
})();

