import pageHome from '../pages/home';
import pageLogin from '../pages/login';
import pageRegister from '../pages/register';
import page500 from '../pages/500';
import page404 from '../pages/404';
import pageUser from '../pages/user';
import pageUserData from '../pages/user_data';
import pageUserPassword from '../pages/user_password';
import pageChats from '../pages/chats';
import pageChat from '../pages/chat';

const pages = {
    home: {
        title: 'Главная страница',
        id: 'home',
        template: pageHome
    },
    login: {
        title: 'Авторизация',
        id: 'login',
        template: pageLogin
    },
    register: {
        title: 'Регистрация',
        id: 'register',
        template: pageRegister
    },
    500: {
        title: 'Ошибка 500',
        id: 'error_500',
        template: page500
    },
    404: {
        title: 'Ошибка 404',
        id: 'error_404',
        template: page404
    },
    user: {
        title: 'Профль',
        id: 'user',
        template: pageUser
    },
    user_data: {
        title: 'Профиль - Изменить данные',
        id: 'user',
        template: pageUserData
    },
    user_password: {
        title: 'Профиль - Изменить пароль',
        id: 'user',
        template: pageUserPassword
    },
    chats: {
        title: 'Список чатов',
        id: 'chats',
        template: pageChats
    },
    chat: {
        title: 'Чат с пользователем',
        id: 'chats',
        template: pageChat
    },
}

const getCurrentLocationPath = () => {
    const { pathname } = window.location;    
    return pathname.substring(1, pathname.length);
}

const currentLocation = getCurrentLocationPath() || 'home';

export const getCurrentPage = () => {
    return pages[currentLocation] || pages[404];
}