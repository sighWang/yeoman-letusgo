'use strict';

/**
 * @ngdoc function
 * @name yeomanLetusgoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanLetusgoApp
 */
angular.module('yeomanLetusgoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
        var todosInstore = localStorageService.get('todos');
        $scope.todos = todosInstore && todosInstore.split('\n');
        $scope.$watch('todos', function () {
           localStorageService.add('todos', $scope.todos.join('\n'));
        }, true);

        $scope.addTodo = function () {
        $scope.todos.push($scope.todo);
        $scope.todo = '';
    }
    $scope.removeTodo = function (index) {
        $scope.todos.splice(index, 1);
    }
  });
