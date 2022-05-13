/* eslint-disable no-underscore-dangle */
import { getData } from '../../services/getData';
import Block from '../../core/Block';

export class UserPage extends Block {
    changePropsFromRequest(name: string) {
        getData(name)
            .then((data) => {
                this.setProps(data);
            });
    }

    componentDidMount(): void {
        this.changePropsFromRequest('user_default');
    }

    _addEvents(): void {
        const linkUserSettings = this._element.querySelector('.user__link--settings');
        const linkUserPassword = this._element.querySelector('.user__link--password');
        const buttonSave = this._element.querySelector('.button--user_save');

        if (linkUserSettings) {
            linkUserSettings.addEventListener('click', (e: Event) => {
                e.preventDefault();
                this.changePropsFromRequest('user_settings');
            });
        }

        if (linkUserPassword) {
            linkUserPassword.addEventListener('click', (e: Event) => {
                e.preventDefault();
                this.changePropsFromRequest('user_password');
            });
        }

        if (buttonSave) {
            buttonSave.addEventListener('click', (e) => {
                const target = e.target as HTMLButtonElement;
                const form = target.closest('form');

                if (form) {
                    const formData = new FormData(form);
                    const data = {};

                    // eslint-disable-next-line no-restricted-syntax
                    for (const [name, value] of formData) {
                        data[name] = value;
                    }

                    console.log(data);
                }

                this.changePropsFromRequest('user_default');
            });
        }
    }

    render(): string {
        return `
            <div class="user">
                {{{ BackUrl url=back.url }}}
                <div class="user__container">
                    {{{ 
                        Avatar 
                            image=avatar.image
                            image_x2=avatar.image_x2
                            overlay_text=avatar.overlay_text 
                    }}}
                    {{#if name }}
                        <h3 class="user__name">{{ name }}</h3>
                    {{/if}}
                    <form action="" class="user__form">
                        {{#each fields}}
                            {{{ 
                                UserField
                                    type=type
                                    text=text
                                    name=name
                                    placeholder=placeholder
                                    value=value
                                    readonly=readonly
                            }}}
                        {{/each}}
                        {{#if buttons }}
                            <div class="user__links">
                                {{#each buttons}}
                                    {{{ 
                                        Button 
                                            cls=cls
                                            text=text
                                    }}}
                                {{/each}}
                            </div>
                        {{/if}}
                        {{#if links }}
                            <div class="user__links">
                                {{#each links}}
                                    <div class="user__link-wrapper">
                                        {{{ 
                                            Link
                                                url=url
                                                text=text
                                                cls=cls
                                        }}}
                                    </div>
                                {{/each}}
                            </div>
                        {{/if}}
                    </form>
                </div>
            </div>
        `;
    }
}
