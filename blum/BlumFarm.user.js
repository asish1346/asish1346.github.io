// ==UserScript==
// @name         BlumFarm
// @version      1.3
// @namespace    Thilubhaii
// @author       Thilubhaii
// @match        https://telegram.blum.codes/*
// @grant        none
// @icon         https://raw.githubusercontent.com/asish1346/asish1346.github.io/refs/heads/main/blum/logo.webp
// @updateURL    https://asish1346.github.io/blum/BlumFarm.user.js
// @downloadURL  https://asish1346.github.io/blum/BlumFarm.user.js
// ==/UserScript==

(function() {
    'use strict';

    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '50%';
    container.style.transform = 'translateX(-50%)';
    container.style.zIndex = '9999';
    container.style.backgroundColor = 'black';
    container.style.padding = '20px';
    container.style.borderRadius = '10px';
    container.style.color = 'white';
    container.style.textAlign = 'center';
    document.body.appendChild(container);

    const message = document.createElement('p');
    message.textContent = 'You are using a pirated version, click on ↓';
    container.appendChild(message);

    const toggleButton = document.createElement('button');
    toggleButton.textContent = '↓';
    toggleButton.style.padding = '5px 10px';
    toggleButton.style.backgroundColor = '#5d2a8f';
    toggleButton.style.color = 'white';
    toggleButton.style.border = 'none';
    toggleButton.style.borderRadius = '5px';
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.marginTop = '10px';
    container.appendChild(toggleButton);

    const purchaseBlock = document.createElement('div');
    purchaseBlock.style.display = 'none';
    purchaseBlock.style.marginTop = '10px';
    purchaseBlock.style.color = 'white';
    purchaseBlock.innerHTML = 'Go <a href="https://t.me/Thilubhaii" style="color: #00bfff;">@Thilubhaii</a> to purchase the script, also a new update is waiting for you after payment';
    container.appendChild(purchaseBlock);

    toggleButton.onclick = function() {
        purchaseBlock.style.display = purchaseBlock.style.display === 'none' ? 'block' : 'none';
    };
})();
