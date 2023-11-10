'use strict';

// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}
    
function select(selector, parent = document) {
    return parent.querySelector(selector);
}

// selection
const opSystem = select('.op-system');
const language = select('.language');
const browser = select('.browser');