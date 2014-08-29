angular.module('yeomanLetusgoApp')
    .controller('ListCtrl', function ($scope,cartService) {
        $scope.$parent.cartActive = '';
        $scope.$parent.listActive = 'active';
        $scope.goodsList = cartService.getGoodslist();

        $scope.addOneToCart = function (goods) {
            cartService.addGoodsNumberById(goods.id);
            $scope.$parent.cartNumber = cartService.getCartNumber();
        };
    });
