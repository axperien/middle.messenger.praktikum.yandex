import Block from '../../core/Block';
import './link.scss';

interface LinkProps {
    cls: string,
    text: string;
    url: string,
    onClick: () => void
  }

export class Link extends Block {
    constructor({text, cls, url, onClick = () => {}}: LinkProps) {
        super({ text, cls, url, events: { click: onClick } });
    }
    render(): string {
        return `
            <a href="{{ url }}" class="link {{#if cls }}{{ cls }}{{/if}}">{{ text }}</a>
        `;
    }
}