export const queryStringify = (data: Record<string, any>) => {
    if (!data) {
        return;
    }

    let str = '?';

    const arrayOfData = Object.keys(data);

    if (!arrayOfData.length) {
        // eslint-disable-next-line consistent-return
        return '';
    }

    arrayOfData.forEach((key) => {
        str += `${key}=${data[key]}&`;
    });

    // eslint-disable-next-line consistent-return
    return str.substring(0, str.length - 1);
};
