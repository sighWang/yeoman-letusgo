angular.module('yeomanLetusgoApp')
    .controller('CartCtrl', function ($scope,cartService) {
        $scope.$parent.listActive = '';
        $scope.$parent.cartActive = 'active';

        $scope.catagarys = cartService.getCatagary();
        $scope.catagaryNames = Object.keys(cartService.getCatagary());
        $scope.total = cartService.getTotal();

        $scope.addOneToCart = function (item) {
            cartService.addGoodsNumberById(item.goods.id);
            $scope.total = cartService.getTotal();
            $scope.$parent.cartNumber = cartService.getCartNumber();
            $scope.catagarys = cartService.getCatagary();
        };
        $scope.minusOneToCart = function (item){
            cartService.minusGoodsNumberById(item.goods.id);
            $scope.total = cartService.getTotal();
            $scope.$parent.cartNumber = cartService.getCartNumber();
            $scope.catagarys = cartService.getCatagary();
        };
    });
