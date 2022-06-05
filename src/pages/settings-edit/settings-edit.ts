/* eslint-disable @typescript-eslint/ban-ts-comment */
import { userType } from '../../core/types';
import { editUser } from '../../services/user';
import Block from '../../core/Block';
import Hoc from '../../core/Hoc';

export class UserEditPage extends Block {
    pageTitle = 'Изменить данные';

    pageCls = 'user';

    public needCheckAuth = true;

    componentDidMount(props: any): void {
        this.setProps({
            onSave: (e: Event) => {
                const target = e.target as HTMLButtonElement;
                const form = target.closest('form');

                if (form) {
                    const formData = new FormData(form);
                    const data: userType = {};

                    // eslint-disable-next-line no-restricted-syntax
                    for (const [name, value] of formData) {
                        // @ts-ignore
                        data[name] = value;
                    }

                    editUser(data)
                        .then(() => {
                            window.router.go('/settings');
                        });
                }
            },
        });
    }

    render(): string {
        return `
            {{#if store.isLoadApp}}
                <div class='user'>
                    {{{ BackUrl url=back.url }}}
                    <div class='user__container'>
                        {{{ 
                            Avatar 
                                image=store.user.avatar
                                overlayText="Поменять аватар"
                        }}}
                        <h3 class='user__name'>{{ store.user.first_name }}</h3>
                        <form action='' class='user__form'>
                            {{{ 
                                UserField
                                    type="email"
                                    name="email"
                                    value=store.user.email
                                    text='Почта'
                            }}}
                            {{{ 
                                UserField
                                    type="text"
                                    name="login"
                                    value=store.user.login
                                    text='Логин'
                            }}}
                            {{{ 
                                UserField
                                    type="text"
                                    name="first_name"
                                    value=store.user.first_name
                                    text='Имя'
                            }}}
                            {{{ 
                                UserField
                                    type="text"
                                    name="second_name"
                                    value=store.user.second_name
                                    text='Фамилия'
                            }}}
                            {{{ 
                                UserField
                                    type="text"
                                    name="display_name"
                                    value=store.user.display_name
                                    text='Имя в чате'
                            }}}
                            {{{ 
                                UserField
                                    type="tel"
                                    name="phone"
                                    value=store.user.phone
                                    text='Телефон'
                            }}}
                            <div class='user__links'>
                                {{{ 
                                    Button 
                                        cls="button--user_save"
                                        text="Сохранить"
                                        onClick=onSave
                                }}}
                            </div>
                        </form>
                    </div>
                </div>
            {{else}}
                {{{ Loader }}}
            {{/if}}   
        `;
    }
}

export default Hoc(UserEditPage);
