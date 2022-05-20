import Block from '../../core/Block';
import './avatar.scss';
import { AvatarProps } from '../../core/types';

export class Avatar extends Block<AvatarProps> {
    public static componentName = 'Avatar';

    render(): string {
        return `
            <div class="avatar">
                <div class="avatar__image"><img src="{{ image }}" srcset="{{ imageX2 }}" alt=""></div>
                {{#if overlayText }}
                    <div class="avatar__overlay" data-modal-id="change_avatar">{{ overlayText }}</div>
                {{/if}}
            </div>
        `;
    }
}
