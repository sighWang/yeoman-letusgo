'use strict';
describe('Controller: catagaryManagageCtrl', function () {
  var $scope, createController, catagaryService, $controller;

  beforeEach(function () {
    module('yeomanLetusgoApp');

    inject(function ($injector) {
      $scope = $injector.get('$rootScope').$new();
      $controller = $injector.get('$controller');
      catagaryService = $injector.get('catagaryService');

      createController = function () {
        return $controller('catagaryService', {
          $scope: $scope
        });
      };
    });
  });

  describe('catagaryManageCtrl add remove edit get', function () {
    it('')
  });

});
