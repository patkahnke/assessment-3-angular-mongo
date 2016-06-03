myApp.controller('HeroEntryController', ['$scope', '$http', function ($scope, $http) {
  $scope.superPowers = {};
  $scope.currentHero = {};

  getSuperPowers();

  $scope.submitHero = function () {
    var data = $scope.currentHero;
    $http.post('/heroRoute', data).then(function () {
        console.log('POST /heroes');
        getHeroes();
      });
  };

  function getSuperPowers() {
    $http.get('/superPowerRoute').then(function (response) {
      $scope.superPowers = response.data;
    });
  }

  function getHeroes () {
      $http.get('/heroRoute').then(function (response) {
        $scope.heroes = response.data;
      });
  }

}]);
