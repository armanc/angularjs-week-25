var app = angular.module('myApp', ['ui.bootstrap', 'ui.router']);

app.controller("ButtonsCtrl", function ($scope) {
    $scope.btntxt = "Do it!";
    $scope.menuVisible = 1;
    
    $scope.yeah = function() {
        if ($scope.menuVisible === 0) {
         
             $('nav').show();
             $scope.btntxt = "Do it!";
        } else {
      
            $('nav').hide();
            $scope.btntxt = "Give it back!";
        }
    }
    

    $scope.checkModel = {
    left: false,
    middle: false,
    right: false
  };
});

app.controller("sectionCtrl", function ($scope, $location) {
    $scope.sections = {    
        secs:[
            {sec : 'view pictures',
             class: 'list',
             url: 'state1'},
            {sec : 'section names',
             class: 'projects',
             url: 'state2'},
            {sec : 'hide navbar',
             class: 'services',
             url: 'state3'},
            {sec : 'change bg color',
             class: 'bgcolor',
             url: 'state4'},
            {sec : 'dark room',
             class: 'room',
             url: 'state5'},
        ]
    }
    $scope.isActive = function(section) {
        return "/" + section.url === $location.path();
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
        $scope.items = ["100","200", "300", "400", "500", "600", "700", "800"];
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
    .state('state5', {
      url: "/state5",
      templateUrl: "parts/state5.html",
   
    })  
    
       
       
});