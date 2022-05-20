import Block from '../../core/Block';
import './error.scss';
import { ErrorProps } from '../../core/types';

export class Error extends Block<ErrorProps> {
    public static componentName = 'Error';

    render(): string {
        return `
            <div class="error">
                <h1 class="error__code">{{ code }}</h1>
                <p class="error__text">{{ text }}</p>
                <div class="error__link">
                    <a href="/chats" class="link">Назад к чатам</a>
                </div>
            </div>
        `;
    }
}
