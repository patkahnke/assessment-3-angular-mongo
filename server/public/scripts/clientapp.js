var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/hero_entry', {
      templateUrl: '/views/heroEntry.html',
      controller: 'HeroEntryController'
    })
    .when('/hero_list', {
      templateUrl: '/views/heroList.html',
      controller: 'HeroListController'
    })
    .otherwise({
      redirectTo: '/hero_entry'
    })
}]);
