import { register } from '../../services/user';
import { User } from '../../core/types';
import Block from '../../core/Block';
import Hoc from '../../core/Hoc';

export class RegisterPage extends Block {
    pageTitle = 'Регистрация';

    pageCls = 'register';

    componentDidMount(): void {
        const pageProps = {
            title: 'Регистрация',
            fields: {
                email: {
                    type: 'email',
                    name: 'email',
                    text: 'Почта',
                    value: '',
                    valid: true,
                },
                login: {
                    type: 'text',
                    name: 'login',
                    text: 'Логин',
                    value: '',
                    valid: true,
                },
                first_name: {
                    type: 'text',
                    name: 'first_name',
                    text: 'Имя',
                    value: '',
                    valid: true,
                },
                second_name: {
                    type: 'text',
                    name: 'second_name',
                    text: 'Фамилия',
                    value: '',
                    valid: true,
                },
                phone: {
                    type: 'tel',
                    name: 'phone',
                    text: 'Телефон',
                    value: '',
                    valid: true,
                },
                password: {
                    type: 'password',
                    name: 'password',
                    text: 'Пароль',
                    value: '',
                    valid: true,
                },
                password_repeat: {
                    type: 'password',
                    name: 'password_repeat',
                    text: 'Пароль еще раз',
                    value: '',
                    valid: true,
                },
            },
            button: {
                cls: 'form__button',
                text: 'Зарегистрироваться',
                type: 'submit',
            },
            link: {
                cls: '',
                text: 'Войти',
                url: '/sign-in',
            },
            onSubmit: (data: User) => {
                register(data);
            },
        };

        this.setProps(pageProps);
    }

    render(): string {
        return `
            {{{ Form title=title fields=fields button=button link=link onSubmit=onSubmit }}}
        `;
    }
}

export default Hoc(RegisterPage);
