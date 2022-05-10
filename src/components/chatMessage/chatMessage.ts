import Block from '../../core/Block';
import './chatMessage.scss';

interface ChatMessageProps {
    from: string,
    text: string,
    image: string,
    time: string
}

export class ChatMessage extends Block {
    constructor(props: ChatMessageProps) {
        super(props);
    }
    render(): string {
        return `
            <div class="message message--{{ from }}">
                <div class="message__box">
                    {{#if text }}
                        <div class="message__text">{{ text }}</div>
                    {{/if}}
                    {{#if image }}
                        <div class="message__image">
                            <img src="{{ image }}" alt="">
                        </div>
                    {{/if}}
                    <div class="message__time">{{ time }}</div>
                </div>
            </div>
        `;
    }
}