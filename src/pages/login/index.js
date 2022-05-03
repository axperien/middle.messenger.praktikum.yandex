import Handlebars from 'handlebars';

import template from 'bundle-text:./login.hbs';

const data = {
    title: 'Вход',
    button: {
        cls: 'form__submit',
        text: 'Войти'
    },
    link: {
        text: 'Регистрация',
        url: '/register'
    },
    fields: [
        {
            type: 'text', 
            name: 'login', 
            text: 'Логин',
            errorText: 'Неверный логин',
            required: true,
            minlength: 3,
            maxlength: 20
        },
        {
            type: 'password', 
            name: 'password', 
            text: 'Пароль',
            errorText: 'Неверный пароль',
            required: true,
            minlength: 6,
            maxlength: 40
        },
    ]
};

const page = Handlebars.compile(template)(data);

export default page;