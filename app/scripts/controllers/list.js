angular.module('yeomanLetusgoApp')
    .controller('ListCtrl', function ($scope,cartService) {
        var goodsList = cartService.getGoodslist();
        $scope.goodsList = goodsList;

        $scope.addOneToCart = function (index) {
            var id = goodsList[index].id;
            cartService.addGoodsNumberById(id);
        };
    });
