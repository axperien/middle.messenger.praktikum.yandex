/* eslint-disable no-underscore-dangle */
import Block from '../../core/Block';
import { checkFormFieldError } from '../../core/validator';
import { FieldProps } from '../../core/types';

export class Field extends Block<FieldProps> {
    public static componentName = 'Field';

    _addEvents(): void {
        const input = this._element?.querySelector('input');

        if (input) {
            input.addEventListener('input', (e) => {
                const target = e.target as HTMLInputElement;
                checkFormFieldError(target, 'form');
            });
        }

        super._addEvents();
    }

    render(): string {
        return `
            <div class="form__field">
                <label class="form__label">
                    <input 
                        class="form__input" 
                        placeholder=" " 
                        name="{{ name }}" 
                        type="{{ type }}" 
                        {{#if (eq readonly true)}} readonly {{/if}}
                        {{#if value }} value="{{ value }}" {{/if}}
                        >
                    <span>{{ text }}</span>
                    <div class="form__error"></div>
                </label>
            </div>
        `;
    }
}
