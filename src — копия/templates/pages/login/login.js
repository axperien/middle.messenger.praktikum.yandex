export default () => {
    const form = document.querySelector('.form');
    const formButton = document.querySelector('.form__button');

    if (form !== null) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
        });
    }    

    // редирект пока что без отправки формы
    if (formButton !== null) {
        formButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.location = 'chats';
        });
    }    
}