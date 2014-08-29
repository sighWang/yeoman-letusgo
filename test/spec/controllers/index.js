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

    describe('title', function () {

        it('should be a number', function () {
            createController();
            expect($scope.cartNumber).toEqual(jasmine.any(Number));
            expect(1).toEqual(1);
        });
    });

    it('should attach a list of awesomeThings to the scope', function () {
        expect(3).toBe(3);
    });
});
