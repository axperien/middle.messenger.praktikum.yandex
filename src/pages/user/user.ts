/* eslint-disable no-underscore-dangle */
import Block from '../../core/Block';

export class UserPage extends Block {
    getStateFromProps() {
        const stateForSettings = {
            default: {
                name: 'Иван',
                back: {
                    url: '/chats',
                },
                avatar: {
                    image: './images/avatar1.png',
                    image_x2: './images/avatar1@2x.png',
                    overlay_text: 'Поменять аватар',
                },
                fields: [
                    {
                        type: 'email',
                        name: 'email',
                        value: 'pochta@yandex.ru',
                        text: 'Почта',
                        readonly: true,
                    },
                    {
                        type: 'text',
                        name: 'login',
                        value: 'ivanivanov',
                        text: 'Логин',
                        readonly: true,
                    },
                    {
                        type: 'text',
                        name: 'first_name',
                        value: 'Иван',
                        text: 'Имя',
                        readonly: true,
                    },
                    {
                        type: 'text',
                        name: 'second_name',
                        value: 'Иванов',
                        text: 'Фамилия',
                        readonly: true,
                    },
                    {
                        type: 'text',
                        name: 'display_name',
                        value: 'Иван',
                        text: 'Имя в чате',
                        readonly: true,
                    },
                    {
                        type: 'tel',
                        name: 'phone',
                        value: '+7 (909) 967 30 30',
                        text: 'Телефон',
                        readonly: true,
                    },
                ],
                links: [
                    {
                        url: '#',
                        text: 'Изменить данные',
                        cls: 'user__link',
                        onClick: (e: Event) => {
                            e.preventDefault();
                            this.state = stateForSettings.editData;
                            this._componentDidUpdate(this.state, stateForSettings.editData);
                        },
                    },
                    {
                        url: '#',
                        text: 'Изменить пароль',
                        cls: 'user__link',
                        onClick: (e: Event) => {
                            e.preventDefault();
                            this.state = stateForSettings.editPassword;
                            this._componentDidUpdate(this.state, stateForSettings.editPassword);
                        },
                    },
                    {
                        url: '/login',
                        text: 'Выйти',
                        cls: 'link--red user__link',
                    },
                ],
            },
            editPassword: {
                name: 'Иван',
                back: {
                    url: '/chats',
                },
                avatar: {
                    image: './images/avatar1.png',
                    image_x2: './images/avatar1@2x.png',
                    overlay_text: 'Поменять аватар',
                },
                fields: [
                    {
                        type: 'password',
                        name: 'oldPassword',
                        text: 'Старый пароль',
                        errorText: 'Неверный пароль',
                        placeholder: '•••••••••',
                    },
                    {
                        type: 'password',
                        name: 'newPassword',
                        text: 'Новый пароль',
                        errorText: 'Неверный пароль',
                        placeholder: '•••••••••••',
                    },
                    {
                        type: 'password',
                        name: 'newPassword_repeat',
                        text: 'Повторите новый пароль',
                        errorText: 'Неверный пароль',
                        placeholder: '•••••••••••',
                    },
                ],
                buttons: [
                    {
                        text: 'Сохранить',
                        onClick: (e: Event) => {
                            e.preventDefault();

                            const target = e.target as HTMLButtonElement;
                            const form = target.closest('form');

                            if (form) {
                                const formData = new FormData(form);
                                const data = {};

                                // eslint-disable-next-line no-restricted-syntax
                                for (const [name, value] of formData) {
                                    data[name] = value;
                                }

                                console.log(data);
                            }

                            this.state = stateForSettings.default;
                            this._componentDidUpdate(this.state, stateForSettings.default);
                        },
                    },
                ],
            },
            editData: {
                name: 'Иван',
                back: {
                    url: '/chats',
                },
                avatar: {
                    image: './images/avatar1.png',
                    image_x2: './images/avatar1@2x.png',
                    overlay_text: 'Поменять аватар',
                },
                fields: [
                    {
                        type: 'email',
                        name: 'email',
                        value: 'pochta@yandex.ru',
                        text: 'Почта',
                    },
                    {
                        type: 'text',
                        name: 'login',
                        value: 'ivanivanov',
                        text: 'Логин',
                    },
                    {
                        type: 'text',
                        name: 'first_name',
                        value: 'Иван',
                        text: 'Имя',
                    },
                    {
                        type: 'text',
                        name: 'second_name',
                        value: 'Иванов',
                        text: 'Фамилия',
                    },
                    {
                        type: 'text',
                        name: 'display_name',
                        value: 'Иван',
                        text: 'Имя в чате',
                    },
                    {
                        type: 'tel',
                        name: 'phone',
                        value: '+7 (909) 967 30 30',
                        text: 'Телефон',
                    },
                ],
                buttons: [
                    {
                        text: 'Сохранить',
                        onClick: (e: Event) => {
                            e.preventDefault();

                            const target = e.target as HTMLButtonElement;
                            const form = target.closest('form');

                            if (form) {
                                const formData = new FormData(form);
                                const data = {};

                                // eslint-disable-next-line no-restricted-syntax
                                for (const [name, value] of formData) {
                                    data[name] = value;
                                }

                                console.log(data);
                            }

                            this.state = stateForSettings.default;
                            this._componentDidUpdate(this.state, stateForSettings.default);
                        },
                    },
                ],
            },
        };

        this.state = stateForSettings.default;
    }

    render() {
        return `
            <div class="user">
                {{{ BackUrl url=back.url }}}
                <div class="user__container">
                    {{{ 
                        Avatar 
                            image=avatar.image
                            image_x2=avatar.image_x2
                            overlay_text=avatar.overlay_text 
                    }}}
                    {{#if name }}
                        <h3 class="user__name">{{ name }}</h3>
                    {{/if}}
                    <form action="" class="user__form">
                        {{#each fields}}
                            {{{ 
                                UserField
                                    type=type
                                    text=text
                                    name=name
                                    placeholder=placeholder
                                    value=value
                                    readonly=readonly
                            }}}
                        {{/each}}
                        {{#if buttons }}
                            <div class="user__links">
                                {{#each buttons}}
                                    {{{ 
                                        Button 
                                            text=text
                                            onClick=onClick
                                    }}}
                                {{/each}}
                            </div>
                        {{/if}}
                        {{#if links }}
                            <div class="user__links">
                                {{#each links}}
                                    <div class="user__link-wrapper">
                                        {{{ 
                                            Link
                                                url=url
                                                text=text
                                                cls=cls
                                                onClick=onClick
                                        }}}
                                    </div>
                                {{/each}}
                            </div>
                        {{/if}}
                    </form>
                </div>
            </div>
        `;
    }
}
