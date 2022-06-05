/* eslint-disable no-underscore-dangle */
import Block from '../../core/Block';
import './link.scss';
import { LinkProps } from '../../core/types';

export class Link extends Block<LinkProps> {
    public static componentName = 'Link';

    constructor({
        // eslint-disable-next-line @typescript-eslint/no-empty-function
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
                window.router.go(url);
            }
        });
    }

    render(): string {
        return `
            <a href="{{ url }}" class="link {{#if cls }}{{ cls }}{{/if}}">{{ text }}</a>
        `;
    }
}
