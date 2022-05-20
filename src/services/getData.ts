import { HTTPTransport, Methods } from '../core/HTTPTransport';

export const getData = async (page: string) => {
    const method = Methods.GET;
    const url = './data.json';

    const request = HTTPTransport.request(url, {
        method,
        data: page,
        timeout: 1000,
        headers: {},
    });

    const result = await request
        .then((d: any) => {
            const object = JSON.parse(d.response);
            return object[page];
        })
        .catch((error) => {
            console.log(error);
            return {};
        });

    return result;
};
