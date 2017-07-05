'use strict'

// fetch API - https://davidwalsh.name/fetch
// fetch API parse to HTML - http://javascript.tutorialhorizon.com/2016/09/01/parse-html-response-with-fetch-api/
// HTML loader - https://stackoverflow.com/questions/37818401/importing-html-files-with-es6-template-string-loader
// Template databinding - https://www.joezimjs.com/javascript/javascript-templating-adding-html-the-right-way/
// Defining new DOM elements with prototyping - https://www.html5rocks.com/en/tutorials/webcomponents/customelements/
// Custom elements with Classes MDN - https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements/Custom_Elements_with_Classes

//
// @module jetloader
// @file   jetloader.js
// @created 05.07.17
// @creator Jonas J. Solsvik
// @brief For loading html <template> elements from separate files, using Fetch API (ajax)
// 
// @methods

//class TemplateElement extends HTMLElement {
//
//    constructor(_templateContent) {
//        super();
//        this.templateContent = JSON.parse(JSON.stringify(_templateContent)); // deepcopy
//    }
//
//    connectedCallback() {
//        this.appendChild(document.importNode(this.templateContent, true));
//    }
//}

export function registerTemplate(name, templateContent) {
    
    if (document.createELement(name) === null) {
        document.registerElement(name, {
            prototype: () => {
                let proto = Object.create(HTMLElement.prototype);
                const content = JSON.parse(JSON.stringify(templateContent));
                proto.appendChild(document.importNode(content, true));
                return proto;
            }(),
        });
    }
}

export function bindTemplate(template, data) {

}


export function registerTemplate(name, url) {

    fetch(url).then({

    });
}

/* DEPRICATED 
export function loadTemplate(url, dataBinder = {}) {

    return fetch(url)
        .then( response => {
            return response.text();
        })
        .then( text => {
            return bindTemplate(text, dataBinder);
        })
}

export function loadText(url) {
    return fetch(url)
        .then( response => {
            return response.text();
        });
}

export function bindTemplate(text, dataBinder = {}) {

    text = bindText(text, dataBinder);

    const wrapper = document.createElement('div');
    wrapper.innerHTML = text;
    return document.importNode(wrapper.querySelector('template'), true);
}

export function bindText(text, dataBinder = {}) {
    if (dataBinder != {}) { 
        for (const property in dataBinder) {
            const regexp = new RegExp('{{\\s*' + property + '\\s*}}', 'ig');
            text = text.replace(regexp, dataBinder[property]);
        }
    }
    return text;
}

*/