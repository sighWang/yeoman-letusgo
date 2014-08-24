'use strict';

/**
 * @ngdoc overview
 * @name yeomanLetusgoApp
 * @description
 * # yeomanLetusgoApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanLetusgoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/',{
         templateUrl: 'views/welcome.html',
         controller: 'IndexCtrl'
      })
      .when('/list', {
         templateUrl: 'views/list.html',
         controller: 'ListCtrl'
      })
      .when('/cart',{
         templateUrl: 'views/cart.html',
         controller: 'CartCtrl'
      })
      .when('/pay',{
         templateUrl: 'views/pay.html',
         controller: 'PayCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/main',{
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
