var closeAnimation = {
  activityEnterAnimation: Ti.App.Android.R.anim.scalein,
  activityExitAnimation: Ti.App.Android.R.anim.slideoutright
};

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
