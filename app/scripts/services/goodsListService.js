angular.module('yeomanLetusgoApp')
  .service('goodsListService', function GoodsListService(localStorageService) {
    this.goodsList = localStorageService.get('goodsList');
    this.editGoodsList = function (goodsList) {
      localStorageService.set('goodsList', goodsList);
    };
    this.getGoodslist = function () {
      return localStorageService.get('goodsList');
    };
    this.storeGoods = function(goods) {
      this.temporaryGoods = goods;

    };
    this.getStoreGoods = function() {
      return this.temporaryGoods;
    }
  });
