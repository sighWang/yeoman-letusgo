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
        $scope.goodsList = cartService.getGoodslist();
    });
