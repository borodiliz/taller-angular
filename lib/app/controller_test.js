'use strict';

describe('At moviegami module', function() {

    beforeEach(module('moviegami'));

    describe('movies controller', function() {

        it('should exists', inject(function($controller) {
            var moviesController = $controller('MoviesController');
            expect(moviesController).toBeDefined();
        }));

    });
});