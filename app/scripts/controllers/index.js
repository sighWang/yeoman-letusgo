'use strict';

/**
 * @ngdoc function
 * @name yeomanLetusgoApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the yeomanLetusgoApp
 */
angular.module('yeomanLetusgoApp')
    .controller('IndexCtrl', function ($scope) {
        var cartService = new CartService();
        var customGoodsList = cartService.getCustomGoodsList();
        var cartNumber = 0;
        for (var i = 0; i < customGoodsList.length; i++){
            cartNumber += customGoodsList[i].number;
        }
        $scope.cartNumber = cartNumber;
        console.log(cartNumber);
    });
