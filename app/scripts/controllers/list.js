/**
 * Created by sigh on 14-8-21.
 */
'use strict';

/**
 * @ngdoc function
 * @name yeomanLetusgoApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the yeomanLetusgoApp
 */
angular.module('yeomanLetusgoApp')
    .controller('ListCtrl', function ($scope) {
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
