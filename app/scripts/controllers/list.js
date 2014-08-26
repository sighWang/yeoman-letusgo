angular.module('yeomanLetusgoApp')
    .controller('ListCtrl', function ($scope,cartService) {
        $scope.$emit('to-parent-incart');
        var goodsList = cartService.getGoodslist();
        $scope.goodsList = goodsList;

        $scope.addOneToCart = function (index) {
            var id = goodsList[index].id;
            cartService.addGoodsNumberById(id);
            $scope.$parent.cartNumber = cartService.getCartNumber();
            $scope.$emit('to-parent-changeamounts');
        };
    });