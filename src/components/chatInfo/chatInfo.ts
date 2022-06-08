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
                        image=avatar
                }}}
                <div class="dialog__name">{{ name }}</div>
                <div class="dialog__menu">
                    {{{
                        Button
                            url="/messenger/edit"
                            cls="dialog__menu-button"
                            text=""
                    }}}
                </div>
            </div>
        `;
    }
}
