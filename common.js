'use strict';

chrome.storage.local.set({
  "status": "running"
});

var conf = {
  "title": {
    "format": "MMMM DD Y (ddd) HH:mm:ss"
  }
};
