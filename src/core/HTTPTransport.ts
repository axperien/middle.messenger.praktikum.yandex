import { queryStringify } from './helpers';
import { HTTPTransportOptions } from './types';

const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

export class HTTPTransport {
    get = (url: string, options:HTTPTransportOptions) => {
        const data = queryStringify(options.data);

        return this.request(url + data, {
            ...options,
            method: METHODS.GET,
        }, options.timeout);
    };

    put = (url:string, options:HTTPTransportOptions) => this.request(url, {
        ...options,
        method: METHODS.PUT,
    }, options.timeout);

    post = (url:string, options:HTTPTransportOptions) => this.request(url, {
        ...options,
        method: METHODS.POST,
    }, options.timeout);

    delete = (url:string, options:HTTPTransportOptions) => this.request(url, {
        ...options,
        method: METHODS.DELETE,
    }, options.timeout);

    // eslint-disable-next-line class-methods-use-this
    request = (url:string, options:HTTPTransportOptions, timeout = 5000) => {
        const { method, data, headers } = options;

        console.log(url, method, options);

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);

            if (headers) {
                Object.keys(headers).forEach((key) => {
                    xhr.setRequestHeader(key, headers[key]);
                });
            }

            xhr.onload = function () {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if (method === METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    };
}
