angular.module('yeomanLetusgoApp')
  .controller('ListmanageCtrl', function ($scope, cartService) {
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
      goods.show = !goods.show;
    };
    $scope.removeItem = function (index) {
      $scope.goodsList.splice(index, 1);
    };
  });
