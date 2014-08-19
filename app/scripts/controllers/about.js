'use strict';

/**
 * @ngdoc function
 * @name angularjsExpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularjsExpApp
 */
angular.module('angularjsExpApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
