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
                        <span>Старый пароль</span>
                        <input class="user__input" placeholder="•••••••••" name="oldPassword" type="password" autocomplete="new-password" required minlength="6">
                    </label>
                </div>
                <div class="user__field">
                    <label class="user__label">
                        <span>Новый пароль</span>
                        <input class="user__input" placeholder="•••••••••" name="newPassword" type="password" autocomplete="new-password" required minlength="6">
                    </label>
                </div>
                <div class="user__field">
                    <label class="user__label">
                        <span>Повторите новый пароль</span>
                        <input class="user__input" placeholder="•••••••••" name="newPassword_repeat" type="password" autocomplete="new-password" required minlength="6">
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