'use strict';

describe('Controller: indexCtrl', function () {
    var $scope, createController, cartServices,  $controller;

    beforeEach(function () {
        module('yeomanLetusgoApp');

      inject(function ($injector) {

        $scope = $injector.get('$rootScope').$new();
        $controller = $injector.get('$controller');
        cartServices = $injector.get('cartService');

        createController = function () {
          return $controller('IndexCtrl', {
            $scope: $scope
          });
        };
      });
    });

    describe('index.js', function () {

        it('$scope.cartNumber: should be a number', function () {
            createController();
            expect($scope.cartNumber).toEqual(jasmine.any(Number));
        });
    });
});
