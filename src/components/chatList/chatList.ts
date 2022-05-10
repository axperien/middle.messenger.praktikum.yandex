import Block from '../../core/Block';

interface ChatUser {
    name: string,
    avatar: { image: string, image_x2: string }
}

interface ChatListProps {
    chats: Array<{ id: number, user: ChatUser, lastMessage: Record<'time' | 'text' | 'from', string> }>,
    onClick: () => void
}

export class ChatList extends Block {
    public static componentName = 'ChatList';

    constructor({
        chats,
        onClick = () => {}
    }: ChatListProps) {
        super({
            chats,
            events: {
                click: onClick
            }
        });
    }
    render(): string {
        return `
            <div class="chats__items">
                {{#each chats }}
                    <div class="chats__item">
                        {{{ 
                            Avatar 
                                image=user.avatar.image
                                image_x2=user.avatar.image_x2
                        }}}
                        <div class="chats__content">
                            <div class="chats__head">
                                <p class="chats__name">{{ user.name }}</p>
                                <span class="chats__time">{{ lastMessage.time }}</span>
                            </div>
                            
                            <p class="chats__text">
                                {{#if (eq lastMessage.from 'self')}}
                                    <b>Вы:</b>
                                {{/if}}
                                {{ lastMessage.text }}
                            </p>
                        </div>
                    </div>
                {{else}}
                    <div class="chats__empty">Пока что нет диалогов</div>
                {{/each}}
            </div>
        `;
    }
}