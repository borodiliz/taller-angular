'use strict';

describe('At moviegami module', function() {

    beforeEach(module('moviegami'));

    describe('movies controller', function() {

        var moviesController;

        beforeEach(inject(function($controller){
            moviesController = $controller('moviesController');
        }));

        it('should be defined', function(){
            expect(moviesController).toBeDefined();
        });

        it('should recover movies from service on load', inject(function($movieService) {
            spyOn($movieService, 'getMovies');

            moviesController.load();

            expect($movieService.getMovies).toHaveBeenCalled();
        }));

    });
});