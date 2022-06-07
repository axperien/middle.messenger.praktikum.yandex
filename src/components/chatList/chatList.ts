import Block from '../../core/Block';
import { ChatListProps } from '../../core/types';

export class ChatList extends Block<ChatListProps> {
    public static componentName = 'ChatList';

    constructor({
        chats,
        currentChat,
        onSelectChat = () => {},
    }: ChatListProps) {
        super({
            chats,
            currentChat,
            onSelectChat,
            events: {
                click: onSelectChat,
            },
        });
    }

    render(): string {
        return `
            <div class="chats__items">
                {{#each chats }}
                    <div class="chats__item {{#if (eq ../currentChat.id id)}}chats__item--active{{/if}}" data-chat-id={{ id }}>
                        {{{ 
                            Avatar 
                                image=avatar
                        }}}
                        <div class="chats__content">
                            <div class="chats__head">
                                <p class="chats__name">{{ title }}</p>
                                <span class="chats__time">{{ lastMessage.created }}</span>
                            </div>

                            {{#if lastMessage}}
                                <p class="chats__text">
                                    {{#if (eq lastMessage.you true)}}
                                        <b>Вы:</b>
                                    {{else}}
                                        <b>{{ lastMessage.from }}:</b>
                                    {{/if}}
                                    {{ lastMessage.text }}
                                </p>

                                {{#if (gt unread_count 0)}}
                                    <div class="chats__unread">{{ unread_count }}</div>
                                {{/if}}
                            {{else}}
                                <p class="chats__text">Нет сообщений</p>
                            {{/if}}
                        </div>
                    </div>
                {{else}}
                    <div class="chats__empty">Пока что нет диалогов</div>
                {{/each}}
            </div>
        `;
    }
}
