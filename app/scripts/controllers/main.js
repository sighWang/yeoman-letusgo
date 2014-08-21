'use strict';

/**
 * @ngdoc function
 * @name yeomanLetusgoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanLetusgoApp
 */
angular.module('yeomanLetusgoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
      'Item1',
      'Item2',
      'Item3'
    ];
    $scope.addTodo = function () {
        $scope.todos.push($scope.todo);
        $scope.todo = '';
    }
    $scope.removeTodo = function (index) {
        $scope.todos.splice(index, 1);
    }
  });
