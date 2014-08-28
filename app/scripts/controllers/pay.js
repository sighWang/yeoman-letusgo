angular.module('yeomanLetusgoApp')
    .controller('PayCtrl', function ($scope,cartService) {
        $scope.$parent.cartActive = '';
        $scope.$parent.cartActive = '';

        var customGoodsList = cartService.getCustomGoodsList();
        $scope.customGoodsList = customGoodsList;

        $scope.addOneToCart = function (index) {
            var id = customGoodsList[index].id;
            cartService.addGoodsNumberById(id);
        };

        $scope.total = cartService.getTotal();
        $scope.customGoodsList = customGoodsList;
    });