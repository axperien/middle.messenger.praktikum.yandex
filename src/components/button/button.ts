import Block from '../../core/Block';
import './button.scss';

interface ButtonProps {
    cls: string,
    text: string;
    type: string,
    onClick: () => void
}

export class Button extends Block {
    public static componentName = 'Button';

    constructor({text, cls, type = 'button', onClick = () => {}}: ButtonProps) {
        super({ text, cls, type, events: { click: onClick } });
    }
    render(): string {
        return `
            <button class="button {{#if cls }}{{ cls }}{{/if}}" type="{{ type }}">{{ text }}</button>
        `;
    }
}