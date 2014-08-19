'use strict';

/**
 * @ngdoc function
 * @name angularjsExpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsExpApp
 */
angular.module('angularjsExpApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
