'use strict';

describe('At moviegami module', function() {

    beforeEach(module('moviegami'));

    describe('temperature filter', function() {
        it('should return the temperature with celsius symbol', inject(function($filter) {
            var temperatureFilter = $filter('temperature');
            expect(temperatureFilter('5')).toEqual('5&deg;C');
        }));

        it ('should return zero degrees for an undefined input', inject(function($filter) {
            var temperatureFilter = $filter('temperature');
            expect(temperatureFilter()).toEqual('0&deg;C');
        }))
    });
});
