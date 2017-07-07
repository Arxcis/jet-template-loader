'use strict';

import { loadBlog } from './on-load-blog.js';

window.addEventListener('load', () => {
    loadBlog();
});