/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-alert */
import { isError } from '../utils/apiCheck';
import { userType, passwordType } from '../core/types';
import { apiUser } from '../api/apiUser';

export const register = async (data: userType) => {
    const response = await apiUser.register(data);

    if (isError(response)) {
        window.store.dispatch({
            user: null,
            isLoadApp: false,
        });

        // @ts-ignore
        alert(response.reason);

        return;
    }

    const responseUser = await apiUser.getUserInfo();

    if (isError(responseUser)) {
        window.router.go('/sign-in');

        return;
    }

    window.store.dispatch({
        user: responseUser,
        isLoadApp: true,
    });

    window.router.go('/messenger');
};

export const getUserInfo = async () => {
    const response = await apiUser.getUserInfo();

    if (isError(response)) {
        window.store.dispatch({
            user: null,
            isLoadApp: true,
        });

        // @ts-ignore
        alert(response.reason);

        return;
    }

    window.store.dispatch({
        user: response,
    });
};

export const editUser = async (data: userType) => {
    const response = await apiUser.editUser(data);

    if (isError(response)) {
        // @ts-ignore
        alert(response.reason);

        return;
    }

    window.store.dispatch({
        user: response,
    });
};

export const ediPassword = async (data: passwordType) => {
    const response = await apiUser.editPassword(data);

    if (isError(response)) {
        // @ts-ignore
        alert(response.reason);
    }

    return response;
};
