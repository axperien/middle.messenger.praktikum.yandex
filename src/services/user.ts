import { Router } from '../core/Router';
import { Store } from '../core/Store';
import { isError } from '../utils/apiCheck';
import { APIError, User } from '../core/types';
import { apiUser } from '../api';

const globalRouter = new Router();

const globalStore = new Store();

export const register = async (data: User) => {
    const response = await apiUser.register(data);

    if (isError(response)) {
        globalStore.set({
            user: null,
            isLoadApp: false,
        });

        const error = response as APIError;
        alert(error.reason);

        return;
    }

    const responseUser: User = await apiUser.getUserInfo() as User;

    if (isError(responseUser)) {
        globalRouter.go('/sign-in');

        return;
    }

    globalStore.set({
        user: responseUser,
        isLoadApp: true,
    });

    globalRouter.go('/messenger');
};

export const getUserInfo = async () => {
    const response = await apiUser.getUserInfo();

    if (isError(response)) {
        globalStore.set({
            user: null,
            isLoadApp: true,
        });

        const error = response as APIError;
        alert(error.reason);

        return;
    }

    const user: User = response as User;

    globalStore.set({
        user,
    });
};

export const editUser = async (data: User) => {
    const response = await apiUser.editUser(data);

    if (isError(response)) {
        const error = response as APIError;
        alert(error.reason);

        return;
    }

    const user: User = response as User;

    globalStore.set({
        user,
    });
};

export const ediPassword = async (data: any) => {
    const response = await apiUser.editPassword(data);

    if (isError(response)) {
        const error = response as APIError;
        alert(error.reason);
    }

    return response;
};
