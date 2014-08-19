angular.module('example')
    .directive('bceTitle', function($compile, $rootScope, $http, $templateCache){
        return {
            restrict: 'E',
//            scope: {type:'@type'},
//            template:"<span type='{{type}}'>{{type}}</span>",
            link: function ($scope, $elements, $attributes){
//                var myScope = $rootScope.$new();
                var tpl =  $scope.type;// + "-title.html";
                $http.get("views/" + tpl, {cache:$templateCache}).then(function(response){
                    var a = $compile(angular.element(response.data))($scope);
                    $elements.append(a);
                });

                $scope.someVar = "oieaaaaaa"

            }
        };
    })