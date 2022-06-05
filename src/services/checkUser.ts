import { isError } from '../utils/apiCheck';
import { apiUser } from '../api/apiUser';

export const checkUser = async () => {
    try {
        const userInfo = await apiUser.getUserInfo();

        if (isError(userInfo)) {
            window.store.dispatch({
                user: null,
                isLoadApp: true,
            });

            return;
        }

        window.store.dispatch({
            user: userInfo,
            isLoadApp: true,
        });
    } catch (e) {
        throw new Error(e);
    }
};
