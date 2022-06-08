import Block from '../../core/Block';
import { checkFormFieldError } from '../../core/validator';
import { UserFieldProps } from '../../core/types';

export class UserField extends Block<UserFieldProps> {
    public static componentName = 'UserField';

    addEvents(): void {
        const inputs = this._element?.querySelectorAll('input');

        if (inputs) {
            inputs.forEach((input) => {
                input.addEventListener('input', (e) => {
                    const target = e.target as HTMLInputElement;
                    checkFormFieldError(target, 'user');
                });
            });
        }
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
