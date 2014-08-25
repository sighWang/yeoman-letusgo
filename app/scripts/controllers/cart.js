angular.module('yeomanLetusgoApp')
    .controller('CartCtrl', function ($scope,cartService) {
      //  var cartService = new CartService();
        var goodsList = cartService.getGoodslist();
        var customGoodsList = cartService.getCustomGoodsList();
        var catagarys = _.groupBy(customGoodsList,function (customGoods){
            return customGoods.goods.catagary;
        });
        $scope.catagarys = catagarys;
        $scope.catagaryNames = Object.keys(catagarys);
        $scope.getSubtotal = function (item) {
            return item.number * item.goods.price;
        };
        $scope.addOneToCart = function (index) {
            var id = goodsList[index].id;
            cartService.addGoodsNumberById(id);
        };
        $scope.total = cartService.getTotal();

    });
