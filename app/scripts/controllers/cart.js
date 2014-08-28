angular.module('yeomanLetusgoApp')
    .controller('CartCtrl', function ($scope,cartService) {
        $scope.$parent.listActive = '';
        $scope.$parent.cartActive = 'active';

        var catagarys = cartService.getCatagary();
        $scope.catagarys = catagarys;
        $scope.catagaryNames = Object.keys(catagarys);

        $scope.addOneToCart = function (item) {
            cartService.addGoodsNumberById(item.goods.id);
            $scope.total = cartService.getTotal();
            $scope.$parent.cartNumber = cartService.getCartNumber();
        };

        $scope.minusOneToCart = function (item){
            cartService.minusGoodsNumberById(item.goods.id);
            $scope.total = cartService.getTotal();
            $scope.$parent.cartNumber = cartService.getCartNumber();
            $scope.catagarys = cartService.getCatagary();
            console.log($scope.catagary);
        };
        $scope.total = cartService.getTotal();
    });
