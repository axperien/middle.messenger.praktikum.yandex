import Block from '../../core/Block';

export class Page500 extends Block {
    constructor(props) {
        super({ ...props, code: '500', text: 'Кажется что-то пошло не так... :(' });
    }

    render() {
        return `
            {{{ Error code=code text=text }}}
        `;
    }
}
