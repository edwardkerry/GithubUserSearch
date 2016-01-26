githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {
  var self = this;

  var searchResource = $resource('https://api.github.com/search/users');

  self.doSearch = function(){
    self.searchResult = searchResource.get(
      { q: self.searchTerm,
        access_token: "ce8a868ac51857e97e5d5c4d75207ab4947fd472"
      }
    );
  };
}]);
