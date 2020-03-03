'use strict';

function saveOptions(items) {
  if (!(typeof items["conf"] === "undefined")) {
    try {
      conf = JSON.parse(items["conf"]);
    } catch (e) {}
  }

  if (conf["reverse"]["checked"] == true) {
    $("#reverse").prop("checked", true)
  }

  $("#reverse").val(conf["reverse"]["checked"]);
  $("#reverse").on("change", function(e){
    if ($("#reverse").prop("checked") == true) {
    conf["reverse"]["checked"] = true;
    }
    else {
      conf["reverse"]["checked"] = false;
    }
    chrome.storage.local.set({
      "conf": JSON.stringify(conf)
    });
  });
}

chrome.storage.local.get(null, saveOptions);
