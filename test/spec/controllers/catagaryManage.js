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
        return $controller('CatagaryManageCtrl', {
          $scope: $scope
        });
      };
    });
  });

  describe('catagaryManageCtrl add remove edit get', function () {
    it('should can get all catagary', function () {
      createController();
      expect($scope.catagarys.length).toEqual(jasmine.any(Number));
      expect($scope.catagarys.length).toBeGreaterThan(0);
    });

    it('edit catagary', function () {
      createController();
      spyOn(catagaryService, 'storeCatagary');
      $scope.showEdit({id:'3', name:'haha'});
      expect(catagaryService.storeCatagary).toHaveBeenCalledWith({id:'3', name:'haha'});
    });

    it('remove Item', function () {
      createController();
      $scope.removeItem({id:'3', name:'haha'});
    });
  });

});
