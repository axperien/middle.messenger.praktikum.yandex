import Block from '../../core/Block';
import './form.scss';

interface FormProps {
    title: string,
    fields?: [],
    button?: {
        cls: string,
        text: string
    },
    link?: {
        url: string,
        cls: string,
        text: string
    },
    onSubmit: () => void
}

export class Form extends Block {
    public static componentName = 'Form';

    constructor({ title, fields, button, link, onSubmit }: FormProps) {
        super({ title, fields, button, link, events: { onSubmit: onSubmit } });
    }
    render(): string {
        const { title, fields, button, link } = this.props;
        // console.log(this.props);
        return `
            <form class="form" autocomplete="off">
                <h2 class="form__title">${title}</h2>
                {{#each fields}}
                    {{{ Field }}}
                {{/each}}
                <div class="form__buttons">
                    {{{ Button cls="${button.cls}" text="${button.text}" }}}
                </div>    
                <div class="form__links">
                    {{{ link }}}
                </div>
            </form>
        `;
    }
}