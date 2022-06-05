/* eslint-disable no-underscore-dangle */
import Block from '../../core/Block';
import './button.scss';
import { ButtonProps } from '../../core/types';

export class Button extends Block {
    public static componentName = 'Button';

    constructor({
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        text, cls, type = 'button', url, onClick = () => {},
    } : ButtonProps) {
        super({
            text, cls, type, url, events: { click: onClick },
        });
    }

    addEvents():void {
        const { url } = this.props;
        const element = this._element;

        element?.addEventListener('click', (e) => {
            if (url) {
                e.preventDefault();
                window.router.go(url);
            }
        });
    }

    render(): string {
        const { text } = this.state;
        return `
            {{#if url }}
                <a href="{{ url }}" class="button {{#if cls }}{{ cls }}{{/if}}" type="{{ type }}">${text}</a>
            {{else}}
                <button class="button {{#if cls }}{{ cls }}{{/if}}" type="{{ type }}">${text}</button>
            {{/if}}
        `;
    }
}
