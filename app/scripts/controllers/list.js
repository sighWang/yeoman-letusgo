'use strict';
angular.module('yeomanLetusgoApp')
    .controller('ListCtrl', function ($scope, cartService) {
        $scope.$emit('listHighLight');
        $scope.goodsList = cartService.getGoodslist();

        $scope.addOneToCart = function (goods) {
            cartService.addGoodsNumberById(goods.id);
            $scope.$emit('updateCartNumber');
        };
    });
