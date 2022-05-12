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

const checkFormFieldError = (field: HTMLInputElement) => {
    const { name, value } = field;
    const errorText = validateForm(name, value);
    const label = field.closest('.form__label');
    const errorBox = label.querySelector('.form__error');

    if (errorBox) {
        if (errorText) {
            errorBox.textContent = errorText;
            field.classList.add('form__input--error');
        } else {
            errorBox.textContent = '';
            field.classList.remove('form__input--error');
        }
    }
};

const checkUserFieldError = (field: HTMLInputElement) => {
    const { name, value } = field;
    const errorText = validateForm(name, value);
    const label = field.closest('.user__label');
    const errorBox = label.querySelector('.user__error');

    if (errorBox) {
        if (errorText) {
            errorBox.textContent = errorText;
            field.classList.add('user__input--error');
        } else {
            errorBox.textContent = '';
            field.classList.remove('user__input--error');
        }
    }
};

export { validateForm, checkFormFieldError, checkUserFieldError };
