var openAnimation;

// HACK: ti-slag cannot handle R.anim so we wrap this in deployType and check for null
if (OS_ANDROID) {
  if (Alloy.CFG.run_unit_tests) {
    openAnimation = {};
  }
} else {
  openAnimation = {
    activityEnterAnimation: Ti.App.Android.R.anim.slideinright,
    activityExitAnimation: Ti.App.Android.R.anim.scaleout
  };
}

function openChild(win) {
  if (OS_IOS) {
    $.tab.open(win);
  }

  if (OS_ANDROID) {
    $.tab.open(win, openAnimation);
  }
}

function openDetails(e) { // eslint-disable-line no-unused-vars
  // We use a helper that we also pass on so that additional windows can be
  // opened under this tab without them needing to know of the context
  openChild(Alloy.createController('detail', {
    args: 'some new args'
  }).getView());
}
