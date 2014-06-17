var app = angular.module('myApp', ['ui.bootstrap']);

//app.config(function($routeProvider) {
//    $routeProvider
//        .when('/',
//        {
//            templateUrl: "app.html",
//            controller: "AppCtrl"
//        })
//        .when('/pizza',
//        {
//            template:"Yumm!!"
//        })
//        .otherwise({
//            template:"THis doesnt exist"
//        })
//});

app.controller("ButtonsCtrl", function ($scope) {
    $scope.singleModel = 1;

    $scope.radioModel = 'Middle';

    $scope.checkModel = {
    left: false,
    middle: true,
    right: false
  };
});

app.controller("kautKas", function ($scope) {
    

});

app.controller("writeBgColor", function ($scope) {
    $scope.writeBg = function () {
        console.log($scope.writecolor);
        return $scope.writecolor;
    }

});

