import { Store } from '../core/Store';
import { User } from '../core/types';

const globalStore = new Store();

const findUser = (id: number): User | null => {
    // @ts-ignore
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

// @ts-ignore
export const transformUser = (data) => ({
    id: data.id,
    login: data.login,
    firstName: data.first_name,
    lastName: data.second_name,
    displayName: data.display_name ? data.display_name : data.login,
    avatar: data.avatar ? `https://ya-praktikum.tech/api/v2/resources${data.avatar}` : '',
    phone: data.phone ? data.phone : '',
    email: data.email,
    // @ts-ignore
    you: data.id === globalStore.getState().user?.id,
});

// @ts-ignore
export const transformMessage = (data) => ({
    author: (data.user) ? transformUser(data.user) : findUser(data.user_id as number),
    text: decodeURIComponent(data.content),
    // @ts-ignore
    created: new Date(data.time).toLocaleDateString(undefined, { day: 'numeric', month: 'numeric' }),
    // @ts-ignore
    you: (data.user_id) ? data.user_id === globalStore.getState().user?.id : false,
    isRead: data.is_read,
});

// @ts-ignore
export const transformLastMessage = (data) => ({
    text: decodeURIComponent(data.content),
    from: data.user.display_name ? data.user.display_name : data.user.login,
    created: new Date(data.time).toLocaleDateString(undefined, { day: 'numeric', month: 'numeric' }),
    // @ts-ignore
    you: (data.user.login) ? data.user.login === globalStore.getState().user?.login : false,
});

// @ts-ignore
export const transformChat = (data) => ({
    id: data.id,
    title: data.title,
    avatar: data.avatar ? `https://ya-praktikum.tech/api/v2/resources${data.avatar}` : '',
    lastMessage: (data.last_message) ? transformLastMessage(data.last_message) : null,
});
