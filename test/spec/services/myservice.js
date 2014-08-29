'use strict';

describe('Service: cartService', function () {
  var cartService, store = {} ,localStorageService;

  beforeEach(function () {
    module('yeomanLetusgoApp');
    initData();
    inject(function ($injector){
      localStorageService = $injector.get('localStorageService');
      cartService = $injector.get('cartService');
    });
    spyOn(localStorageService, 'get').andCallFake(function(key) {
      return store[key];
    });

    spyOn(localStorageService, 'set').andCallFake(function (key, value){
        store[key] = value;
    });
  });

  it('should do something', function () {
    expect(initData()).toHaveBeenCalled();
    expect(cartService.getCustomGoodsList().length).toEqual(jasmine.any(Number));
  });
});
