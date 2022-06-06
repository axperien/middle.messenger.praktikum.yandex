import { Router } from '../../core/Router';
import Block from '../../core/Block';
import './backUrl.scss';
import { BackUrlProps } from '../../core/types';

const globalRouter = new Router();

export class BackUrl extends Block<BackUrlProps> {
    public static componentName = 'BackUrl';

    _addEvents():void {
        const element = this._element;
        const { url } = this.props;

        element?.addEventListener('click', (e) => {
            e.preventDefault();
            if (url) {
                globalRouter.go(url);
            } else {
                globalRouter.back();
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
