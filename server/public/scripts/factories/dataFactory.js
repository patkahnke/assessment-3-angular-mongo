myApp.factory('DataFactory', ['$http', function($http) {
  console.log('dataFactory running');

  var superPowers = undefined;

  function getSuperPowers() {
    var promise = $http.get('/superPowerRoute').then(function(response) {
      superPowers = response.data;
    });

    return promise;
  }

  // PUBLIC
  var publicApi = {
    factorySaveFavorite: function(newFavorite) {
      return saveFavorite(newFavorite);
    },
    factoryRefreshFavoriteData: function() {
      return getFavoriteData();
    },
    factoryGetFavorites: function() {
      // return our array
      return favorites;
    }
  };

  return publicApi;

}]);
