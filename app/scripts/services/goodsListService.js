angular.module('yeomanLetusgoApp')
  .service('goodsListService', function GoodsListService(localStorageService) {
    this.goodsList = localStorageService.get('goodsList');
    this.getGoodslist = function () {
      return localStorageService.get('goodsList');
    };

    this.storeGoods = function (goods) {
      this.temporaryGoods = goods;

    };

    this.getStoreGoods = function () {
      return this.temporaryGoods;
    };

    this.editGoodsList = function(goodsList){
      localStorageService.set('goodsList', goodsList);
    };

    this.editGoods = function (goods) {
      var goodsList = this.goodsList;
      var index = _.findIndex(goodsList, {'id': goods.id});
      this.goodsList[index] = goods;
      localStorageService.set('goodsList', goodsList);
    }
  });
