githubUserSearch.factory('Search', ['$http', function($http){

  var queryUrl = 'https://api.github.com/search/users';
  var access_token = 'ce8a868ac51857e97e5d5c4d75207ab4947fd472';

  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm,
          'access_token': access_token
        }
      });
    }
  };
}]);
