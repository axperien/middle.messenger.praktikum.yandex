import { AppState } from '../core/types';

export const initialState: AppState = {
    user: null,
    isLoadApp: false,
    chats: [],
    currentChat: null,
    messages: null,
};
