'use strict';

function saveOptions(items) {
  if (!(typeof items["conf"] === "undefined")) {
    try {
      conf = JSON.parse(items["conf"]);
    } catch (e) {}
  }

  $("#reverse").val(conf["reverse"]["checked"]);
  $("#reverse").on("change", function(e){
    if ($("#reverse").prop("checked") == true) {
    conf["reverse"]["checked"] = true;
    console.log("true");
    }
    else {
      conf["reverse"]["checked"] = false;
      console.log("false");
    }
    chrome.storage.local.set({
      "conf": JSON.stringify(conf)
    });
  });
}

chrome.storage.local.get(null, saveOptions);