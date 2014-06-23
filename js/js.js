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
    middle: false,
    right: false
  };
});

app.controller("sectionCtrl", function ($scope) {
    $scope.sections = {    
        secs:[
            {sec : 'home',
             class: 'home',
             url: 'state1'},
            {sec : 'sections',
             class: 'projects',
             url: 'state2'},
            {sec : 'hvz',
             class: 'services',
             url: 'state3'},
            {sec : 'background color',
             class: 'bgcolor',
             url: 'state4'},
        ]
    }
});

// ng-style="{'background-color': '#'+writeBg() }"
app.directive('changeBgDir', function() {
    return {
      restrict: 'A',
      controller: function ($scope) {
            $scope.writecolor = {
                color: "#eeddff"
            }
        },
      link: function(scope, elem, attrs) {
          scope.$watch('writecolor.color', function() {
            var x = scope.writecolor.color;
            elem.css('background-color', x); 
          });   
        }
    }
  });

    



app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
 
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  
  // $locationProvider.html5Mode(true).hashPrefix('!');
  
  $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "parts/state1.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items", "!"];
      }
    })
    .state('state1.list', {
      url: "list",
      templateUrl: "parts/state1.list.html",

    })
    .state('state2', {
      url: "/state2",
      templateUrl: "parts/state2.html",
      controller: function($scope) {
 

           
         
      }
    })
    .state('state3', {
      url: "/state3",
      templateUrl: "parts/state3.html"
    })
    .state('state4', {
      url: "/state4",
      templateUrl: "parts/state4.html",
   
    })   
    
       
       
});