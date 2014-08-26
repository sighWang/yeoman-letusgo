angular.module('yeomanLetusgoApp')
    .controller('CartCtrl', function ($scope,cartService,localStorageService) {
        var goodsList = cartService.getGoodslist();
        var customGoodsList = cartService.getCustomGoodsList();
        var catagarys = _.groupBy(customGoodsList,function (customGoods){
            return customGoods.goods.catagary;
        });
        $scope.catagarys = catagarys;
        $scope.catagaryNames = Object.keys(catagarys);

        $scope.addOneToCart = function (item) {
            cartService.addGoodsNumberById(item.goods.id);
            $scope.total = cartService.getTotal();
            $scope.$parent.cartNumber = cartService.getCartNumber();
        };
        $scope.minusOneToCart = function (item){
            var index = customGoodsList.indexOf(item);
            customGoodsList[index].number--;
            localStorageService.set('customGoodsList',customGoodsList);
            $scope.total = cartService.getTotal();
            $scope.$parent.cartNumber = cartService.getCartNumber();
        };
        $scope.total = cartService.getTotal();
    });
