import Block from '../../core/Block';
import './button.scss';
import { ButtonProps } from '../../core/types';

export class Button extends Block {
    public static componentName = 'Button';

    constructor({
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        text, cls, type = 'button', onClick = () => {},
    } : ButtonProps) {
        super({
            text, cls, type, events: { click: onClick },
        });
    }

    render(): string {
        return `
            <button class="button {{#if cls }}{{ cls }}{{/if}}" type="{{ type }}">{{ text }}</button>
        `;
    }
}
