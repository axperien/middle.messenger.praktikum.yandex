import { queryStringify } from './helpers';
import { HTTPTransportOptions } from './types';

export enum Methods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

export class HTTPTransport {
    endpoint: string;

    constructor(endpoint = 'https://ya-praktikum.tech/api/v2') {
        this.endpoint = endpoint;
    }

    public get = (url: string, options:HTTPTransportOptions) => {
        let query = '';
        const data = options.data ? options.data : '';

        if (data) {
            query = queryStringify(options.data) as string;
        }

        return this.request(url + query, {
            ...options,
            method: Methods.GET,
        }, options.timeout);
    };

    public put = (url:string, options:HTTPTransportOptions) => this.request(url, {
        ...options,
        method: Methods.PUT,
    }, options.timeout);

    public post = (url:string, options:HTTPTransportOptions) => this.request(url, {
        ...options,
        method: Methods.POST,
    }, options.timeout);

    public delete = (url:string, options:HTTPTransportOptions) => this.request(url, {
        ...options,
        method: Methods.DELETE,
    }, options.timeout);

    public request = (url:string, options:HTTPTransportOptions, timeout = 5000) => {
        const { method = '', data, headers } = options;

        const promise = new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.open(method, this.endpoint + url);

            if (headers) {
                Object.keys(headers).forEach((key) => {
                    xhr.setRequestHeader(key, headers[key]);
                });
            }

            xhr.timeout = timeout;
            xhr.withCredentials = true;

            xhr.onload = function () {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if (method === Methods.GET || !data) {
                xhr.send();
            } else {
                const isFormData = data instanceof FormData;
                xhr.send((isFormData) ? data : JSON.stringify(data));
            }
        });

        if (!this.endpoint) {
            return promise;
        }

        return promise.then((response: any) => {
            let result;
            try {
                result = JSON.parse(response.response);
            } catch {
                result = response.response;
            }
            return result;
        }).then((resp) => resp as unknown);
    };
}
