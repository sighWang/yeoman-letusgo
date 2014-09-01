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
        return $controller('CartCtrl', {
          $scope: $scope
        });
      };
    });
  });

  describe('cart.js', function () {

    it('$scope.catagarys: should be a number', function () {
      createController();
      expect($scope.catagarys).toEqual(jasmine.any(Object));
    });
    it('addOneToCart:should call cartService.addGoodsNumberById',function () {
      createController();
      spyOn(cartService, 'addGoodsNumberById');
      spyOn(cartService, 'getTotal');
      spyOn(cartService, 'getCartNumber');
      spyOn(cartService, 'getCatagary');
      var good = new Goods('ITEM000002', '荔枝','斤', 15.00, 'fruit');
      $scope.addOneToCart({goods: good, number: 2});
      expect(cartService.addGoodsNumberById).toHaveBeenCalledWith('ITEM000002');
      expect(cartService.getTotal).toHaveBeenCalled();
      expect(cartService.getCartNumber).toHaveBeenCalled();
      expect(cartService.getCatagary).toHaveBeenCalled();

    });
    it('minusGoodsNumberById:should call cartService.minusGoodsNumberById', function () {
      createController();
      spyOn(cartService, 'minusGoodsNumberById');
      var good = new Goods('ITEM000002', '荔枝','斤', 15.00, 'fruit');
      $scope.minusOneToCart({goods: good, number: 2});
      expect(cartService.minusGoodsNumberById).toHaveBeenCalledWith('ITEM000002');
    });
  });
});
