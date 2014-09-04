'use strict';

angular
  .module('yeomanLetusgoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeCtrl'
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl'
      })
      .when('/pay', {
        templateUrl: 'views/pay.html',
        controller: 'PayCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/listManage', {
        templateUrl: 'views/listManage.html',
        controller: 'ListmanageCtrl'
      })
      .when('/editGoods', {
        templateUrl: 'views/listManage/editGoods.html',
        controller: 'EditGoodsCtrl'
      })
      .when('/addGoods', {
        templateUrl: 'views/listManage/addGoods.html',
        controller: 'AddGoodsCtrl'
      })
      .when('/catagaryManage', {
        templateUrl: 'views/catagaryManage.html',
        controller: 'CatagaryManageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
