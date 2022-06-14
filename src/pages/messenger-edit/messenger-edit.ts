import { Router } from '../../core/Router';
import { Store } from '../../core/Store';
import { addUserToChat, deleteChat, deleteChatUser } from '../../controllers/chats';

import Block from '../../core/Block';
import Hoc from '../../core/Hoc';

const globalStore = new Store();
const globalRouter = new Router();

export class ChatsEditPage extends Block {
    pageTitle = 'Создать новый чат';

    pageCls = 'chats';

    public needCheckAuth = true;

    constructor() {
        super();

        this.setProps({
            onAddUser: () => {
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

                if (user && user instanceof HTMLElement) {
                    const userId = user.dataset?.userId;
                    if (userId) {
                        const id = parseInt(userId, 10);

                        deleteChatUser(id);
                    }
                }
            },
            onDeleteChat: () => {
                deleteChat()
                    .then(() => {
                        globalRouter.go('/messenger');
                    });
            },
            onAvatarClick: (e: Event) => {
                const target = e.target as HTMLElement;

                if (target) {
                    const modalId = target.dataset.modalId;

                    if (modalId) {
                        this.setProps({
                            modal: {
                                isOpen: true,
                                modalId,
                            },
                        });
                    }
                }
            },
            isAvatarChanged: () => {
                this.setProps({
                    modal: {
                        isOpen: false,
                        modalId: null,
                    },
                });
            },
        });
    }

    componentDidMount() {
        if (!globalStore || (!globalStore.getState().currentChat
            && !globalStore.getState().isLoadApp)) {
            globalRouter.go('/messenger');
        }
    }

    render(): string {
        return `
            {{#if store.isLoadApp}}
                <div class="chats">
                    {{{ BackUrl }}}
                    <div class="chats__form">
                        {{{ 
                            Avatar 
                                image=store.currentChat.avatar
                                overlayText="Поменять аватар"
                                modalId="changeAvatar"
                                onClick=onAvatarClick
                        }}}
                        <div class="chats__form-group">
                            <h1>«{{ store.currentChat.title }}»</h1>
                        </div>
                        <div class="chats__form-group">
                            <h2>Список пользователей</h2>
                            {{#each store.currentChat.users }}
                                <div class="chats__form-user" data-user-id="{{ id }}">
                                    <p>{{ login }} <b>({{ first_name }} {{ second_name}})</b></p>
                                    {{#if (eq id ../store.user.id)}}
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
                        {{#if (eq store.currentChat.isAdmin true)}}
                            <div class="chats__buttons">
                                {{{
                                    Link
                                        cls="link--red"
                                        text="Удалить чат"
                                        onClick=onDeleteChat
                                }}}
                            </div>
                        {{/if}}
                    </div>
                    {{{ Modal id="changeAvatar" type="chat" modal=modal callback=isAvatarChanged }}}
                </div>
            {{else}}
                {{{ Loader }}}
            {{/if}}
        `;
    }
}

export default Hoc(ChatsEditPage);
