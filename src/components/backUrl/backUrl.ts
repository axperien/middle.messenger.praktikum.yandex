import Block from '../../core/Block';
import './backUrl.scss';
import { BackUrlProps } from '../../core/types';

export class BackUrl extends Block<BackUrlProps> {
    public static componentName = 'BackUrl';

    render(): string {
        return `
            <div class="back">
                <a href="{{ url }}" class="back__link"></a>
            </div>
        `;
    }
}
