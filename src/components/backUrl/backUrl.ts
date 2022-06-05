/* eslint-disable no-underscore-dangle */
import Block from '../../core/Block';
import './backUrl.scss';
import { BackUrlProps } from '../../core/types';

export class BackUrl extends Block<BackUrlProps> {
    public static componentName = 'BackUrl';

    _addEvents():void {
        const element = this._element;
        const { url } = this.props;

        element?.addEventListener('click', (e) => {
            e.preventDefault();
            if (url) {
                window.router.go(url);
            } else {
                window.router.back();
            }
        });
    }

    render(): string {
        return `
            <div class="back">
                <a href="{{ url }}" class="back__link"></a>
            </div>
        `;
    }
}
