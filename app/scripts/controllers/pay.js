angular.module('yeomanLetusgoApp')
    .controller('PayCtrl', function ($scope) {
        var cartService = new CartService();
        var goodsList = cartService.getGoodslist();
        $scope.goodsList = goodsList;

        $scope.addOneToCart = function (index) {
            var id = goodsList[index].id;
            cartService.addGoodsNumberById(id);
        };
    });
