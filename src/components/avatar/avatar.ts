import Block from '../../core/Block';
import './avatar.scss';
import { AvatarProps } from '../../core/types';

export class Avatar extends Block {
    public static componentName = 'Avatar';

    constructor({
        image, overlayText, modalId, onClick = () => {},
    } : AvatarProps) {
        super({
            image, overlayText, modalId, events: { click: onClick },
        });
    }

    render(): string {
        return `
            <div class="avatar">
                {{#if image }}
                    <div class="avatar__image"><img src="{{ image }}" /></div>
                {{/if}}
                {{#if overlayText }}
                    <div class="avatar__overlay" data-modal-id="{{ modalId }}">{{ overlayText }}</div>
                {{/if}}
            </div>
        `;
    }
}
