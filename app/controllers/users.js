var openAnimation;

// HACK: ti-slag cannot handle R.anim so we wrap this in deployType and check for null
if (OS_ANDROID) {
  if (Alloy.CFG.run_unit_tests) {
    openAnimation = {};
  } else {
    openAnimation = {
      activityEnterAnimation: Ti.App.Android.R.anim.slideinright,
      activityExitAnimation: Ti.App.Android.R.anim.scaleout
    };
  }
}

// onOpen of Window get API data by calling refresh
function init() { // eslint-disable-line no-unused-vars
  $.ptr.refresh();
}

// onRefresh make API call using Alloy Model via Backbone fetch
function myRefresher(e) { // eslint-disable-line no-unused-vars
  Alloy.Collections.randomuserme.fetch({
    success: e.hide,
    error: e.hide
  });
}

function openChild(win) {
  if (OS_IOS) {
    $.tab.open(win);
  }

  if (OS_ANDROID) {
    $.tab.open(win, openAnimation);
  }
}

// get Id of row clicked, open a new window passing in Id
function rowClicked(e) { // eslint-disable-line no-unused-vars
  var id = e.section.getItemAt(e.itemIndex).id.text;

  openChild(Alloy.createController('person', {
    modelId: id
  }).getView());
}

// Clean up when window closes to avoid memory issues
function cleanup() { // eslint-disable-line no-unused-vars
  $.destroy();
}
