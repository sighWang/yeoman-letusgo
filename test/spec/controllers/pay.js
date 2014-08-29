'use strict';

describe('Controller: indexCtrl', function () {
  var $scope, createController, cartService,  $controller;

  beforeEach(function () {
    module('yeomanLetusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      $controller = $injector.get('$controller');
      cartService = $injector.get('cartService');

      createController = function () {
        return $controller('PayCtrl', {
          $scope: $scope
        });
      };
    });
  });

  describe('pay.js', function () {

    it('$scope.goodsList: should be a number', function () {
      createController();
      expect($scope.customGoodsList.length).toEqual(jasmine.any(Number));
    });

    it('$scope.goodsList: should be a number', function () {
      createController();
      expect($scope.total).toEqual(jasmine.any(Number));
    });
  });
});
