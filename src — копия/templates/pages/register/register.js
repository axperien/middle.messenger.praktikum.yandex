export default () => {
    const form = document.querySelector('.form');
    const formButton = document.querySelector('.form__button');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    // редирект пока что без отправки формы
    formButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.location = 'chats';
    });
}