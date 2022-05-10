import Block from '../../core/Block';
import validateForm from '../../core/validateForm';

interface FieldProps {
    type: string,
    name: string, 
    text: string,
    errorText?: string,
    value?: string,
    onBlur?: () => void,
    onFocus?: () => void
  }

export class Field extends Block {
    public static componentName = 'Field';

    constructor(props: FieldProps) {
        super({ 
            ...props,
            events: {
                blur: (e: Event): void => {
                    console.log('blur')
                },
                focus: (e: Event): void => {
                    console.log('focus');
                    const { target } = e;
                    const { name, value } = target as HTMLInputElement;

                    const errorText = validateForm(name, value);

                    console.log(errorText);

                    if (errorText) {
                        const valid = false;
                        // this.setProps({
                        //     errorText,
                                // valid
                        // });

                        console.log(this.props.errorText);
                    }
                }
            }
        });
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
                        value="{{ value }}" 
                        >
                    <span>{{ text }}</span>
                    {{#if errorText }}
                        <div class="form__error">{{ errorText }}</div>
                    {{/if}}
                </label>
            </div>
        `;
    }
}