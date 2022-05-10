import Block from '../../core/Block';
import './avatar.scss';

interface AvatarProps {
    image: string,
    image_x2: string,
    overlay_text: string
}

export class Avatar extends Block {
    public static componentName = 'Avatar';

    constructor(props: AvatarProps) {
        super(props);
    }
    render(): string {
        return `
            <div class="avatar">
                <div class="avatar__image"><img src="{{ image }}" srcset="{{ image_x2 }}" alt=""></div>
                {{#if overlay_text }}
                    <div class="avatar__overlay" data-modal-id="change_avatar">{{ overlay_text }}</div>
                {{/if}}
            </div>
        `;
    }
}