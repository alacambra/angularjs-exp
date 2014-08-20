(function (angular) {

    'use strict';
    angular.module('example')
        .directive('bce', function($compile, $parse){
            return {
                restrict: 'E',
                link: function ($scope, $elements, $attributes){
                    $scope.type = "task11";
//                    var c = $compile($parse($elements))($scope);
//                    $elements.html("");
//                    $elements.append(c);
                }
            };
        }
    )
})(angular);