angular.module('yeomanLetusgoApp')
    .controller('PayCtrl', function ($scope,cartService) {
        $scope.$parent.cartActive = '';
        $scope.$parent.cartActive = '';

        $scope.customGoodsList = cartService.getCustomGoodsList();

        $scope.total = cartService.getTotal();
    });
