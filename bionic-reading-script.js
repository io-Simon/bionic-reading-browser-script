// ==UserScript==
// @name         Bionic reading
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    console.log('Tampering');

    let pattern = /\s(\w{3})/g;
    let p = document.querySelectorAll('p');

    p.forEach(paragraph => {
        let paragraphText = paragraph.textContent;
        let modifiedText = paragraphText.replace(pattern, ' <span style="font-weight: 600; color: blue">$1</span>');
        paragraph.innerHTML = modifiedText;
    });

})();
