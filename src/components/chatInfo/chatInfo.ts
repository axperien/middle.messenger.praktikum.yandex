import Block from '../../core/Block';
import './chatInfo.scss';
import { ChatInfoProps } from '../../core/types';

export class ChatInfo extends Block<ChatInfoProps> {
    public static componentName = 'ChatInfo';

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
