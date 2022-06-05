import { getChatsList } from './chats';
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { apiUser } from '../api/apiUser';
import { isError } from '../utils/apiCheck';
import { loginType } from '../core/types';
import { apiAuth } from '../api/apiAuth';

export const logout = async () => {
    await apiAuth.logout();

    window.store.set({
        user: null,
        isLoadApp: true,
        currentChat: null,
    });

    window.router.go('/sign-in');
};

export const login = async (data: loginType) => {
    const response = await apiAuth.login(data);

    if (isError(response)) {
        window.store.set({
            user: null,
            isLoadApp: true,
        });

        // @ts-ignore
        alert(response.reason);
    }

    const responseUser = await apiUser.getUserInfo();

    if (isError(responseUser)) {
        logout();

        window.store.set({
            isLoadApp: true,
        });

        return;
    }

    window.store.set({
        user: responseUser,
        isLoadApp: true,
    });

    getChatsList();

    window.router.go('/messenger');
};
