import { Router } from '../core/Router';
import { Store } from '../core/Store';
import { isError } from '../utils/apiCheck';
import { userType, APIError } from '../core/types';
import { apiUser } from '../api';

const globalRouter = new Router();

const globalStore = new Store();

export const register = async (data: userType) => {
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

    const responseUser = await apiUser.getUserInfo();

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

    globalStore.set({
        user: response,
    });
};

export const editUser = async (data: userType) => {
    const response = await apiUser.editUser(data);

    if (isError(response)) {
        const error = response as APIError;
        alert(error.reason);

        return;
    }

    globalStore.set({
        user: response,
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
