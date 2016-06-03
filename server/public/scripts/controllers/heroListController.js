myApp.controller('HeroListController', ['$scope', '$http', function ($scope, $http) {
  console.log('HeroList controller running');
  $scope.heroes = {};
  $scope.superPowers = {};

getHeroes();
getSuperPowers();

function getHeroes () {
    $http.get('/heroRoute').then(function (response) {
      console.log(response);
      $scope.heroes = response.data;
    });
}

  function getSuperPowers() {
    $http.get('/superPowerRoute').then(function (response) {
      console.log(response.data, 'superpowers');
      $scope.superPowers = response.data;
    });
  }

  $scope.deleteHero = function (id) {
      $http.delete('/heroRoute/' + id)
        .then(function (response) {
          console.log('DELETE /hero ', id);
          getHeroes();
        });
    };

}]);
