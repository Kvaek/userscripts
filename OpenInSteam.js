// ==UserScript==
// @name    Open in Steam
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description Adds a button to Steam that opens the page in the Steam application.
// @author       Kvaek
// @include  /https:\/\/.*steam.*\.com\/.*/
// @include         http*://steamcommunity.com/*
// @include         http*://store.steampowered.com/*
// @icon         https://www.google.com/s2/favicons?domain=steampowered.com
// @grant        none
// ==/UserScript==

window.addEventListener('load', function() {
    createButton(window.location.href);
}, false);

function createButton(page) {
    var steamButton = document.createElement("a");
    var buttonText = document.createTextNode("Open");
    steamButton.setAttribute("href", "steam://openurl/" + document.location.href);
    steamButton.setAttribute("class", "menuitem");
    steamButton.appendChild(buttonText);

    var superNav = document.getElementsByClassName("supernav_container")[0];
    superNav.appendChild(steamButton);
}