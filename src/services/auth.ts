import { transformUser } from '../utils/apiTransform';
import { Router } from '../core/Router';
import { Store } from '../core/Store';
import { getChatsList } from './chats';
import { apiUser } from '../api';
import { isError } from '../utils/apiCheck';
import { loginType, APIError, User } from '../core/types';
import { apiAuth } from '../api/apiAuth';

const globalStore = new Store();
const globalRouter = new Router();

export const logout = async () => {
    await apiAuth.logout();

    globalStore.set({
        user: null,
        isLoadApp: true,
        currentChat: null,
    });

    globalRouter.go('/sign-in');
};

export const login = async (data: loginType) => {
    const response = await apiAuth.login(data);

    if (isError(response)) {
        globalStore.set({
            user: null,
            isLoadApp: true,
        });

        const error = response as APIError;
        alert(error.reason);
    }

    const responseUser: User = await apiUser.getUserInfo() as User;

    if (isError(responseUser)) {
        logout();

        globalStore.set({
            isLoadApp: true,
        });

        return;
    }

    globalStore.set({
        user: transformUser(responseUser),
        isLoadApp: true,
    });

    getChatsList();

    globalRouter.go('/messenger');
};
