'use strict';
angular.module('yeomanLetusgoApp')
  .controller('EditGoodsCtrl', function ($scope, goodsListService) {
      $scope.goods = goodsListService.getStoreGoods();
  });
