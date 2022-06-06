import { AppState } from './types';
import EventBus from './EventBus';

import { initialState } from '../store';

export class Store extends EventBus {
    private static _instance: Store;

    private state: AppState = {};

    constructor(defaultState?: AppState) {
        if (Store._instance) {
            return Store._instance;
        }

        super();

        this.state = defaultState || initialState;
        this.set(this.state);

        Store._instance = this;
    }

    public getState() {
        return this.state;
    }

    public set(nextState: AppState) {
        const prevState = { ...this.state };

        this.state = { ...this.state, ...nextState };

        this.emit('changed', prevState, nextState);
    }
}
