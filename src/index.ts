import './scss/main.scss';

import './core/registerHelpers';
import registerComponent from './core/registerComponents';
import { getCurrentPage } from './core/routing';
import Block from './core/Block';

/* eslint-disable global-require */
const components = require('./components/**/index.ts') as {[key: string]: { default: typeof Block }};

Object.values(components).forEach((component) => {
    registerComponent(component.default);
});

const setDocumentTitle = (title: string): void => {
    if (title) {
        document.title = `Чат - ${title}`;
    }
};

const setBodyClassName = (cls: string): void => {
    if (cls) {
        document.body.className = `page-${cls}`;
    }
};

const currentPage = getCurrentPage();
const { title, id, Page } = currentPage;
const page = new Page();

setDocumentTitle(title);
setBodyClassName(id);

const app = document.getElementById('app');
app.innerHTML = '';
app.appendChild(page.getContent());
