import Block from '../../core/Block';
import './chatMessage.scss';
import { ChatMessageProps } from '../../core/types';

export class ChatMessage extends Block<ChatMessageProps> {
    public static componentName = 'ChatMessage';

    render(): string {
        return `
            <div class="message message--{{#if (eq you true)}}self{{else}}user{{/if}}">
                <div class="message__box">
                    {{#if author }}
                        <div class="message__author">
                            {{#if (ne author.display_name '') }}
                                {{ author.display_name }}
                            {{else}}
                                {{ author.login }}
                            {{/if}}
                        </div>
                    {{/if}}
                    {{#if text }}
                        <div class="message__text">{{ text }}</div>
                    {{/if}}
                    {{#if image }}
                        <div class="message__image">
                            <img src="{{ image }}" alt="">
                        </div>
                    {{/if}}
                    <div class="message__time">{{ created }}</div>
                </div>
            </div>
        `;
    }
}
