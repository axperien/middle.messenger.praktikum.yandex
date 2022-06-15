# Учебный проект Middle Fronted-разработчик. Модуль 1.

## Описание проекта
Мессенджер с возможностью отправки сообщений. 

[Проект на Heroku](https://axperien-yandex-messenger.herokuapp.com/)

#### Прототип проекта
[Макеты в Figma](https://www.figma.com/file/KjNp2P9WNMh5Ns3LtSiv7B/Messenger-Yandex?node-id=0%3A1)  

#### Что сделано:
- авторизация/регистрация
- проверка авторизации текущего пользователя
- список чатов
- чат с подключением сообщений через WebSocket
- страница профиля
- страница редактирования профиля
- страница смены пароля пользователя
- загрузка аватара для пользователя
- создание нового чата
- удаление чата его администратором (создателем)
- загрузка аватара для чата
- добавление/удаление пользователей в чат

## Технологии
- Handlebars
- SCSS
- Typescript
- Webpack
- Express
- WebSocket
- Husky
- Chai
- Mocha
- Docker
- Heroku
- ESLint
- Stylelint

## Ссылки
- [Pull Request Sprint_1](https://github.com/axperien/middle.messenger.praktikum.yandex/pull/2)
- [Pull Request Sprint_2](https://github.com/axperien/middle.messenger.praktikum.yandex/pull/3)
- [Pull Request Sprint_3](https://github.com/axperien/middle.messenger.praktikum.yandex/pull/5)
- [Pull Request Sprint_4](https://github.com/axperien/middle.messenger.praktikum.yandex/pull/8)
- [Проект на Netlify (старый deploy)](https://playful-dasik-ddf843.netlify.app/)


## Сборка и запуск
`npm install` - установка модулей  
`npm run dev` - сборка проекта в dev режиме  
`npm run build` - production сборка проекта  
`npm run production` - production сборка проекта  
`npm run start` - production сборка проекта и запуск сервера на 3000 порту
`npm run test` - запуск тестов  
`npm run eslint` - запуск ESLint  
`npm run stylelint` - запуск Stylelint  
`npm run docker:build` - билд docker контейнера  
`npm run docker:run` - запуск docker контейнера  
`npm run docker:stop` - остановка docker контейнера  
`npm run deploy` - deploy контейнера на heroku  
