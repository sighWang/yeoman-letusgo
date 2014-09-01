angular.module('yeomanLetusgoApp')
    .controller('WelcomeCtrl', function ($scope) {
        $scope.$emit('welcomeChange');
    });
