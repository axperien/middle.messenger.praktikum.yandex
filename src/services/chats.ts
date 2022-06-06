import { Store } from '../core/Store';
import { transformChat } from '../utils/apiTransform';
import { apiUser, apiChat } from '../api';
import { User, APIError, Indexed } from '../core/types';
import { isError } from '../utils/apiCheck';
import socket from './webSocket';

const globalStore = new Store();

export const getChatsList = async () => {
    const response = await apiChat.getChats();

    if (isError(response)) {
        return;
    }

    // @ts-ignore
    const chats = [];

    // @ts-ignore
    response.forEach((r) => {
        chats.push(transformChat(r));
    });

    globalStore.set({
        // @ts-ignore
        chats,
    });
};

export const createChat = async (data: Indexed) => {
    const response = await apiChat.createChat(data);

    if (isError(response)) {
        const error = response as APIError;
        alert(error.reason);

        return;
    }

    getChatsList();
};

export const getCurrentChatInfo = async () => {
    const store = globalStore.getState();
    const { currentChat, user } = store;

    if (currentChat) {
        const chatUsers: Array<User> = [];
        // @ts-ignore
        const id: number = currentChat.id || null;
        const response = await apiChat.getChatUser(id);

        if (!isError(response)) {
            if (response && Array.isArray(response) && response.length) {
                response.forEach((chatUser) => {
                    chatUsers.push(chatUser);
                });
            }
        }

        // @ts-ignore
        currentChat.users = chatUsers;

        const responseToken = await apiChat.getToken(id);

        if (isError(responseToken)) {
            alert('Ошибка при загрузке сообщений');
            return;
        }

        socket.connect({
            // @ts-ignore
            userId: user.id,
            chatId: id,
            // @ts-ignore
            token: responseToken.token,
        });

        globalStore.set({
            currentChat,
            messages: [],
        });
    }
};

export const sendMessage = (message: string) => {
    socket.sendMessage(message);
};

export const stopMessage = () => {
    socket.leave();
};

export const addUserToChat = async (data: { login: string }) => {
    const store = globalStore.getState();
    const { currentChat } = store;
    let userId = null;

    if (!currentChat) {
        return;
    }

    const responseUser = await apiUser.findUser(data);

    if (isError(responseUser)) {
        // @ts-ignore
        alert(responseUser.reason);

        return;
    }

    if (responseUser && Array.isArray(responseUser) && responseUser.length) {
        responseUser.forEach((user) => {
            const { login } = data;
            if (user.login === login) {
                userId = user.id;
            }
        });
    }

    if (userId) {
        const users: [] = [];
        // @ts-ignore
        const chatId = currentChat.id;

        users.push(userId);

        const addUserData = {
            users,
            chatId,
        };

        const response = await apiChat.addUser(addUserData);

        if (isError(response)) {
            const error = response as APIError;
            alert(error.reason);

            return;
        }

        getCurrentChatInfo();
    } else {
        alert('Пользователь с таким логином не найден!');
    }
};

export const deleteChatUser = async (userId: number) => {
    const store = globalStore.getState();
    const { currentChat } = store;

    if (currentChat) {
        const users: [] = [];
        // @ts-ignore
        const chatId = currentChat.id;

        // @ts-ignore
        users.push(userId);

        const data = {
            users,
            chatId,
        };

        const response = await apiChat.deleteUser(data);

        if (isError(response)) {
            const error = response as APIError;
            alert(error.reason);

            return;
        }

        getCurrentChatInfo();
    }
};