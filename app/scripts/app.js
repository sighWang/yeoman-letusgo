'use strict';

angular
  .module('yeomanLetusgoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
    .config(['localStorageServiceProvider', function(localStorageServiceProvider){
        localStorageServiceProvider.setPrefix('ls');
    }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/',{
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
      .otherwise({
        redirectTo: '/'
      });
  });
