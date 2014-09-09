'use strict';

angular.module('yeomanLetusgoApp')
  .controller('EditCatagaryCtrl', function ($scope, catagaryService) {
    $scope.getCatagary = function () {
      catagaryService.getStoreCatagery();
    }
  });
