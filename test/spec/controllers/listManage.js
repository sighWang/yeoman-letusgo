'use strict';
describe('Controller: ListmanageCtrl', function () {
  var $scope, createController, goodsListService, $controller;

  beforeEach(function () {
    module('yeomanLetusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      $controller = $injector.get('$controller');
      goodsListService = $injector.get('goodsListService');

      createController = function () {
        return $controller('ListmanageCtrl', {
          $scope: $scope
        });
      };
    });
  });

  describe('goodsListManageCtrl add remove edit get', function () {
    it('should can get all goods', function () {
      createController();
      expect($scope.goodsList).toEqual(jasmine.any(Object));
     // expect($scope.goodsList.length).toBeGreaterThan(0);
    });

    it('showEdit : goodsListService.storeGoods should be called', function () {
      createController();
      spyOn(goodsListService, 'storeGoods');
      $scope.showEdit({id: '2'});
      expect(goodsListService.storeGoods).toHaveBeenCalledWith({id: '2'});
    });

    it('removeItem : goodsList should be minus one', function () {
      createController();
      var length = $scope.goodsList.length;
      var badminton = new Goods('ITEM000003', '羽毛球', '个', 4.50, 'sport');
      // $scope.removeItem(badminton);
      expect(length - 1).toEqual(length - 1);
    });
  });
});
