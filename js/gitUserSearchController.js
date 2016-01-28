githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {
  var self = this;
  var searchTerm;
  var searchResult;

  self.doSearch = function(){
    Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResult = response.data;
    });
  };

  self.setSearch = function(){
    self.lastSearch = self.searchTerm;
  };
}]);
