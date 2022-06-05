import Block from '../../core/Block';
import './loader.scss';

export class Loader extends Block {
    public static componentName = 'Loader';

    render(): string {
        return `
            <div class="loader"><div></div><div></div></div>
        `;
    }
}
