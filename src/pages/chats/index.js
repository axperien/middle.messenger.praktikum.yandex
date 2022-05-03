import Handlebars from 'handlebars';

import template from 'bundle-text:./chats.hbs';

const data = {
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
};

const page = Handlebars.compile(template)(data);

export default page;