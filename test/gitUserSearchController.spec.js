describe('GitUserSearchController', function(){
  beforeEach(module('GitUserSearch'));

  var ctrl;

  describe('when searching for a user', function(){

    var fakeSearch, scope;

    beforeEach(function(){
      fakeSearch = jasmine.createSpyObj('fakeSearch', ['query']);

      module({
        Search:   fakeSearch
      });
    });

    var gitHubSearchResponse = {
      "items" : [
        {
          "login": "tansaku",
          "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
          "html_url": "https://github.com/tansaku"
        },
      ]
    };

    var mockUserData = JSON.parse(JSON.stringify(gitHubSearchResponse));

    beforeEach(inject(function($controller, $rootScope, $q){
      scope = $rootScope;
      fakeSearch.query.and.returnValue($q.when( { data: gitHubSearchResponse}));
      ctrl = $controller('GitUserSearchController');
    }));

    it('initialises with an empty search result and term', function() {
        expect(ctrl.searchResult).toBeUndefined();
        expect(ctrl.searchTerm).toBeUndefined();
    });

    it('displays search results', function() {
      ctrl.searchTerm = "tansaku";
      ctrl.doSearch();
      scope.$apply();
      expect(ctrl.searchResult).toEqual(gitHubSearchResponse.items);
    });
  });

});
