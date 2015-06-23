// Code adapted from the tab number extension in the Chrome store, written by
// Glen Murphy.
var update = function(details) {
  var id = details.id;
  var index = details.index;
  var title = details.title;

  if (title) {
    // if tab already has prepended number
    var numberMatch = title.match(/^\d+\.\ /);
    if (numberMatch) {
      // then lose the old prepended number before renumbering
      title = title.substr(numberMatch[0].length);
    }
  }

title = (index + 1) + '. ' + title;

  try {
    chrome.tabs.executeScript(
      id,
      {
        code : "document.title = '" + title + "';"
      }
    );
    console.log("executed: " + id);
  } catch(e) {}
};


function updateAll() {
  chrome.tabs.query({}, function(tabs) {
    for (var i = 0, tab; tab = tabs[i]; i++) {
      update(tab);
    }
  });
}

chrome.tabs.onMoved.addListener(function(id) {
  updateAll();
});

chrome.tabs.onRemoved.addListener(function(id) {
  updateAll();
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  update(tab);
});

updateAll();
