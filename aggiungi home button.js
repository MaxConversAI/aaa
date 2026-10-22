// ==UserScript==
// @name         Crea tasto home SILE
// @namespace    http://tampermonkey.net/
// @version      2026-10-21
// @description  try to take over the world!
// @author       You
// @match        https://www.tagliamentosile.it/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tagliamentosile.it
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function creaPulsante() {
        // Evita di creare pulsanti duplicati
        if (document.getElementById('tm-home-button')) return;

        const homeBtn = document.createElement('button');

        homeBtn.id = 'tm-home-button';
        homeBtn.textContent = '⌂ Home';
        homeBtn.type = 'button';
        homeBtn.title = 'Torna alla pagina principale';

        Object.assign(homeBtn.style, {
            position: 'fixed',
            top: '20px',
            left: '20px',
            padding: '12px 24px',
            background: '#0078d4',
            color: '#ffffff',
            border: '2px solid white',
            borderRadius: '30px',
            fontSize: '16px',
            fontWeight: 'bold',
            fontFamily: 'Arial, sans-serif',
            cursor: 'pointer',
            zIndex: '2147483647',
            boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
            opacity: '1',
            visibility: 'visible'
        });

        homeBtn.addEventListener('click', function () {
            window.location.href = 'https://axcuqsgpadls.compat.objectstorage.eu-milan-1.oraclecloud.com/public_bucket/SVT-LANDING-BOARD/index.html';
        });

        document.body.appendChild(homeBtn);

        console.log('[Tampermonkey] Pulsante Home creato');
    }

    if (document.body) {
        creaPulsante();
    } else {
        document.addEventListener('DOMContentLoaded', creaPulsante, { once: true });
    }

    // nascondi link facebook
    document.querySelectorAll(".nav-item-facebook, .socials, .jssocials-shares, .jssocials-share-facebook").forEach(elemento => {
    elemento.style.display = 'none';
    });
    // rimuove il link
    document.querySelectorAll('a[href="https://www.easynetserver.it"]').forEach(link => {
        link.removeAttribute('href');
    });
})();

/////////////////////////////////////////////////////

// ==UserScript==
// @name         Aggiungi tasto home MLOL
// @namespace    http://tampermonkey.net/
// @version      2026-10-21
// @description  try to take over the world!
// @author       You
// @match        https://sbts.medialibrary.it/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=medialibrary.it
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function creaPulsante() {
        // Evita di creare pulsanti duplicati
        if (document.getElementById('tm-home-button')) return;

        const homeBtn = document.createElement('button');

        homeBtn.id = 'tm-home-button';
        homeBtn.textContent = '⌂ Home';
        homeBtn.type = 'button';
        homeBtn.title = 'Torna alla pagina principale';

        Object.assign(homeBtn.style, {
            position: 'fixed',
            top: '20px',
            left: '20px',
            padding: '12px 24px',
            background: '#004d39',
            color: '#ffffff',
            border: '2px solid white',
            borderRadius: '30px',
            fontSize: '16px',
            fontWeight: 'bold',
            fontFamily: 'Arial, sans-serif',
            cursor: 'pointer',
            zIndex: '2147483647',
            boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
            opacity: '1',
            visibility: 'visible'
        });

        homeBtn.addEventListener('click', function () {
            window.location.href = 'https://axcuqsgpadls.compat.objectstorage.eu-milan-1.oraclecloud.com/public_bucket/SVT-LANDING-BOARD/index.html';
        });

        document.body.appendChild(homeBtn);

        console.log('[Tampermonkey] Pulsante Home creato');
    }

    if (document.body) {
        creaPulsante();
    } else {
        document.addEventListener('DOMContentLoaded', creaPulsante, { once: true });
    }
})();

