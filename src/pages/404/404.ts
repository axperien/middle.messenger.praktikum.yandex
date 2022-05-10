import Block from '../../core/Block';

export class Page404 extends Block {
    constructor(props) {
        super({ ...props, code: '404', text: 'Кажется такой странички нет... ;(' });
    }

    render() {
        return `
            {{{ Error code=code text=text }}}
        `;
    }
}
