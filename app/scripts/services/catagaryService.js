'use strict'

angular.module('yeomanLetusgoApp')
  .service('catagaryService', function (localStorageService) {
    this.getCatagarys = function () {
      return localStorageService.get('catagarys');
    };

    this.storeCatagary = function (catagary) {
      this.temporaryCatagary = catagary;
    };

    this.getStoreCatagary = function () {
      return this.temporaryCatagary;
    };
  });
