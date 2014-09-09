'use strict';
(function (_) {
  angular.module('yeomanLetusgoApp')
    .service('catagaryService', function (localStorageService) {
      this.catagarys = localStorageService.get('catagarys');
      this.getCatagarys = function () {
        return localStorageService.get('catagarys');
      };

      this.storeCatagary = function (catagary) {
        this.temporaryCatagary = catagary;
      };

      this.getStoreCatagary = function () {
        return this.temporaryCatagary;
      };

      this.editCatagary = function (catagary) {
        var index = _.findIndex(catagarys, {'id': catagary.id});
        this.catagarys[index] = catagary;
        this.editGoodsList(catagarys);
      };

      this.editCatagarys = function (catagarys) {
        localStorageService.set('catagarys', catagarys);
      }
    });
})(window._);
