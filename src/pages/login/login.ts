import Block from '../../core/Block';

export class LoginPage extends Block {
    protected getStateFromProps(props: any): void {
        this.state = {
            title: 'Вход',
            fields: [
                {
                    type: 'text',
                    name: 'login',
                    text: 'Логин',
                },
                {
                    type: 'password',
                    name: 'password',
                    text: 'Пароль',
                },
            ],
            button: {
                cls: 'form__button',
                text: 'Войти',
                type: 'submit',
            },
            link: {
                cls: '',
                text: 'Нет аккаунта?',
                url: '/register',
            },
        };
    }

    render() {
        return `
            {{{ Form title=title fields=fields button=button link=link }}}
        `;
    }
}
