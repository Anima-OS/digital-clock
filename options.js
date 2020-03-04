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

  if (conf["military"]["checked"] == true) {
    $("#military").prop("checked", true)
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

  $("#military").val(conf["military"]["checked"]);
  $("#military").on("change", function(e){
    if ($("#military").prop("checked") == true) {
    conf["military"]["checked"] = true;
    }
    else {
      conf["military"]["checked"] = false;
    }
    chrome.storage.local.set({
      "conf": JSON.stringify(conf)
    });
  });
}

chrome.storage.local.get(null, saveOptions);
