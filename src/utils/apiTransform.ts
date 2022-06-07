import { Store } from '../core/Store';
import { User, MessageData, Chat } from '../core/types';

const globalStore = new Store();

const findUser = (id: number): User | null => {
    const users = globalStore.getState().currentChat?.users;
    let result = null;

    if (users) {
        (users as Array<User>).forEach((value) => {
            if (value.id === id) {
                result = value;
            }
        });
    }

    return result;
};

export const getAvatar = (avatar: string | undefined): string => ((avatar) ? `https://ya-praktikum.tech/api/v2/resources${avatar}` : '');

export const transformUser = (data: User) => ({
    id: data.id,
    login: data.login,
    first_name: data.first_name,
    second_name: data.second_name,
    display_name: data.display_name ? data.display_name : data.login,
    avatar: getAvatar(data.avatar),
    phone: data.phone ? data.phone : '',
    email: data.email,
    you: data.id === globalStore.getState().user?.id,
});

export const transformMessage = (data: MessageData) => ({
    author: (data.user) ? transformUser(data.user) : findUser(data.user_id as number),
    text: decodeURIComponent(data.content),
    created: new Date(data.time).toLocaleDateString(undefined, { day: 'numeric', month: 'numeric' }),
    you: (data.user_id) ? data.user_id === globalStore.getState().user?.id : false,
    isRead: data.is_read,
});

export const transformLastMessage = (data: MessageData) => ({
    text: decodeURIComponent(data.content),
    from: data.user.display_name ? data.user.display_name : data.user.login,
    created: new Date(data.time).toLocaleDateString(undefined, { day: 'numeric', month: 'numeric' }),
    you: (data.user.login) ? data.user.login === globalStore.getState().user?.login : false,
});

export const transformChat = (data: Chat) => ({
    id: data.id,
    title: data.title,
    avatar: getAvatar(data.avatar),
    lastMessage: (data.last_message) ? transformLastMessage(data.last_message) : null,
});
