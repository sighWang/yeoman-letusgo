angular.module('yeomanLetusgoApp')
    .controller('PayCtrl', function ($scope,cartService) {
        $scope.$emit('payChange');

        $scope.customGoodsList = cartService.getCustomGoodsList();
        $scope.total = cartService.getTotal();
    });
