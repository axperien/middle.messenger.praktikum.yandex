import { logout } from '../../controllers/auth';
import Block from '../../core/Block';
import Hoc from '../../core/Hoc';

const handerLogout = () => {
    logout();
};

export class UserPage extends Block {
    pageTitle = 'Профиль';

    pageCls = 'user';

    public needCheckAuth = true;

    componentDidMount(props: any): void {
        this.setProps({
            onLogout: handerLogout,
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
                    {{{ BackUrl url="/messenger" }}}
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
                                    type="email"
                                    name="email"
                                    value=store.user.email
                                    text='Почта'
                                    readonly=true
                            }}}
                            {{{ 
                                UserField
                                    type="text"
                                    name="login"
                                    value=store.user.login
                                    text='Логин'
                                    readonly=true
                            }}}
                            {{{ 
                                UserField
                                    type="text"
                                    name="first_name"
                                    value=store.user.first_name
                                    text='Имя'
                                    readonly=true
                            }}}
                            {{{ 
                                UserField
                                    type="text"
                                    name="second_name"
                                    value=store.user.second_name
                                    text='Фамилия'
                                    readonly=true
                            }}}
                            {{{ 
                                UserField
                                    type="text"
                                    name="display_name"
                                    value=store.user.display_name
                                    text='Имя в чате'
                                    readonly=true
                            }}}
                            {{{ 
                                UserField
                                    type="tel"
                                    name="phone"
                                    value=store.user.phone
                                    text='Телефон'
                                    readonly=true
                            }}}
                            <div class='user__links'>
                                <div class='user__link-wrapper'>
                                    {{{ 
                                        Link
                                            url="/settings/edit"
                                            text="Изменить данные"
                                            cls="user__link user__link--settings"
                                    }}}
                                </div>
                                <div class='user__link-wrapper'>
                                    {{{ 
                                        Link
                                            url="/settings/password"
                                            text="Изменить пароль"
                                            cls="user__link user__link--password"
                                    }}}
                                </div>
                                <div class='user__link-wrapper'>
                                    {{{ 
                                        Link
                                            text="Выйти"
                                            cls="link--red user__link user__link--logout"
                                            onClick=onLogout
                                    }}}
                                </div>
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

export default Hoc(UserPage);
