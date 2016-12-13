// ==UserScript==
// @match https://pe.szczecin.pl/chapter_201209.asp
// ==/UserScript==
//jshint esversion: 6
//jshint loopfunc: true

window.onload = function() {
    let a = document.querySelectorAll("ul.aplikacje a.customfont_bold");
    a[0].click();
};
