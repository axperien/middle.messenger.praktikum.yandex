import Block from '../../core/Block';

export class RegisterPage extends Block {
    getStateFromProps() {
        this.state = {
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
                url: '/login',
            },
            onSubmit: (e: Event): void => {
                e.preventDefault();

                const target = e.target as HTMLButtonElement;
                const form = target.closest('form');

                const { fields } = this.state;

                const fieldsInvalid = [];

                Object.entries(fields).forEach(([name, params]: [string, any]) => {
                    if (!params.valid) {
                        fieldsInvalid.push(name);
                    }
                });

                if (fieldsInvalid.length) {
                    console.log('Поля формы не валидны');
                    return;
                }

                if (form) {
                    const formData = new FormData(form);
                    const data = {};

                    // eslint-disable-next-line no-restricted-syntax
                    for (const [name, value] of formData) {
                        data[name] = value;
                    }

                    console.log(data);
                }
            },
        };
    }

    render() {
        return `
            <form class="form" autocomplete="off">
                <h2 class="form__title">{{ title }}</h2>
                {{#each fields}}
                    {{{ 
                        Field
                            type=type
                            name=name
                            text=text
                            value=value
                            ref=name
                    }}}
                {{/each}}
                <div class="form__buttons">
                    {{{ 
                        Button
                            cls=button.cls
                            text=button.text
                            type=button.text
                            onClick=onSubmit
                    }}}
                </div>    
                <div class="form__links">
                    {{{ 
                        Link 
                            text=link.text
                            cls=link.cls
                            url=link.url
                    }}}
                </div>
            </form>
        `;
    }
}
