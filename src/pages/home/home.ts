import Block from '../../core/Block';

export class HomePage extends Block {
    pageTitle = 'Главная страница';

    pageCls = 'home';

    render(): string {
        return `
            <div class="home">
                <h2>Добро пожаловать в чат</h2>
                <nav>
                    <ul class="navigation">
                        <li class="navigation__item">
                            {{{ Button url="/sign-in" text="Войти" }}}
                        </li>
                        <li class="navigation__item">
                            {{{ Button url="/sign-up" text="Зарегистрироваться" }}}
                        </li>
                    </ul>
                </nav>
            </div>
        `;
    }
}
