import Block from '../../core/Block';
import './chatInfo.scss';

interface ChatInfoProps {
    name: string,
    avatar: { image: string, image_x2: string }
}

export class ChatInfo extends Block {
    public static componentName = 'ChatInfo';

    constructor(props: ChatInfoProps) {
        super(props);
    }
    render(): string {
        return `
            <div class="dialog__header">
                {{{ 
                    Avatar 
                        image=avatar.image
                        image_x2=avatar.image_x2
                }}}
                <div class="dialog__name">{{ name }}</div>
                <div class="dialog__menu">
                    <button class="dialog__menu-button"></button>
                    <div class="dialog__menu-list">
                        <button>Добавить пользователя</button>
                        <button>Удалить пользователя</button>
                        <button>Удалить чат</button>
                    </div>
                </div>
            </div>
        `;
    }
}