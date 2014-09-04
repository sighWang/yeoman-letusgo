'use strict';
angular.module('yeomanLetusgoApp')
  .controller('ListmanageCtrl', function ($scope, cartService, goodsListService) {
    var goodsList = goodsListService.getGoodslist();

    $scope.goodsList = goodsListService.getGoodslist();

    $scope.showEdit = function (goods) {
      goodsListService.storeGoods(goods);
    };

    $scope.removeItem = function (goods) {
      goodsListService.removeGoods(goods);
      $scope.goodsList = goodsListService.getGoodslist();
      console.log('here');
    };
  });
