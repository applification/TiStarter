var test = require('ava');
var slag = require('ti-slag');
var Alloy = require('ti-slag/lib/Alloy');
var assert = require('chai').assert;
var should = require('chai').should();
var path = require('path');
var appRoot = require('app-root-path');

var context;
var alloy;
var controllerName = 'tab1.js'; // controller we are testing!
var mobileTarget = process.env.MOBILETARGET; // passed in through NPM Scripts either iphone or android

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
    CFG: path.join(appRoot.toString(), 'Resources', mobileTarget, 'alloy', 'CFG.js')
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
test('<Window> should have a layout of "composite"', function() {
  context.Controller();
  assert.strictEqual(context.win.layout, 'composite');
});

test('<Window> should have a background color of "white"', function() {
  context.Controller();
  assert.strictEqual(context.win.backgroundColor, '#FFF');
});
