// ==UserScript==
// @name         best fit for reading - Casa Civil
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Melhorar a leitura das leis no site da casa civil
// @author       You
// @match        http://www.planalto.gov.br/ccivil_03/*
// @icon         https://www.google.com/s2/favicons?domain=gov.br
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelector('body').setAttribute("style", "max-width: 800px;margin-left: auto;margin-right: auto;");

})();