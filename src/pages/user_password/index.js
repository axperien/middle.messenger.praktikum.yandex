import Handlebars from 'handlebars';

import template from 'bundle-text:./user_password.hbs';

const data = {
    back: {
        url: '/chats'
    },
    avatar: {
        image: './images/avatar1.png',
        image_x2: './images/avatar1@2x.png',
        overlay_text: 'Поменять аватар'
    },
    fields: [
        {
            type: 'password', 
            name: 'oldPassword', 
            text: 'Старый пароль',
            errorText: 'Неверный пароль',
            placeholder: '•••••••••',
            required: true,
            minlength: 6,
            maxlength: 40,
            pattern: '^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.])(?=.*[A-Z])(?=.*[a-z]).*$',
            title: 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра'
        },
        {
            type: 'password', 
            name: 'newPassword', 
            text: 'Новый пароль',
            errorText: 'Неверный пароль',
            placeholder: '•••••••••••',
            required: true,
            minlength: 6,
            maxlength: 40,
            pattern: '^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.])(?=.*[A-Z])(?=.*[a-z]).*$',
            title: 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра'
        },
        {
            type: 'password', 
            name: 'newPassword_repeat', 
            text: 'Повторите новый пароль',
            errorText: 'Неверный пароль',
            placeholder: '•••••••••••',
            required: true,
            minlength: 6,
            maxlength: 40,
            pattern: '^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.])(?=.*[A-Z])(?=.*[a-z]).*$',
            title: 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра'
        },
    ],
    buttons: [
        {
            text: 'Сохранить'
        }
    ]
};

const page = Handlebars.compile(template)(data);

export default page;