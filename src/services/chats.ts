import { Store } from '../core/Store';
import { transformChat } from '../utils/apiTransform';
import { apiUser, apiChat } from '../api';
import { User, APIError, Indexed, Chat, ChatToken } from '../core/types';
import { isError } from '../utils/apiCheck';
import socket from './webSocket';

const globalStore = new Store();

export const getChatsList = async () => {
    const response = await apiChat.getChats();

    if (isError(response)) {
        return;
    }

    const chats: Array<Chat> = [];

    (response as Array<Chat>).forEach((r) => {
        chats.push(transformChat(r));
    });

    globalStore.set({
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
    const user: User | null = store.user as User;
    const currentChat: Chat = store.currentChat as Chat;

    if (currentChat) {
        const chatUsers: Array<User> = [];

        const id = currentChat.id as number;
        const response = await apiChat.getChatUser(id);

        if (!isError(response)) {
            if (response && Array.isArray(response) && response.length) {
                response.forEach((chatUser) => {
                    chatUsers.push(chatUser);
                });
            }
        }

        currentChat.users = chatUsers;

        const responseToken = await apiChat.getToken(id);

        if (isError(responseToken)) {
            alert('Ошибка при загрузке сообщений');
            return;
        }

        socket.connect({
            userId: user.id,
            chatId: id,
            token: (responseToken as ChatToken).token,
        });

        globalStore.set({
            currentChat,
            isLoadedMessages: false,
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
    const currentChat: Chat = store.currentChat as Chat;
    let userId = null;

    if (!currentChat) {
        return;
    }

    const responseUser = await apiUser.findUser(data);

    if (isError(responseUser)) {
        const error = responseUser as APIError;
        alert(error.reason);

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
    const currentChat: Chat = store.currentChat as Chat;

    if (currentChat) {
        const users: Array<number> = [];

        const chatId = currentChat.id;

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
