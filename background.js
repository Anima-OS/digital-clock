'use strict';

function drawClock(items) {
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  let d = new Date();
  let ss = d.getSeconds().toString().padStart(2, "0");
  let mm = d.getMinutes().toString().padStart(2, "0");
  let hh = d.getHours().toString().padStart(2, "0");
  
  if (!(typeof items["conf"] === "undefined")) {
    try {
      conf = JSON.parse(items["conf"]);
    } catch (e) {}
  }

  browser.browserAction.setTitle({
    title: moment().format(conf["title"]["format"])
  });

  ctx.save();
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Background
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  ctx.font = "bold 12px Consolas";
  
  if (conf["reverse"]["checked"] == true) {
    ctx.fillText(mm, 0, 18);
    browser.browserAction.setBadgeText({ text: hh + ":"});
  }
  else {
    ctx.fillText(hh, 0, 18);
    browser.browserAction.setBadgeText({ text: ":" + mm });
  }

  ctx.restore();

  browser.browserAction.setBadgeBackgroundColor({color: "black"});

  chrome.browserAction.setIcon({
    imageData: ctx.getImageData(0, 0, canvas.width, canvas.height)
  });
}

function getClock() {
  chrome.storage.local.get(null, drawClock);
}

getClock();
setInterval(function() {
  getClock()
}, 1000);
