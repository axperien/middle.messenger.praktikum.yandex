import { getData } from '../../services/getData';
import Block from '../../core/Block';

export class RegisterPage extends Block {
    componentDidMount(): void {
        getData('register')
            .then((data) => {
                this.setProps(data);
            });
    }

    render(): string {
        return `
            {{{ Form title=title fields=fields button=button link=link }}}
        `;
    }
}
