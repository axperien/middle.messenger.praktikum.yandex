import { Router } from '../../core/Router';
import Block from '../../core/Block';
import './link.scss';
import { LinkProps } from '../../core/types';

const globalRouter = new Router();

export class Link extends Block<LinkProps> {
    public static componentName = 'Link';

    constructor({
        text, cls, url, onClick = () => {},
    }: LinkProps) {
        super({
            text, cls, url, onClick, events: { click: onClick },
        });
    }

    addEvents():void {
        const { url } = this.props;
        const element = this._element;

        element?.addEventListener('click', (e) => {
            e.preventDefault();
            if (url) {
                globalRouter.go(url);
            }
        });
    }

    render(): string {
        return `
            <a href="{{ url }}" class="link {{#if cls }}{{ cls }}{{/if}}">{{ text }}</a>
        `;
    }
}
