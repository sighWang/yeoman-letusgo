'use strict';
angular.module('yeomanLetusgoApp')
  .controller('ListmanageCtrl', function ($scope, cartService, goodsListService) {
    var goodsList = cartService.getGoodslist();

    $scope.goodsList = cartService.getGoodslist();

    $scope.showEdit = function (goods) {
      goodsListService.storeGoods(goods);
    };

    $scope.removeItem = function (index) {
      this.goodsList.splice(index, 1);
      goodsListService.editGoodsList(this.goodsList);
      $scope.goodsList = cartService.getGoodslist();
    };
  });
