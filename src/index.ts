import { checkUser } from './controllers/checkUser';
import { Router } from './core/Router';

import pageHome from './pages/home';
import pageLogin from './pages/login';
import pageRegister from './pages/register';
import page500 from './pages/500';
import page404 from './pages/404';
import pageSettings from './pages/settings';
import pageSettingsEdit from './pages/settings-edit';
import pagePasswordEdit from './pages/settings-password';
import pageChats from './pages/messenger';
import pageChatsCreate from './pages/messenger-create';
import pageChatsEdit from './pages/messenger-edit';

import './scss/main.scss';

import './core/registerHelpers';
import './core/registerPartials';

document.addEventListener('DOMContentLoaded', () => {
    const router = new Router();

    router
        .use('/', pageHome, {})
        .use('/sign-in', pageLogin, {})
        .use('/sign-up', pageRegister, {})
        .use('/messenger', pageChats, {})
        .use('/messenger/create', pageChatsCreate, {})
        .use('/messenger/edit', pageChatsEdit, {})
        .use('/settings', pageSettings, {})
        .use('/settings/edit', pageSettingsEdit, {})
        .use('/settings/password', pagePasswordEdit, {})
        .use('/500', page500, {})
        .use('*', page404, {})
        .start();

    // имитация задержки
    setTimeout(checkUser, 1000);
});
