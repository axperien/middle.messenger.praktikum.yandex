const template = `
    <div class="error">
        <h1 class="error__code">{{ error_code }}</h1>
        <p class="error__text">{{ error_text }}</p>
        <div class="error__link">
            <a href="/chats" class="link">Назад к чатам</a>
        </div>
    </div>
`;

export default template;