import Block from '../../core/Block';

export class LoginPage extends Block {    
    getStateFromProps() {
        this.state = {
            title: 'Вход',
            fields: [
                {
                    type: 'text', 
                    name: 'login', 
                    text: 'Логин',
                    value: '',
                    valid: true
                },
                {
                    type: 'password', 
                    name: 'password', 
                    text: 'Пароль',
                    value: '',
                    valid: true
                }
            ],
            button: {
                cls: 'form__button',
                text: 'Войти',
                type: 'submit'
            },
            link: {
                cls: '',
                text: 'Нет аккаунта?',
                url: '/register'
            },
            onSubmit: (e: Event): void => {
                e.preventDefault();

                const target = e.target as HTMLButtonElement;
                const form = target.closest('form');

                const fields = this.state.fields;
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

                    for(let [name, value] of formData) {
                        data[name] = value;
                    }

                    console.log(data);
                }
            }
        }
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
        `
    }
}