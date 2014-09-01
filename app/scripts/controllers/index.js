    angular.module('yeomanLetusgoApp')
        .controller('IndexCtrl', function ($scope, cartService, localStorageService) {
        initData(localStorageService);

        $scope.cartNumber = cartService.getCartNumber();
        $scope.listActive = '';
        $scope.cartActive = '';

        $scope.$on('updateCartNumber', function () {
          $scope.cartNumber = cartService.getCartNumber();
        });

        $scope.$on('welcomeChange', function () {
          $scope.cartActive = '';
          $scope.listActive = '';
        });

        $scope.$on('cartChange', function () {
          $scope.listActive = '';
          $scope.cartActive = 'active';
        });

        $scope.$on('listChange', function () {
          $scope.cartActive = '';
          $scope.listActive = 'active';
        });

        $scope.$on('payChange', function () {
          $scope.cartActive = '';
          $scope.listActive = '';
        });

    });
