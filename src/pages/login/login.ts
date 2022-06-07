import { Router } from '../../core/Router';
import { loginType } from '../../core/types';
import { login } from '../../controllers/auth';
import Block from '../../core/Block';
import Hoc from '../../core/Hoc';

const globalRouter = new Router();

export class LoginPage extends Block {
    pageTitle = 'Авторизация';

    pageCls = 'login';

    public needCheckAuth = true;

    constructor() {
        super();

        const pageProps = {
            title: 'Вход',
            fields: [{
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
                url: '/sign-up',
            },
            onSubmit: (data: loginType) => {
                login(data);
            },
        };

        this.setProps(pageProps);
    }

    componentDidUpdate(): boolean {
        const { store } = this.state;

        if (store && store.user !== null && store.currentChat == null) {
            globalRouter.go('/messenger');
            return false;
        }

        return true;
    }

    render(): string {
        return `
            {{{ Form title=title fields=fields button=button link=link onSubmit=onSubmit }}}
        `;
    }
}

export default Hoc(LoginPage);
