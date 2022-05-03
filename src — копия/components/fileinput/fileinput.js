export default () => {
    const fileInputs = document.querySelectorAll('.file__input');

    if (!fileInputs.length) return;

    fileInputs.forEach((input) => {
        const parent = input.closest('.file');
        const label = input.nextElementSibling;
        const labelText = label.textContent;

        input.addEventListener('change', (e) => {
            let fileName = '';
            if (input.files) {
                fileName = e.target.value.split('\\').pop();
            }

            if (fileName) {
                label.textContent = fileName;
                parent.classList.add('is-selected');
            } else {
                label.textContent = labelText;
                parent.classList.remove('is-selected');
            }
        });
    });
}