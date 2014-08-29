    angular.module('yeomanLetusgoApp')
        .controller('IndexCtrl', function ($scope,cartService,localStorageService) {
        initData(localStorageService);
        var cartNumber = cartService.getCartNumber();
        $scope.cartNumber = cartNumber;
        $scope.listActive = '';
        $scope.cartActive = '';
    });
