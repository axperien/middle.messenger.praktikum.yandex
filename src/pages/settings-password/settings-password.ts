/* eslint-disable @typescript-eslint/ban-ts-comment */
import Block from '../../core/Block';
import Hoc from '../../core/Hoc';
import { passwordType } from '../../core/types';
import { checkFormFieldError } from '../../core/validator';
import { ediPassword } from '../../services/user';
import { isError } from '../../utils/apiCheck';

export class UserEditPasswordPage extends Block {
    pageTitle = 'Изменить пароль';

    pageCls = 'user';

    public needCheckAuth = true;

    componentDidMount(props: any): void {
        this.setProps({
            onSave: (e: Event) => {
                const target = e.target as HTMLButtonElement;
                const form = target.closest('form');

                if (form) {
                    const formData = new FormData(form);
                    const data: passwordType = {
                        oldPassword: '',
                        newPassword: '',
                    };

                    const inputs = form.querySelectorAll('.user__input');

                    inputs.forEach((elem) => {
                        const input = elem as HTMLInputElement;
                        const prefix = input.className.split(' ')[0].split('__')[0];
                        checkFormFieldError(input, prefix);
                    });

                    const inputsWithError = form.querySelectorAll('.user__input--error');

                    if (inputsWithError.length > 0) {
                        return;
                    }

                    const inputNewPassword = form.querySelector('input[name="newPassword"]') as HTMLInputElement;
                    const inputNewPasswordRepeat = form.querySelector('input[name="newPassword_repeat"]') as HTMLInputElement;

                    if (inputNewPassword?.value !== inputNewPasswordRepeat?.value) {
                        alert('Пароли не совпадают!');
                        return;
                    }

                    // eslint-disable-next-line no-restricted-syntax
                    for (const [name, value] of formData) {
                        // @ts-ignore
                        data[name] = value;
                    }

                    ediPassword(data)
                        .then((r) => {
                            if (!isError(r)) {
                                window.router.go('/settings');
                            }
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
                                    type="password"
                                    name="oldPassword"
                                    placeholder="•••••••••"
                                    value=""
                                    text='Старый пароль'
                            }}}
                            {{{ 
                                UserField
                                    type="password"
                                    name="newPassword"
                                    placeholder="•••••••••••"
                                    value=""
                                    text='Новый пароль'
                            }}}
                            {{{ 
                                UserField
                                    type="password"
                                    name="newPassword_repeat"
                                    placeholder="•••••••••••"
                                    value=""
                                    text='Повторите новый пароль'
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

export default Hoc(UserEditPasswordPage);
