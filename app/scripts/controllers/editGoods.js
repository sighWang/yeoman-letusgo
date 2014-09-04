'use strict';
angular.module('yeomanLetusgoApp')
  .controller('EditGoodsCtrl', function ($scope, goodsListService) {

    $scope.goods = goodsListService.getStoreGoods();

    $scope.edit = function (goods) {
      goodsListService.editGoods(goods);
      console.log(goods);
    }
  });
