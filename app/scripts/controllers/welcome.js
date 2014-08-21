'use strict';

/**
 * @ngdoc function
 * @name yeomanLetusgoApp.controller:WelcomeCtrl
 * @description
 * # WelcomeCtrl
 * Controller of the yeomanLetusgoApp
 */
angular.module('yeomanLetusgoApp')
    .controller('WelcomeCtrl', function ($scope) {
        $scope.hello = [
            'Item1',
            'Item2',
            'Item3'
        ];
    });
