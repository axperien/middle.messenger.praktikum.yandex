import Block from './Block';
import pageHome from '../pages/home';
import pageLogin from '../pages/login';
import pageRegister from '../pages/register';
import page500 from '../pages/500';
import page404 from '../pages/404';
import pageUser from '../pages/user';
import pageChats from '../pages/chats';

const pages: any = {
    home: {
        title: 'Главная страница',
        id: 'home',
        Page: pageHome,
    },
    login: {
        title: 'Авторизация',
        id: 'login',
        Page: pageLogin,
    },
    register: {
        title: 'Регистрация',
        id: 'register',
        Page: pageRegister,
    },
    500: {
        title: 'Ошибка 500',
        id: 'error_500',
        Page: page500,
    },
    404: {
        title: 'Ошибка 404',
        id: 'error_404',
        Page: page404,
    },
    user: {
        title: 'Профль',
        id: 'user',
        Page: pageUser,
    },
    chats: {
        title: 'Список чатов',
        id: 'chats',
        Page: pageChats,
    },
};

const getCurrentLocationPath = (): string => {
    const { pathname } = window.location;
    return pathname.substring(1, pathname.length);
};

const currentLocation = getCurrentLocationPath() || 'home';

export const getCurrentPage = (): { title: string, id: string, Page: Block } => {
    const currentPage = pages[currentLocation] || pages[404];

    return currentPage;
};
