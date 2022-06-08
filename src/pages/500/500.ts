import Block from '../../core/Block';

export class Page500 extends Block {
    pageTitle = 'Ошибка 500';

    pageCls = 'error_500';

    constructor(props: any) {
        super({ ...props, code: '500', text: 'Кажется что-то пошло не так... :(' });
    }

    render(): string {
        return `
            {{{ Error code=code text=text }}}
        `;
    }
}
