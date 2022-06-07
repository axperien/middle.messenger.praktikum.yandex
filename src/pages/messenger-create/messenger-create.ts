import { Indexed } from '../../core/types';
import { Router } from '../../core/Router';
import Block from '../../core/Block';
import Hoc from '../../core/Hoc';
import { createChat } from '../../controllers/chats';

const globalRouter = new Router();

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
                    const data: Indexed = {
                        title: '',
                    };

                    [...formData.entries()].forEach(([name, value]) => {
                        data[name] = value;
                    });

                    createChat(data)
                        .then(() => {
                            globalRouter.go('/messenger');
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
