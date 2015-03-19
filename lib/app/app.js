(function() {
    'use strict';

    angular.module('moviegami', []).config(['$sceDelegateProvider', function($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'http://*.media-imdb.com/**'
        ]);
    }]);
})();

