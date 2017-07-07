'use strict';

import { loadTemplateDoc, loadTemplate, unpackTemplate } from './jet-template-unpacker.js';

const blogTemplate = loadTemplateDoc('./view/blog.html');
const postTemplate = loadTemplate('post-template', blogTemplate);

export function loadBlog() {

    const blogView = unpackTemplate(blogTemplate, {
        blogName : 'Jonas blog',
        email : 'jonas.solsvik@gmail.com',
        phone: '45200864',
    });


    postCollection.forEach((post, index) => {

        let postFragment = unpackTemplate(postTemplate, postCollection[index]);
        blogView.querySelector('main').appendChild(postFragment);
    });

    document.body.innerHTML = '';
    document.body.appendChild(blogView);

}

const postCollection =  [
    { 
        'heading': 'My third post',
        'ingress': 'It all started the day when I was 10 minutes late for work for the 10th time....',
        'bodytext': 'It was a sunny day and everyone was wishing they had a work that involved some outside work, but I am a software engineer and that involves nothing but indoor staring at a artificially illuminated screen for 8 hours a day...',
        'visitorCount': (10 * 4.3),
    },
    { 
        'heading': 'My second post',
        'ingress': 'It all started the day when I was 10 minutes late for work for the 10th time....',
        'bodytext': 'It was a sunny day and everyone was wishing they had a work that involved some outside work, but I am a software engineer and that involves nothing but indoor staring at a artificially illuminated screen for 8 hours a day...',
        'visitorCount': (10 * 8.3),
    },
    { 
        'heading': 'My first post',
        'ingress': 'It all started the day when I was 10 minutes late for work for the 10th time....',
        'bodytext': 'It was a sunny day and everyone was wishing they had a work that involved some outside work, but I am a software engineer and that involves nothing but indoor staring at a artificially illuminated screen for 8 hours a day...',
        'visitorCount': (10 * 12.3),
    },
];