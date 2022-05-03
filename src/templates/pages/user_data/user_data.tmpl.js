import modal from "../../../components/modal";

const modalSettings = {
    body: `
        <form class="modal__form">
            <h3 class="modal__title">Загрузите файл</h3>
            <div class="file">
                <input type="file" name="avatar" id="avatar" class="file__input" required />
                <label for="avatar" class="file__label">Выбрать файл на компьютере</label>
            </div>
            <button class="button">Поменять</button>
        </form>
    `,
    id: 'change_avatar'
}

const modalRender = modal.render(modalSettings);
const actions = modal.handlers;

const template = `
    <div class="user">
        {{> back backUrl="/chats" }} 

        <div class="user__container">
            {{> 
                avatar
                    image="./images/avatar1.png"
                    image_x2="./images/avatar1@2x.png"
                    overlay_text="Поменять аватар"
            }}
            <h3 class="user__name">Иван</h3>
            <form action="" class="user__form">
                <div class="user__field">
                    <label class="user__label">
                        <span>Почта</span>
                        <input class="user__input" value="pochta@yandex.ru" name="email" type="email" autocomplete="new-email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
                    </label>
                </div>
                <div class="user__field">
                    <label class="user__label">
                        <span>Логин</span>
                        <input class="user__input" value="ivanivanov" name="login" type="text">
                    </label>
                </div>
                <div class="user__field">
                    <label class="user__label">
                        <span>Имя</span>
                        <input class="user__input" value="Иван" name="first_name" type="text">
                    </label>
                </div>
                <div class="user__field">
                    <label class="user__label">
                        <span>Фамилия</span>
                        <input class="user__input" value="Иванов" name="second_name" type="text">
                    </label>
                </div>
                <div class="user__field">
                    <label class="user__label">
                        <span>Имя в чате</span>
                        <input class="user__input" value="Иван" name="display_name" type="text">
                    </label>
                </div>
                <div class="user__field">
                    <label class="user__label">
                        <span>Телефон</span>
                        <input class="user__input" value="+7 (900) 222-33-44" name="phone" type="tel">
                    </label>
                </div>

                <div class="user__links">
                    <button class="button">Сохранить</button>
                </div>
            </form>
        </div>
    </div>

    ${modalRender}
`;

export default { actions, template };