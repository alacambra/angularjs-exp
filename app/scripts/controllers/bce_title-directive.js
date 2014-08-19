angular.module('transcludeExample', [])
    .directive('bce', function(){
        return {
            restrict: 'E',
            transclude: true,
            scope: { title:'@' },
            template: "",
            link: function (scope){
                scope.type = "task";
            }
        };
    })