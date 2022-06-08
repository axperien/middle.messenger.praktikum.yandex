export const queryStringify = (data: Record<string, any>): string => {
    if (!data) {
        return '';
    }

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
