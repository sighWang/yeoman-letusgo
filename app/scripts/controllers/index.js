    angular.module('yeomanLetusgoApp')
        .controller('IndexCtrl', function ($scope,cartService) {
        var cartNumber = cartService.getCartNumber();
        $scope.cartNumber = cartNumber;
        $scope.listActive = '';
        $scope.cartActive = '';
    });