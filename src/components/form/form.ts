/* eslint-disable no-underscore-dangle */
import Block from '../../core/Block';
import './form.scss';
import { checkFormFieldError } from '../../core/validator';
import { FormProps } from '../../core/types';

export class Form extends Block<FormProps> {
    public static componentName = 'Form';

    constructor({
        title, fields, button, link, onSubmit,
    }: FormProps) {
        super({
            title, fields, button, link, onSubmit, events: { onSubmit },
        });
    }

    _addEvents(): void {
        const form = this._element as HTMLFormElement;

        if (form) {
            form.addEventListener('submit', (e: Event) => {
                e.preventDefault();

                const inputs = form.querySelectorAll('.form__input');

                inputs.forEach((elem) => {
                    const input = elem as HTMLInputElement;
                    checkFormFieldError(input);
                });

                const inputsWithError = form.querySelectorAll('.form__input--error');

                if (inputsWithError.length > 0) {
                    console.log('Поля формы не валидны');
                    return;
                }

                const formData = new FormData(form);
                const data : { [key: string]: any } = {};

                // eslint-disable-next-line no-restricted-syntax
                for (const [name, value] of formData) {
                    data[name] = value;
                }

                console.log(data);
            });
        }

        // super._addEvents();
    }

    render(): string {
        return `
            <form action="" class="form" autocomplete="off">
                <h2 class="form__title">{{ title }}</h2>
                {{#each fields}}
                    {{{ 
                        Field
                            type=type
                            name=name
                            text=text
                            value=value
                    }}}
                {{/each}}
                <div class="form__buttons">
                    {{{ 
                        Button
                            cls=button.cls
                            text=button.text
                            type=button.text
                    }}}
                </div>    
                <div class="form__links">
                    {{{ 
                        Link 
                            text=link.text
                            cls=link.cls
                            url=link.url
                    }}}
                </div>
            </form>
        `;
    }
}
