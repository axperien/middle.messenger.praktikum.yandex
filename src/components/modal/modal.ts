import { ModalProps } from '../../core/types';
import Block from '../../core/Block';
import './modal.scss';

export class Modal extends Block {
    public static componentName = 'Modal';

    constructor({
        id, modal, callback, type,
    }: ModalProps) {
        super({ id, modal, callback, type });
    }

    addEvents():void {
        const modal = this._element as HTMLElement;

        if (modal) {
            modal.addEventListener('click', (e: Event) => {
                const target = e.target as HTMLDivElement;

                if (target === modal) {
                    this.setProps({
                        modal: {
                            isOpen: false,
                            modalId: null,
                        },
                    });
                }
            });
        }
    }

    render(): string {
        return `
            <div class="modal {{#if (and (eq modal.isOpen true) (eq modal.modalId id)) }}is-open{{/if}}">
                <div class="modal__content">
                    {{#if (eq id 'changeAvatar') }}
                        {{{ ModalAvatar type=type callback=callback }}}
                    {{/if}}
                </div>
            </div>
        `;
    }
}
