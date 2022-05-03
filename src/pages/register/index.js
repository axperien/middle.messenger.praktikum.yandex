import Handlebars from 'handlebars';

import template from 'bundle-text:./register.hbs';

const data = {
    title: 'Регистрация',
    button: {
        cls: 'form__submit',
        text: 'Зарегистрироваться'
    },
    link: {
        text: 'Войти',
        url: '/login'
    },
    fields: [
        {
            type: 'email',
            name: 'email',
            text: 'Почта',
            errorText: 'Неверный email',
            required: true,
            pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
        },
        {
            type: 'text', 
            name: 'login', 
            text: 'Логин',
            errorText: 'Неверный логин',
            required: true,
            minlength: 3,
            maxlength: 20,
            pattern: '^[a-zA-Z][a-zA-Z0-9-_]*$',
            title: 'От 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)'
        },
        {
            type: 'text',
            name: 'first_name',
            text: 'Имя',
            pattern: '^[A-ZА-Я][a-zA-Zа-яА-Я-]*$',
            required: true
        },
        {
            type: 'text',
            name: 'second_name',
            text: 'Фамилия',
            pattern: '^[A-ZА-Я][a-zA-Zа-яА-Я-]*$',
            required: true
        },
        {
            type: 'tel',
            name: 'phone',
            text: 'Телефон',
            errorText: 'Неверный формат',
            pattern: '^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]*$',
            required: true,
            minlength: 10,
            maxlength: 15
        },
        {
            type: 'password', 
            name: 'password', 
            text: 'Пароль',
            errorText: 'Неверный пароль',
            required: true,
            minlength: 6,
            maxlength: 40,
            pattern: '^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.])(?=.*[A-Z])(?=.*[a-z]).*$',
            title: 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра'
        },
        {
            type: 'password', 
            name: 'password_repeat', 
            text: 'Пароль еще раз',
            errorText: 'Пароли не совпадают',
            required: true,
            minlength: 6,
            maxlength: 40,
            pattern: '^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.])(?=.*[A-Z])(?=.*[a-z]).*$',
            title: 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра'
        },
    ]
};

const page = Handlebars.compile(template)(data);

export default page;