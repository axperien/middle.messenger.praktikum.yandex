import Block from '../../core/Block';

export class HomePage extends Block {
    render(): string {
        return `
            <nav>
                <ul class="navigation">
                    <li class="navigation__item">
                        <a href="/login" class="navigation__link">Страница авторизации</a>
                    </li>
                    <li class="navigation__item">
                        <a href="/register" class="navigation__link">Страница регистрации</a>
                    </li>
                    <li class="navigation__item">
                        <a href="/user" class="navigation__link">Страница профиля</a>
                    </li>
                    <li class="navigation__item">
                        <a href="/chats" class="navigation__link">Страница чатов</a>
                    </li>
                    <li class="navigation__item">
                        <a href="/404" class="navigation__link">Страница 404</a>
                    </li>
                    <li class="navigation__item">
                        <a href="/500" class="navigation__link">Страница 500</a>
                    </li>
                </ul>
            </nav>
        `;
    }
}
