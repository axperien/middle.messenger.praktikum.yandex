import { Store } from '../core/Store';
import { isError } from '../utils/apiCheck';
import { apiUser } from '../api';

const globalStore = new Store();

export const checkUser = async () => {
    try {
        const userInfo = await apiUser.getUserInfo();

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
