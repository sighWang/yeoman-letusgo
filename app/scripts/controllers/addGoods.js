'use strict';
angular.module('yeomanLetusgoApp')
  .controller('AddGoodsCtrl', function ($scope, goodsListService) {
    $scope.add = function (goods) {
      console.log(goods);
      goodsListService.addGoods(goods);
      $scope.$emit('refreshGoodsList');
      $scope.$broadcast('refreshGoodsList');
    };
    $scope.catagarys = catagaryService.getCatagary();
  });
