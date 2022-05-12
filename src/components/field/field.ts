/* eslint-disable no-underscore-dangle */
import Block from '../../core/Block';
import { checkFormFieldError } from '../../core/validator';

interface FieldProps {
    type: string,
    name: string,
    text: string,
    errorText?: string,
    value?: string,
}

export class Field extends Block {
    public static componentName = 'Field';

    constructor(props: FieldProps) {
        super(props);
    }

    _addEvents(): void {
        const inputs = this._element.querySelectorAll('input');

        inputs.forEach((input) => {
            input.addEventListener('input', (e) => {
                const target = e.target as HTMLInputElement;
                checkFormFieldError(target);
            });
        });

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
