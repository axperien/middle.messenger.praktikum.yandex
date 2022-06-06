import { Store } from '../../core/Store';
import { getChatsList, getCurrentChatInfo } from '../../services/chats';
import Block from '../../core/Block';
import Hoc from '../../core/Hoc';

const globalStore = new Store();

export class ChatsPage extends Block {
    pageTitle = 'Список чатов';

    pageCls = 'chats';

    public needCheckAuth = true;

    constructor() {
        super();

        getChatsList();

        this.setProps({
            onSelectChat: (e: Event) => {
                const target = e.target as HTMLElement | null;

                if (target === null) {
                    return;
                }

                const closestItem = target.closest('.chats__item') as HTMLElement | null;
                const isChatItem = target.className === 'chats__item' || closestItem;

                if (isChatItem) {
                    const chatId = target.dataset.chatId || closestItem?.dataset.chatId;
                    if (chatId) {
                        const id = parseInt(chatId, 10);

                        const { chats } = this.props.store;

                        const currentChat = chats.find((chat: { id: number }) => chat.id === id);

                        if (currentChat) {
                            globalStore.set({
                                currentChat,
                            });
                            getCurrentChatInfo();
                        }
                    }
                }
            },
        });
    }

    render(): string {
        return `
            {{#if store.isLoadApp}}
                <div class="chats">
                    <aside class="chats__sidebar">
                        <div class="chats__header">
                            <div class="chats__create">
                                {{{ 
                                    Link
                                        text="+ Новый чат"
                                        url="/messenger/create"
                                }}}
                            </div>
                            <div class="chats__profile">
                                {{{ 
                                    Link
                                    text="Профиль >"
                                    url="/settings"
                                }}}
                            </div>
                        </div>
                        {{{ ChatList chats=store.chats currentChat=store.currentChat onSelectChat=onSelectChat }}}
                    </aside>
                    <section class="chats__container dialog">
                        {{#if store.currentChat }}
                            {{{ ChatInfo avatar=store.currentChat.avatar name=store.currentChat.title }}}
                            <div class="dialog__messages">
                                {{#if (eq store.messages null)}}
                                        {{{ Loader }}}
                                {{else}}
                                    {{#each store.messages }}
                                        {{{ 
                                            ChatMessage 
                                                text=text
                                                author=author
                                                you=you
                                                created=created 
                                        }}}
                                    {{else}}
                                        <div class="chats__empty">Пока что тут нет сообщений</div>
                                    {{/each}}
                                {{/if}}
                            </div>
                            {{{ ChatForm }}}
                        {{else}}
                            <div class="chats__empty">Выберите чат чтобы отправить сообщение</div>
                        {{/if}}
                    </section>
                </div>
            {{else}}
                {{{ Loader }}}
            {{/if}}   
        `;
    }
}

export default Hoc(ChatsPage);
