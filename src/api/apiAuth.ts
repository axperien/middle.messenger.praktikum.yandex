import { loginType } from '../core/types';
import { HTTPTransport } from '../core/HTTPTransport';

const http = new HTTPTransport();

export class apiAuth {
    static login(data: loginType) {
        return http.post('/auth/signin', {
            data,
            headers: { 'Content-Type': 'application/json' },
            timeout: 0,
        });
    }

    static logout() {
        return http.post('/auth/logout', {
            timeout: 0,
        });
    }
}
