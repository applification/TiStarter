var should = require('specs/should');
  var Alloy = require('alloy');
  var $;

beforeEach(function() {
  $ = Alloy.createController('playground').getView();
})

describe('Playground', function() {
  it('should have a tab icon', function() {
    // console.log('$: '+JSON.stringify($));
    should.exist($.icon);
  });

  it('should have a tab title of "Playgrounde"', function() {
    $.title.should.match('Playground');
  });
});

describe('Playground <Window>', function(){
  it('should have a layout of "composite"', function() {
    $.window.id.should.match('win');
  });

  it('should have a barColor matching config.json global.colors.brand', function() {
    $.window.barColor.match(Alloy.CFG.colors.brand);
  });

  it('should have a backgroundColor of "white"', function() {
    $.window.backgroundColor.match('#FFF');
  });

  it('should have <ListView> as first child element with id "listview"', function() {
    var tiAPI = $.window.children[0].getApiName();
    var id = $.window.children[0].id;
    tiAPI.should.equal('Ti.UI.ListView');
    id.should.equal('listview');
  });

});
