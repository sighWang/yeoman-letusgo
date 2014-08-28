angular.module('yeomanLetusgoApp')
    .controller('ListCtrl', function ($scope,cartService) {
        $scope.$parent.cartActive = '';
        $scope.$parent.listActive = 'active';
        var goodsList = cartService.getGoodslist();
        $scope.goodsList = goodsList;

        $scope.addOneToCart = function (goods) {
            cartService.addGoodsNumberById(goods.id);
            $scope.$parent.cartNumber = cartService.getCartNumber();
        };
    });