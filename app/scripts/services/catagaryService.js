'use strict'

angular.module('yeomanLetusgoApp')
  .service('catagaryService', function (localStorageService) {
    this.getCatagarys = function () {
      return localStorageService.get('catagarys');
    };
  });
