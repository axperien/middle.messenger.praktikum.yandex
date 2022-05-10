import Block from '../../core/Block';

export class ChatsPage extends Block {    
    getStateFromProps() {
        this.state = {
            link: {
                text: 'Профиль ᐳ',
                url: '/user',
                cls: 'link_profile'
            },
            chats: [
                {
                    id: 0,
                    user: {
                        name: 'Майкл Патриот',
                        avatar: {
                            image: '../images/avatar2.png',
                            image_x2: '../images/avatar2@2x.png'
                        }
                    },
                    lastMessage: {
                        time: '10:20',
                        text: 'Завтра приду',
                        from: 'self'
                    }
                },
                {
                    id: 1,
                    user: {
                        name: 'Никита Ворожея',
                        avatar: {
                            image: '../images/avatar3.png',
                            image_x2: '../images/avatar3@2x.png'
                        }
                    },
                    lastMessage: {
                        time: '7:12',
                        text: 'Я уже поел',
                        from: 'user'
                    }
                },
                {
                    id: 2,
                    user: {
                        name: 'Володимер ОченьДлиннаяФамилия',
                        avatar: {
                            image: '../images/avatar4.png',
                            image_x2: '../images/avatar4@2x.png'
                        }
                    },
                    lastMessage: {
                        time: 'Пт',
                        text: 'Классно посидели вчера',
                        from: 'user'
                    }
                },
                {
                    id: 3,
                    user: {
                        name: 'Алексей Александрович',
                        avatar: {
                            image: '../images/avatar5.png',
                            image_x2: '../images/avatar5@2x.png'
                        }
                    },
                    lastMessage: {
                        time: 'Ср',
                        text: 'Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации.',
                        from: 'self'
                    }
                },
                {
                    id: 4,
                    user: {
                        name: 'Ангелиночка ❤️',
                        avatar: {
                            image: '../images/avatar6.png',
                            image_x2: '../images/avatar6@2x.png'
                        }
                    },
                    lastMessage: {
                        time: 'Вт',
                        text: 'Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности способствует подготовки и реализации существенных финансовых и административных условий.',
                        from: 'user'
                    }
                },
                {
                    id: 5,
                    user: {
                        name: 'Ирина Анатольевна',
                        avatar: {
                            image: '../images/avatar7.png',
                            image_x2: '../images/avatar7@2x.png'
                        }
                    },
                    lastMessage: {
                        time: '1 февраля 2022',
                        text: '😂 Таким образом дальнейшее развитие различных форм деятельности способствует подготовки и реализации форм развития.',
                        from: 'user'
                    }
                },
                {
                    id: 6,
                    user: {
                        name: 'Серега Пятихатка',
                        avatar: {
                            image: '../images/avatar8.png',
                            image_x2: '../images/avatar8@2x.png'
                        }
                    },
                    lastMessage: {
                        time: '8 января 2021',
                        text: 'Товарищи! начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. ',
                        from: 'user'
                    }
                },
                {
                    id: 0,
                    user: {
                        name: 'Майкл Патриот',
                        avatar: {
                            image: '../images/avatar2.png',
                            image_x2: '../images/avatar2@2x.png'
                        }
                    },
                    lastMessage: {
                        time: '10:20',
                        text: 'Завтра приду',
                        from: 'self'
                    }
                },
                {
                    id: 1,
                    user: {
                        name: 'Никита Ворожея',
                        avatar: {
                            image: '../images/avatar3.png',
                            image_x2: '../images/avatar3@2x.png'
                        }
                    },
                    lastMessage: {
                        time: '7:12',
                        text: 'Я уже поел',
                        from: 'user'
                    }
                },
                {
                    id: 2,
                    user: {
                        name: 'Володимер ОченьДлиннаяФамилия',
                        avatar: {
                            image: '../images/avatar4.png',
                            image_x2: '../images/avatar4@2x.png'
                        }
                    },
                    lastMessage: {
                        time: 'Пт',
                        text: 'Классно посидели вчера',
                        from: 'user'
                    }
                },
                {
                    id: 3,
                    user: {
                        name: 'Алексей Александрович',
                        avatar: {
                            image: '../images/avatar5.png',
                            image_x2: '../images/avatar5@2x.png'
                        }
                    },
                    lastMessage: {
                        time: 'Ср',
                        text: 'Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации.',
                        from: 'self'
                    }
                },
                {
                    id: 4,
                    user: {
                        name: 'Ангелиночка ❤️',
                        avatar: {
                            image: '../images/avatar6.png',
                            image_x2: '../images/avatar6@2x.png'
                        }
                    },
                    lastMessage: {
                        time: 'Вт',
                        text: 'Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности способствует подготовки и реализации существенных финансовых и административных условий.',
                        from: 'user'
                    }
                },
                {
                    id: 5,
                    user: {
                        name: 'Ирина Анатольевна',
                        avatar: {
                            image: '../images/avatar7.png',
                            image_x2: '../images/avatar7@2x.png'
                        }
                    },
                    lastMessage: {
                        time: '1 февраля 2022',
                        text: '😂 Таким образом дальнейшее развитие различных форм деятельности способствует подготовки и реализации форм развития.',
                        from: 'user'
                    }
                },
                {
                    id: 6,
                    user: {
                        name: 'Серега Пятихатка',
                        avatar: {
                            image: '../images/avatar8.png',
                            image_x2: '../images/avatar8@2x.png'
                        }
                    },
                    lastMessage: {
                        time: '8 января 2021',
                        text: 'Товарищи! начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. ',
                        from: 'user'
                    }
                }
            ],
            onClickChatItem: (e: Event) => {
                const target = e.target as HTMLElement;
                const chatItem = target.closest('.chats__item');
                
                if (chatItem) {
                    // window.location.href = '/chat';
                    const newState = {
                        dialog: {
                            avatar: {
                                image: '../images/avatar8.png',
                                image_x2: '../images/avatar8@2x.png'
                            },
                            name: 'Володька Бурый',
                            messages: [
                                {
                                    text: 'Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности способствует подготовки и реализации систем массового участия. Не следует, однако забывать, что реализация намеченных плановых заданий требуют от нас анализа модели развития. Равным образом постоянный количественный рост и сфера нашей активности способствует подготовки и реализации форм развития.',
                                    time: '11:56',
                                    from: 'user'
                                },
                                {
                                    text: 'Ну ты и загоняешь',
                                    time: '12:00',
                                    from: 'self'
                                },
                                {
                                    text: 'Да, был сорван доклад председателя совхоза',
                                    time: '13:11',
                                    from: 'user'
                                },
                                {
                                    text: 'Случайный текст похож на гитарный перебор',
                                    time: '13:12',
                                    from: 'self'
                                },
                                {
                                    text: 'Задача организации, в особенности же постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки новых предложений.',
                                    time: '13:15',
                                    from: 'user'
                                },
                                {
                                    image: 'https://picsum.photos/600',
                                    time: '13:16',
                                    from: 'user'
                                },
                                {
                                    text: 'Сложно сказать, почему семантический разбор внешних противодействий станет частью наших традиций',
                                    time: '13:22',
                                    from: 'self'
                                },
                                {
                                    image: 'https://picsum.photos/500/300',
                                    time: '13:23',
                                    from: 'self'
                                },
                                {
                                    text: 'С другой стороны рамки и место обучения кадров способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям.',
                                    time: '13:48',
                                    from: 'user'
                                },
                                {
                                    text: 'Кстати, базовые сценарии поведения пользователей, вне зависимости от их уровня, должны быть разоблачены! Разнообразный и богатый опыт говорит нам, что высококачественный прототип будущего проекта не оставляет шанса для поэтапного и последовательного развития общества. ',
                                    time: '14:01',
                                    from: 'self'
                                },
                            ]
                        },
                    }

                    this.setState(newState);
                }
            }            
        }
    }
    render() {
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
        `
    }
}