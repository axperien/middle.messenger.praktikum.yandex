import Handlebars from 'handlebars';

import template from 'bundle-text:./user_data.hbs';

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
            type: 'email',
            name: 'email',
            value: 'pochta@yandex.ru',
            text: 'Почта',
            errorText: 'Неверный email',
            required: true,
            readonly: false,
            pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
        },
        {
            type: 'text', 
            name: 'login', 
            value: 'ivanivanov',
            text: 'Логин',
            errorText: 'Неверный логин',
            required: true,
            readonly: false,
            minlength: 3,
            maxlength: 20,
            pattern: '^[a-zA-Z][a-zA-Z0-9-_]*$',
            title: 'От 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)'
        },
        {
            type: 'text',
            name: 'first_name',
            value: 'Иван',
            text: 'Имя',
            errorText: '',
            pattern: '^[A-ZА-Я][a-zA-Zа-яА-Я-]*$',
            required: true,
            readonly: false,
        },
        {
            type: 'text',
            name: 'second_name',
            value: 'Иванов',
            text: 'Фамилия',
            errorText: '',
            pattern: '^[A-ZА-Я][a-zA-Zа-яА-Я-]*$',
            required: true,
            readonly: false,
        },
        {
            type: 'text', 
            name: 'display_name', 
            value: 'Иван',
            text: 'Имя в чате',
            errorText: '',
            required: true,
            readonly: false,
        },
        {
            type: 'tel',
            name: 'phone',
            value: '+7 (909) 967 30 30',
            text: 'Телефон',
            errorText: '',
            pattern: '^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]*$',
            required: true,
            readonly: false,
            minlength: 10,
            maxlength: 15
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