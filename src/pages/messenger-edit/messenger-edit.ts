import { addUserToChat, deleteChatUser } from '../../services/chats';
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-underscore-dangle */
import Block from '../../core/Block';
import Hoc from '../../core/Hoc';

export class ChatsEditPage extends Block {
    pageTitle = 'Создать новый чат';

    pageCls = 'chats';

    public needCheckAuth = true;

    constructor() {
        super();

        this.setProps({
            onAddUser: (e: Event) => {
                const inputUser = document.querySelector('.user__input[name="login"]') as HTMLInputElement;

                if (inputUser) {
                    const login: string = inputUser.value;

                    if (login.length) {
                        addUserToChat({
                            login,
                        });
                    }
                }
            },
            onDeleteUser: (e: Event) => {
                const target = e.target as HTMLElement;
                const user = target.closest('.chats__form-user') || null;

                if (user) {
                    // @ts-ignore
                    const id = parseInt(user.dataset.userId, 10);

                    if (id) {
                        deleteChatUser(id);
                    }
                }
            },
        });
    }

    componentDidMount(props: any): void {
        const { store } = this.state;

        if (!store || !store.currentChat) {
            window.router.go('/messenger');
        }
    }

    render(): string {
        return `
            {{#if store.isLoadApp}}
                <div class="chats">
                    {{{ BackUrl }}}
                    <div class="chats__form">
                        <div class="chats__form-group">
                            <h1>«{{ store.currentChat.title }}»</h1>
                        </div>
                        <div class="chats__form-group">
                            <h2>Список пользователей</h2>
                            {{#each store.currentChat.users }}
                                <div class="chats__form-user" data-user-id="{{ id }}">
                                    <p>{{ login }} <b>({{ first_name }} {{ second_name}})</b></p>
                                    {{#if (eq role 'admin')}}
                                        Вы
                                    {{else}}
                                        {{{
                                            Link
                                                cls="link--red chats__form-user_delete"
                                                text="Удалить"
                                                onClick=../onDeleteUser
                                        }}}
                                    {{/if}}
                                </div>
                            {{else}}
                                <div class="chats__empty">Нет пользователей в чате</div>
                            {{/each}}
                        </div>
                        <div class="chats__form-group">
                            <h2>Добавить пользователей</h2>
                            {{{
                                UserField
                                    type="text"
                                    name="login"
                                    value=""
                                    text="Имя пользователя"
                                    placeholder="Введите логин"
                            }}}
                            {{{ 
                                Button 
                                    cls="button--user__add"
                                    text="Добавить"
                                    onClick=onAddUser
                            }}}
                        </div>
                        <div class="chats__buttons">
                            {{{
                                Link
                                    cls="link--red"
                                    text="Удалить чат"
                            }}}
                        </div>
                    </div>
                </div>
            {{else}}
                {{{ Loader }}}
            {{/if}}   
        `;
    }
}

export default Hoc(ChatsEditPage);
