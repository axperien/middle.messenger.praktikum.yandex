import { Store } from '../core/Store';
import { getChatsList } from './chats';
import { transformMessage } from '../utils/apiTransform';
import { isPing, isUserConnected } from '../utils/apiCheck';

const globalStore = new Store();

type SocketData = {
    chatId: number;
    userId: number | undefined;
    token: string;
}

export class Socket {
    private static __instance: Socket;

    ws: WebSocket;

    ping: ReturnType<typeof setTimeout>;

    constructor() {
        if (Socket.__instance) {
            return Socket.__instance;
        }

        Socket.__instance = this;
    }

    _startPingPong = () => {
        this.ping = setInterval(() => {
            this.ws?.send(
                JSON.stringify({
                    type: 'ping',
                }),
            );
        }, 5000);
    };

    _stopPingPong = () => {
        clearInterval(this.ping);
    };

    _handlerOpen = () => {
        this._startPingPong();
        this.getOlderMessages();
    };

    _handlerClose = () => {
        this._stopPingPong();
    };

    _handlerMessage = (e: MessageEvent) => {
        const response = JSON.parse(e.data);

        if (!isPing(response) && !isUserConnected(response)) {
            const { messages } = globalStore.getState() || [];

            if (response instanceof Array) {
                response.forEach((value) => {
                    // @ts-ignore
                    messages.push(transformMessage(value));
                });
            } else {
                // @ts-ignore
                messages.unshift(transformMessage(response));
            }

            globalStore.set({
                messages,
            });

            getChatsList();
        }
    };

    _addEvents() {
        this.ws?.addEventListener('open', this._handlerOpen);

        this.ws?.addEventListener('close', this._handlerClose);

        this.ws?.addEventListener('message', this._handlerMessage);
    }

    _removeEvents() {
        this.ws?.removeEventListener('open', this._handlerOpen);

        this.ws?.removeEventListener('close', this._handlerClose);

        this.ws?.removeEventListener('message', this._handlerMessage);
    }

    connect(data: SocketData) {
        this.leave();

        const { userId, chatId, token } = data;

        this.ws = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`);

        this._addEvents();
    }

    leave() {
        this.ws?.close();
        this._stopPingPong();
        this._removeEvents();
    }

    getOlderMessages(content = 0) {
        this.ws?.send(
            JSON.stringify({
                content: `${content}`,
                type: 'get old',
            }),
        );
    }

    sendMessage(content: string) {
        this.ws?.send(JSON.stringify({
            content,
            type: 'message',
        }));
    }
}

const socket = () => new Socket();

export default socket();
