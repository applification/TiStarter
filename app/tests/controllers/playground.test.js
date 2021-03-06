var test = require('ava');
var slag = require('ti-slag');
var Alloy = require('ti-slag/lib/Alloy');
var assert = require('chai').assert;
var should = require('chai').should();
var path = require('path');
var appRoot = require('app-root-path');

var context;
var alloy;
var controllerName = 'playground.js'; // controller we are testing!
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

  test('Should have a tab icon "/images/costume.png"', function() {
    context.Controller();
    assert.strictEqual(context.tab.icon, '/images/costume.png')
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

test('<Window> should have a title of "Playground"', function() {
  context.Controller();
  // console.log('Lang: ' + L('playground'));
  assert.strictEqual(context.win.title, 'Playground');
});

test('<Window> should have <ListView> as first child element with id "listview"', function() {
  context.Controller();
  assert.strictEqual(context.win.children[0].getApiName(), 'Ti.UI.ListView');
  assert.strictEqual(context.win.children[0].id, 'listview');
});

// test('Should have a button with title "Open Details"', function() {
//   context.Controller();
//   assert.strictEqual(context.btnOpenDetails.title, "Open Details");
// });
//
// test('<Window> first child element should be a <View> with id "wrapper"', function() {
//   context.Controller();
//   context.win.children[0].id.should.equal('wrapper');
// });
//
// test('Should have a tab title of "Tab 1"', function() {
//   context.Controller();
//   assert.strictEqual(context.tab.title, "Tab 1");
// });
