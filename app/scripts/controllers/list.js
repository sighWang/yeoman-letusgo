/**
 * Created by sigh on 14-8-21.
 */
'use strict';

/**
 * @ngdoc function
 * @name yeomanLetusgoApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the yeomanLetusgoApp
 */
angular.module('yeomanLetusgoApp')
    .controller('ListCtrl', function ($scope) {
        var cartService = new CartService();
        var goodsList = cartService.getGoodslist();
        $scope.goodsList = goodsList;

        $scope.addOneToCart = function (index) {
            var id = goodsList[index].id;
            cartService.addGoodsNumberById(id);
        };
    });
