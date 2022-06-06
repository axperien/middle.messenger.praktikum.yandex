import { User } from '../core/types';
import { Store } from '../core/Store';
import { isError } from '../utils/apiCheck';
import { apiUser } from '../api';

const globalStore = new Store();

export const checkUser = async () => {
    try {
        const userInfo: User = await apiUser.getUserInfo() as User;

        if (isError(userInfo)) {
            globalStore.set({
                user: null,
                isLoadApp: true,
            });

            return;
        }

        globalStore.set({
            user: userInfo,
            isLoadApp: true,
        });
    } catch (e) {
        throw new Error(e);
    }
};
