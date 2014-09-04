'use strict';

angular.module('yeomanLetusgoApp')
  .controller('CatagaryManageCtrl', function ($scope, catagaryService) {
    $scope.catagarys = catagaryService.getCatagarys();
  });
