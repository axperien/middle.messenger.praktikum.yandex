const template = `
    <div class="chats">
        <aside class="chats__sidebar">
            <div class="chats__header">
                <div class="chats__profile">
                    {{> link }}
                </div>
                <div class="chats__search">

                </div>
            </div>
            {{> chats_list }}
        </aside>
        <section class="chats__container">
            <div class="chats__empty">
                Выберите чат чтобы отправить сообщение
            </div>
        </section>
    </div>
`;

export default { template };