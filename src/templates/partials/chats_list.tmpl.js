const template = `
    <div class="chats__items">
        {{#each dialogs}}
            <div class="chats__item">
                {{> 
                    avatar 
                        image=user.avatar.image
                        image_x2=user.avatar.image_x2
                }}
                <div class="chats__content">
                    <div class="chats__head">
                        <p class="chats__name">{{ user.name }}</p>
                        <span class="chats__time">{{ lastMessage.time }}</span>
                    </div>
                    
                    <p class="chats__text">
                        {{#if (eq lastMessage.from 'self')}}
                            <b>Вы:</b>
                        {{/if}}
                        {{ lastMessage.text }}
                    </p>
                </div>
            </div>
        {{else}}
            <div class="chats__empty">Пока что нет диалогов</div>
        {{/each}}
    </div>
`;

export default template;