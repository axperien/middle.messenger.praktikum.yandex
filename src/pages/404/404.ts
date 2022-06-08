import Block from '../../core/Block';

export class Page404 extends Block {
    pageTitle = 'Ошибка 404';

    pageCls = 'error_404';

    constructor(props: any) {
        super({ ...props, code: '404', text: 'Кажется такой странички нет... ;(' });
    }

    render(): string {
        return `
            {{{ Error code=code text=text }}}
        `;
    }
}
