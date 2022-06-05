/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-underscore-dangle */
import Block from '../../core/Block';
import Hoc from '../../core/Hoc';
import { createChat } from '../../services/chats';

export class ChatsCreatePage extends Block {
    pageTitle = 'Создать новый чат';

    pageCls = 'chats';

    public needCheckAuth = true;

    constructor() {
        super();

        this.setProps({
            onCreate: (e: Event) => {
                const target = e.target as HTMLButtonElement;
                const form = target.closest('form');

                if (form) {
                    const formData = new FormData(form);
                    const data: { title: string } = {
                        title: '',
                    };

                    // eslint-disable-next-line no-restricted-syntax
                    for (const [name, value] of formData) {
                        // @ts-ignore
                        data[name] = value;
                    }

                    createChat(data)
                        .then(() => {
                            window.router.go('/messenger');
                        });
                }
            },
        });
    }

    render(): string {
        return `
            {{#if store.isLoadApp}}
                <div class="chats">
                    {{{ BackUrl }}}
                    <form class="chats__form">
                        <h1>Создать новый чат</h1>
                        {{{
                            UserField
                                type="text"
                                name="title"
                                value=""
                                text="Имя чата"
                                placeholder="Введите имя чата"
                        }}}
                        <div class="chats__buttons">
                        {{{ 
                            Button 
                                cls="button--chat_create"
                                text="Создать"
                                onClick=onCreate
                        }}}
                        </div>
                    </form>
                </div>
            {{else}}
                {{{ Loader }}}
            {{/if}}   
        `;
    }
}

export default Hoc(ChatsCreatePage);
