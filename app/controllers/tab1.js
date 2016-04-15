
function openChild(win) {
  $.tab.open(win);
}

function openDetails(e) {

  // We use a helper that we also pass on so that additional windows can be
  // opened under this tab without them needing to know of the context
  openChild(Alloy.createController('detail', {
    args: 'some new args'
  }).getView());
}
