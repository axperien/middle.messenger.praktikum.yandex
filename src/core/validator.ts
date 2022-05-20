const checkMinLength = (value:string, len:number):boolean => (value.length >= len);

const checkMaxLength = (value:string, len:number):boolean => (value.length <= len);

const validateForm = (name:string, value: string):string => {
    let errorText = '';

    if (!value) {
        errorText = 'Поле не должно быть пустым';
        return errorText;
    }

    switch (name) {
    case 'login':
        if (!(checkMinLength(value, 3) && checkMaxLength(value, 20))) {
            errorText = 'Минимум 3, максимум 20 символов';
        } else if (!/^[a-zA-Z][a-zA-Z0-9-_]*$/.test(value)) {
            errorText = 'Неверный формат';
        }
        break;
    case 'password':
        if (!(checkMinLength(value, 6) && checkMaxLength(value, 40))) {
            errorText = 'Минимум 6, максимум 40 символов';
        } else if (!/^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.])(?=.*[A-Z])(?=.*[a-z]).*$/.test(value)) {
            errorText = 'Неверный формат';
        }
        break;
    case 'email':
        if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/.test(value)) {
            errorText = 'Неверный формат почты';
        }
        break;
    case 'second_name':
    case 'first_name':
        if (!/^[A-ZА-Я][a-zA-Zа-яА-Я-]*$/.test(value)) {
            errorText = 'Неверный формат';
        }
        break;
    case 'phone':
        if (!(checkMinLength(value, 10) && checkMaxLength(value, 15))) {
            errorText = 'Минимум 10, максимум 15 символов';
        } else if (!/^((8|\+7)[/\- ]?)?(\(?\d{3}\)?[/\- ]?)?[\d\- ]*$/.test(value)) {
            errorText = 'Неверный формат';
        }
        break;

    default:
        break;
    }

    return errorText;
};

const checkFormFieldError = (field: HTMLInputElement, prefix: string) => {
    const { name, value } = field;
    const errorText = validateForm(name, value);
    const label = field.closest(`.${prefix}__label`);
    const errorBox = (label) ? label.querySelector(`.${prefix}__error`) : null;

    if (errorBox) {
        if (errorText) {
            errorBox.textContent = errorText;
            field.classList.add(`${prefix}__input--error`);
        } else {
            errorBox.textContent = '';
            field.classList.remove(`${prefix}__input--error`);
        }
    }
};

export { validateForm, checkFormFieldError };
