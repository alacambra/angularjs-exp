(function (angular) {

    'use strict';

    angular.module("angularjsExpApp")
        .directive("my", function () {


                var loadBceTpl = function(itemType){
                    var tpl = "modules/channel/templates/channelitems/" + itemType + "-template.tpl.html";
                    return $http.get(tpl, {cache: $templateCache});
                };

                return {
                    restrict: "E",
                    template:"<p ng-click='{{myClick()}}'>hallo</p>",
                    controller:function($scope){
                        $scope.myClick = function () {
                            console.log("iNNER CTRL")
                        }
                    },
                    link:function($scope){
                        console.log("link loaded");
                        $scope.myClick = function () {
//                            $scope.$parent.myClick();
                            console.log("LINKER");
                        }
                    }
                };
            });

}(angular));