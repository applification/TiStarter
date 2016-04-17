var closeAnimation;

// HACK: ti-slag cannot handle R.anim so we wrap this in deployType and check for null
if (OS_ANDROID) {
  if (Alloy.CFG.run_unit_tests) {
    closeAnimation = {};
  }
} else {
  closeAnimation = {
    activityEnterAnimation: Ti.App.Android.R.anim.scalein,
    activityExitAnimation: Ti.App.Android.R.anim.slideoutright
  };
}

function confirmToDeleteRide() {  // eslint-disable-line no-unused-vars
  alert('do something');
}

function close() {  // eslint-disable-line no-unused-vars
  if (OS_IOS) {
    $.win.close();
  }

  if (OS_ANDROID) {
    $.win.close(closeAnimation);
  }
}
