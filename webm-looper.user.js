// ==UserScript==
// @name        Webm Looper
// @namespace   com.whatisthisimnotgoodwithcomputers.webmlooper
// @author      WhatIsThisImNotGoodWithComputers
// @description A userscript which automatically enables looping on Webm videos in your browser.
// @include       *.webm
// @run-at      document-start
// @version     1.0
// @grant       none
// ==/UserScript==

var vids = document.getElementsByTagName("video");
for (i = 0; i < vids.length; i++) vids[i].setAttribute("loop", "true");
void 0;
