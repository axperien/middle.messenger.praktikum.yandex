import { userType, passwordType } from '../core/types';
import { HTTPTransport } from '../core/HTTPTransport';

const http = new HTTPTransport();

export class apiUser {
    static register(data: userType) {
        return http.post('/auth/signup', {
            data,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    static getUserInfo() {
        return http.get('/auth/user', {});
    }

    static editUser(data: userType) {
        return http.put('/user/profile', {
            data,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    static editPassword(data: passwordType) {
        return http.put('/user/password', {
            data,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    static findUser(data: { login: string }) {
        return http.post('/user/search', {
            data,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}