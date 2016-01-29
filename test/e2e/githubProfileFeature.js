describe('Github Profile finder', function(){

  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));

  beforeEach(function(){
    browser.get('http://localhost:3000');
  });

  it('has a title', function(){
    expect(browser.getTitle()).toEqual('Github user search');
  });

  it('finds profiles', function() {
    searchBox.sendKeys('spike01');
    searchButton.click();
    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.get(0).getText()).toBe('spike01');
  });

  it('clicking search displays the last search', function(){
    searchBox.sendKeys('Hello!');
    searchButton.click();
    expect($('#last-search').isDisplayed()).toBe(true);
  });

  it('doesn\'t display the last search if no search made', function(){
    searchBox.sendKeys('');
    searchButton.click();
    expect($('#last-search').isDisplayed()).toBe(false);
  });

  it('auto updates as users type', function(){
    searchBox.sendKeys('ed');
    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.get(0).getText()).toContain('ed');
  });

});
