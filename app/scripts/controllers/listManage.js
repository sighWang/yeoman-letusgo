'use strict';
angular.module('yeomanLetusgoApp')
  .controller('ListmanageCtrl', function ($scope, cartService, goodsListService) {
    var goodsList = cartService.getGoodslist();
    _.forEach(goodsList, function (good) {
      good.show = true;
    });

    $scope.goodsList = cartService.getGoodslist();

    $scope.showEdit = function (goods) {
      goods.show = !goods.show;
      $scope.item = goods;
    };

    $scope.editItem = function (goods) {
      console.log(goods);
      var index = _.findIndex(goodsList, {'id': goods.id});
      console.log(goods.price);
      goods.show = true;
      goodsList[index] = goods;
      goodsListService.editGoodsList(goodsList);
      //goods.show = !goods.show;
      $scope.goodsList = goodsListService.getGoodslist();
    };

    $scope.removeItem = function (index) {
      this.goodsList.splice(index, 1);
      goodsListService.editGoodsList(this.goodsList);
      $scope.goodsList = cartService.getGoodslist();
    };
  });
