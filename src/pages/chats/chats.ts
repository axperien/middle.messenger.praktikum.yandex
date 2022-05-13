/* eslint-disable no-underscore-dangle */
import { getData } from '../../services/getData';
import Block from '../../core/Block';

export class ChatsPage extends Block {
    componentDidMount(): void {
        getData('chats')
            .then((data) => {
                this.setProps(data);
            });
    }

    _addEvents(): void {
        const chatItems = this._element.querySelectorAll('.chats__item');

        chatItems.forEach((item) => {
            item.addEventListener('click', () => {
                const propsDialog = {
                    dialog: {
                        avatar: {
                            image: '../images/avatar8.png',
                            image_x2: '../images/avatar8@2x.png',
                        },
                        name: 'Володька Бурый',
                        messages: [
                            {
                                text: 'Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности способствует подготовки и реализации систем массового участия. Не следует, однако забывать, что реализация намеченных плановых заданий требуют от нас анализа модели развития. Равным образом постоянный количественный рост и сфера нашей активности способствует подготовки и реализации форм развития.',
                                time: '11:56',
                                from: 'user',
                            },
                            {
                                text: 'Ну ты и загоняешь',
                                time: '12:00',
                                from: 'self',
                            },
                            {
                                text: 'Да, был сорван доклад председателя совхоза',
                                time: '13:11',
                                from: 'user',
                            },
                            {
                                text: 'Случайный текст похож на гитарный перебор',
                                time: '13:12',
                                from: 'self',
                            },
                            {
                                text: 'Задача организации, в особенности же постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки новых предложений.',
                                time: '13:15',
                                from: 'user',
                            },
                            {
                                image: 'https://picsum.photos/600',
                                time: '13:16',
                                from: 'user',
                            },
                            {
                                text: 'Сложно сказать, почему семантический разбор внешних противодействий станет частью наших традиций',
                                time: '13:22',
                                from: 'self',
                            },
                            {
                                image: 'https://picsum.photos/500/300',
                                time: '13:23',
                                from: 'self',
                            },
                            {
                                text: 'С другой стороны рамки и место обучения кадров способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям.',
                                time: '13:48',
                                from: 'user',
                            },
                            {
                                text: 'Кстати, базовые сценарии поведения пользователей, вне зависимости от их уровня, должны быть разоблачены! Разнообразный и богатый опыт говорит нам, что высококачественный прототип будущего проекта не оставляет шанса для поэтапного и последовательного развития общества. ',
                                time: '14:01',
                                from: 'self',
                            },
                        ],
                    },
                };

                this.setProps(propsDialog);
            });
        });
    }

    render(): string {
        return `
            <div class="chats">
                <aside class="chats__sidebar">
                    <div class="chats__header">
                        <div class="chats__profile">
                            {{{ 
                                Link
                                text=link.text
                                cls=link.cls
                                url=link.url 
                            }}}
                        </div>
                        <div class="chats__search">

                        </div>
                    </div>
                    {{{ ChatList chats=chats onClick=onClickChatItem }}}
                </aside>
                <section class="chats__container dialog">
                    {{#if dialog }}
                        {{{ ChatInfo avatar=dialog.avatar name=dialog.name }}}
                        <div class="dialog__messages">
                            {{#each dialog.messages }}
                                {{{ 
                                    ChatMessage 
                                        text=text
                                        from=from
                                        image=image
                                        time=time 
                                }}}
                            {{else}}
                                <div class="chats__empty">Пока что тут нет сообщений</div>
                            {{/each}}
                        </div>
                        {{{ ChatForm }}}
                    {{else}}
                        <div class="chats__empty">Выберите чат чтобы отправить сообщение</div>
                    {{/if}}
                </section>
            </div>
        `;
    }
}
