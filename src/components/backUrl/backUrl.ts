import Block from '../../core/Block';
import './backUrl.scss';

interface BackUrlProps {
    url: string
}

export class BackUrl extends Block {
    public static componentName = 'BackUrl';

    constructor(props: BackUrlProps) {
        super(props);
    }

    render(): string {
        return `
            <div class="back">
                <a href="{{ url }}" class="back__link"></a>
            </div>
        `;
    }
}
