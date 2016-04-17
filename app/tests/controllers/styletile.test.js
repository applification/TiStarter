var test = require('ava');
var slag = require('ti-slag');
var Alloy = require('ti-slag/lib/Alloy');
var assert = require('chai').assert;
var should = require('chai').should();
var path = require('path');
var appRoot = require('app-root-path');

var context;
var alloy;
var controllerName = 'styletile.js'; // controller we are testing!
var mobileTarget = process.env.MOBILETARGET; // passed in through NPM Scripts either iphone or android
var CFG = require(path.join(appRoot.toString(), 'app', 'config.json'));

/* ti-slag set up for iPhone */
if (mobileTarget === 'iphone') {
  alloy = Alloy.load({
    titanium: '4.0.0.GA',
    platform: 'ios',
    alloy: path.join(appRoot.toString(), 'Resources', mobileTarget, 'alloy.js'),
    BaseController: path.join(appRoot.toString(), 'Resources', mobileTarget, 'alloy', 'controllers', 'BaseController.js'),
    underscore: path.join(appRoot.toString(), 'Resources', mobileTarget, 'alloy', 'underscore.js'),
    backbone: path.join(appRoot.toString(), 'Resources', mobileTarget, 'alloy', 'backbone.js'),
    constants: path.join(appRoot.toString(), 'Resources', mobileTarget, 'alloy', 'constants.js'),
    CFG: path.join(appRoot.toString(), 'Resources', 'alloy', 'CFG.js')
  });

  context = slag(path.join(appRoot.toString(), 'Resources', mobileTarget, 'alloy', 'controllers', controllerName), {
    titanium: '4.0.0.GA',
    platform: 'ios',
    module: {
      alloy: alloy.core,
      'alloy/controllers/BaseController': alloy.BaseController
    }
  });
}

/* ti-slag set up for android */
if (mobileTarget === 'android') {
  alloy = Alloy.load({
    titanium: '4.0.0.GA',
    platform: 'android',
    alloy: path.join(appRoot.toString(), 'Resources', mobileTarget, 'alloy.js'),
    BaseController: path.join(appRoot.toString(), 'Resources', mobileTarget, 'alloy', 'controllers', 'BaseController.js'),
    underscore: path.join(appRoot.toString(), 'Resources', mobileTarget, 'alloy', 'underscore.js'),
    backbone: path.join(appRoot.toString(), 'Resources', mobileTarget, 'alloy', 'backbone.js'),
    constants: path.join(appRoot.toString(), 'Resources', mobileTarget, 'alloy', 'constants.js'),
    CFG: path.join(appRoot.toString(), 'Resources', 'alloy', 'CFG.js')
  });

  context = slag(path.join(appRoot.toString(), 'Resources', mobileTarget, 'alloy', 'controllers', controllerName), {
    titanium: '4.0.0.GA',
    platform: 'android',
    module: {
      alloy: alloy.core,
      'alloy/controllers/BaseController': alloy.BaseController
    }
  });
}

/* TESTS */

// iOS ONLY TEST
if (mobileTarget === 'iphone') {
  test('<Window> should have a barColor matching config.json global.colors.brand (' +CFG.global.colors.brand +')', function() {
    context.Controller();
    assert.strictEqual(context.win.barColor, CFG.global.colors.brand);
  });

  test('Should have a tab icon "/images/palette.png"', function() {
    context.Controller();
    assert.strictEqual(context.tab.icon, '/images/palette.png')
  });
}

test('<Window> should have a layout of "composite"', function() {
  context.Controller();
  assert.strictEqual(context.win.layout, 'composite');
});

test('<Window> should have a background color of "white"', function() {
  context.Controller();
  assert.strictEqual(context.win.backgroundColor, '#FFF');
});

test('<Window> should have a title of "Style Tile"', function() {
  context.Controller();
  assert.strictEqual(context.win.title, 'Style Tile');
});

test('<Window> should have a wrapper <View> with a layout of "vertical"', function() {
  context.Controller();
  assert.strictEqual(context.wrapper.layout, 'vertical');
});

test('Should have a button with title "Open Activity Indicator"', function() {
  context.Controller();
  assert.strictEqual(context.btnStyle.title, "Open Activity Indicator");
});

test('<Window> first child element should be a <View> with id "wrapper"', function() {
  context.Controller();
  context.win.children[0].id.should.equal('wrapper');
});

test('Should have a tab title of "Style Tile"', function() {
  context.Controller();
  assert.strictEqual(context.tab.title, "Style Tile");
});
