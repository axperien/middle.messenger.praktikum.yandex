export const queryStringify = (data: any) => {
    let str = '?';

    const arrayOfData = Object.keys(data);

    if (!arrayOfData.length) {
        return '';
    }

    arrayOfData.forEach((key) => {
        str += `${key}=${data[key]}&`;
    });

    return str.substring(0, str.length - 1);
};
