import './scss/main.scss';

import Handlebars from 'handlebars';
import registerPartial from './templates/partials';
registerPartial();

Handlebars.registerHelper({
    eq: (v1, v2) => v1 === v2,
    ne: (v1, v2) => v1 !== v2,
    lt: (v1, v2) => v1 < v2,
    gt: (v1, v2) => v1 > v2,
    lte: (v1, v2) => v1 <= v2,
    gte: (v1, v2) => v1 >= v2,
    and() {
        return Array.prototype.every.call(arguments, Boolean);
    },
    or() {
        return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
    }
});

import * as data from '../static/data.json';
import home from './templates/pages/home';
import login from './templates/pages/login';
import register from './templates/pages/register';
import user from './templates/pages/user';
import userData from './templates/pages/user_data';
import userPassword from './templates/pages/user_password';
import chats from './templates/pages/chats';
import page404 from './templates/pages/404';
import page500 from './templates/pages/500';

const getCurrentLocationPath = () => {
    const { pathname } = window.location;    
    return pathname.substring(1, pathname.length);
}

const setDocumentTitle = (title) => {
    if (title) {
        document.title = `Чат - ${title}`;
    }
}

const setBodyClassName = (cls) => {
    if (cls) {
        document.body.className = `page-${cls}`;
    }
}

const setPage = (page) => {
    const { render, handlers, title, id } = page;

    const { template, actions } = render;

    const app = document.getElementById('app');    
    const tmpl = Handlebars.compile(template);
    
    app.innerHTML = tmpl(data[id]);

    if (typeof handlers === 'function') {
        handlers();
    }

    if (typeof actions === 'function') {
        actions();
    }
    
    setDocumentTitle(title);
    setBodyClassName(id);
}

const renderDOM = () => {
    const path = getCurrentLocationPath();

    switch(path) {
        case '':
            setPage(home);
            break;
        case 'login':
            setPage(login);
            break;
        case 'register':
            setPage(register);
            break;
        case 'user':
            setPage(user);
            break;
        case 'user_data':
            setPage(userData);
            break;
        case 'user_password':
            setPage(userPassword);
            break;
        case 'chats':
            setPage(chats);
            break;
        case '404':
            setPage(page404);
            break;
        case '500':
            setPage(page500);
            break;
        default:
            setPage(page404);
            break;
    }    

    window.addEventListener('locationchange', renderDOM);
}


renderDOM();