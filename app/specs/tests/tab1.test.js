var should = require('tests/should');
  var Alloy = require('alloy');
  var $;

beforeEach(function() {
  $ = Alloy.createController('tab1').getView();
})

describe('Tab 1', function() {
  it('should have a tab icon', function() {
    // console.log('$: '+JSON.stringify($));
    should.exist($.icon);
  });

  it('should have a tab title of "Tab 1"', function() {
    $.title.should.match('Tab 1');
  });
});

describe('Tab 1 <Window>', function(){
  it('should have a layout of "composite"', function() {
    $.window.id.should.match('win');
  });

  it('should have a barColor matching config.json global.colors.brand', function() {
    $.window.barColor.match(Alloy.CFG.colors.brand);
  });

  it('should have a backgroundColor of "white"', function() {
    $.window.backgroundColor.match('#FFF');
  });

  it('should have <View> as first child element with id "wrapper"', function() {
    $.window.children[0].id.should.equal('wrapper');
  });
});
