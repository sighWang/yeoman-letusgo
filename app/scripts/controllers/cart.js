angular.module('yeomanLetusgoApp')
    .controller('CartCtrl', function ($scope,cartService) {

         $scope.$emit('cartHighLight');

        $scope.catagarys = cartService.getCatagary();
        $scope.catagaryNames = Object.keys(cartService.getCatagary());
        $scope.total = cartService.getTotal();

        $scope.addOneToCart = function (item) {
            cartService.addGoodsNumberById(item.goods.id);
            $scope.total = cartService.getTotal();
            $scope.catagarys = cartService.getCatagary();
            $scope.$emit('updateCartNumber');
        };
        $scope.minusOneToCart = function (item){
            cartService.minusGoodsNumberById(item.goods.id);
            $scope.total = cartService.getTotal();
            $scope.catagarys = cartService.getCatagary();
            $scope.$emit('updateCartNumber');
        };
    });
