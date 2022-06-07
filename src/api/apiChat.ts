import { Indexed } from '../core/types';
import { HTTPTransport } from '../core/HTTPTransport';

const http = new HTTPTransport();

export class apiChat {
    static getChats() {
        return http.get('/chats', {
            headers: { 'Content-Type': 'application/json' },
        });
    }

    static createChat(data: Indexed) {
        return http.post('/chats', {
            data,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    static getChatUser(id: number) {
        return http.get(`/chats/${id}/users`, {
            headers: { 'Content-Type': 'application/json' },
        });
    }

    static addUser(data: any) {
        return http.put('/chats/users', {
            data,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    static deleteUser(data: any) {
        return http.delete('/chats/users', {
            data,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    static getToken(id: number) {
        return http.post(`/chats/token/${id}`, {
            headers: { 'Content-Type': 'application/json' },
        });
    }

    static uploadAvatar(data: FormData) {
        return http.put('/chats/avatar', {
            data,
        });
    }
}
