import Block from '../../core/Block';
import './error.scss';

interface ErrorProps {
    code: string,
    text: string
  }

export class Error extends Block {
    public static componentName = 'Error';

    constructor(props: ErrorProps) {
        super(props);
    }

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
