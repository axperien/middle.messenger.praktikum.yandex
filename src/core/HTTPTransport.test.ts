/* eslint-disable import/no-extraneous-dependencies */

import { expect } from 'chai';
import { HTTPTransport } from './HTTPTransport';

const http = new HTTPTransport('');

describe('Тестирование HTTPTransport', () => {
    it('Метод GET работает', () => {
        const response = http.get('', {});

        response.then((r: XMLHttpRequest) => {
            expect(r.status).to.eq(200);
        });
    });

    it('Метод POST Not Allowed', () => {
        const response = http.get('', {});

        response.then((r: XMLHttpRequest) => {
            expect(r.status).to.eq(405);
        });
    });
});
