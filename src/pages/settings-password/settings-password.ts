import { Router } from '../../core/Router';
import Block from '../../core/Block';
import Hoc from '../../core/Hoc';
import { Indexed } from '../../core/types';
import { checkFormFieldError } from '../../core/validator';
import { ediPassword } from '../../controllers/user';
import { isError } from '../../utils/apiCheck';

const globalRouter = new Router();

export class UserEditPasswordPage extends Block {
    pageTitle = 'Изменить пароль';

    pageCls = 'user';

    public needCheckAuth = true;

    componentDidMount(): void {
        this.setProps({
            onSave: (e: Event) => {
                const target = e.target as HTMLButtonElement;
                const form = target.closest('form');

                if (form) {
                    const formData = new FormData(form);
                    const data: Indexed = {
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

                    [...formData.entries()].forEach(([name, value]) => {
                        data[name] = value;
                    });

                    ediPassword(data)
                        .then((r) => {
                            if (!isError(r)) {
                                globalRouter.go('/settings');
                            }
                        });
                }
            },
            onAvatarClick: (e: Event) => {
                const target = e.target as HTMLElement;

                if (target) {
                    const modalId = target.dataset.modalId;

                    if (modalId) {
                        this.setProps({
                            modal: {
                                isOpen: true,
                                modalId,
                            },
                        });
                    }
                }
            },
            isAvatarChanged: () => {
                this.setProps({
                    modal: {
                        isOpen: false,
                        modalId: null,
                    },
                });
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
                                modalId="changeAvatar"
                                onClick=onAvatarClick
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
                    {{{ Modal id="changeAvatar" type="user" modal=modal callback=isAvatarChanged }}}
                </div>
            {{else}}
                {{{ Loader }}}
            {{/if}}   
        `;
    }
}

export default Hoc(UserEditPasswordPage);
