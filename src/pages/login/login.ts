import { getData } from '../../services/getData';
import Block from '../../core/Block';

export class LoginPage extends Block {
    componentDidMount(): void {
        getData('login')
            .then((data) => {
                this.setProps(data);
            });
    }

    render():string {
        return `
            {{{ Form title=title fields=fields button=button link=link }}}
        `;
    }
}
