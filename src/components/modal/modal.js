export default () => {
    const modals = document.querySelectorAll('.modal');
    const buttons = document.querySelectorAll('[data-modal-id]');
    const body = document.body;

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            const modalId = button.dataset.modalId;
            const currentModal = document.querySelector(`.modal[data-modal="${modalId}"]`)

            if (currentModal) {
                currentModal.classList.add('is-visible');
                body.classList.add('overlay-no-scroll');
            }
        });
    });

    modals.forEach((modal) => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('is-visible');
                body.classList.remove('overlay-no-scroll');
            }
        });
    });
}