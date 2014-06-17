var app = angular.module('myApp', ['ui.bootstrap', 'ui.router']);

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

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "parts/state1.html"
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "parts/state1.list.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "parts/state2.html"
    })
    .state('state2.list', {
      url: "/list",
        templateUrl: "parts/state2.list.html",
        controller: function($scope) {
          $scope.things = ["A", "Set", "Of", "Things"];
        }
      })
    });