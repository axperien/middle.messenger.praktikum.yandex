/* eslint-disable no-underscore-dangle */
import Block from '../../core/Block';
import { checkUserFieldError } from '../../core/validator';

interface UserFieldProps {
    type: string,
    name: string,
    text: string,
    placeholder: string,
    errorText?: string,
    value?: string,
    readonly?: boolean,
  }

export class UserField extends Block {
    public static componentName = 'UserField';

    constructor(props: UserFieldProps) {
        super({
            ...props,
            events: {
                blur: (e: Event): void => {
                    console.log('blur');
                },
                focus: (e: Event): void => {
                    console.log('focus');
                },
            },
        });
    }

    _addEvents(): void {
        const inputs = this._element.querySelectorAll('input');

        inputs.forEach((input) => {
            input.addEventListener('input', (e) => {
                const target = e.target as HTMLInputElement;
                checkUserFieldError(target);
            });
        });

        super._addEvents();
    }

    render(): string {
        return `
            <div class="user__field">
                <label class="user__label">
                    <span>{{ text }}</span>
                    <input 
                        class="user__input" 
                        name="{{ name }}"
                        type="{{ type }}"
                        {{#if (eq readonly true)}} readonly {{/if}}
                        {{#if value }} value="{{ value }}" {{/if}}
                        {{#if placeholder }} placeholder="{{ placeholder }}" {{/if}}
                        {{#if (eq type 'password') }} autocomplete="new-password" {{/if}}
                        >
                    <div class="user__error"></div>
                </label>
            </div>
        `;
    }
}
