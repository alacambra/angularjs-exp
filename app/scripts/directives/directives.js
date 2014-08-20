(function (angular) {

    'use strict';
    angular.module('example')
        .directive('item', function($compile, $parse){
            return {
                restrict: 'E',
                templateUrl: "views/bce.html",
                link: function ($scope, $elements, $attributes){
                    $scope.type = "my_parent_type";
                }
            };
        }
    )
})(angular);