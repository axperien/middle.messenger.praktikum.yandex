const checkMinLength = (value:string, len:number):boolean => {
    return (value.length > len);
}

const checkMaxLength = (value:string, len:number):boolean => {
    return (value.length < len);
}

const validateForm = (name:string, value: string):string => {
    let errorText = '';

    switch(name) {
        case 'login':
            if (!(checkMinLength(value, 3) && checkMaxLength(value, 20))) {
                errorText = 'Минимум 3, максимум 20 символов';
            }
            break;
    }

    return errorText;
}

export default validateForm;