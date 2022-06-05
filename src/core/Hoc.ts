/* eslint-disable react/no-unused-state */
import { AppState } from './types';
import { isEqual } from '../utils/isEqual';
import { Store } from './Store';
import Block from './Block';

export default (Component: typeof Block) => class extends Component {
    public static componentName = Component.name;

    constructor(props: object & { store: Store<AppState> }) {
        super({ ...props, store: window.store });
    }

    componentDidMount(props: object & { store: Store<AppState> }) {
        super.componentDidMount(props);

        this.setState({
            store: window.store.getState(),
        });

        window.store.on('changed', (prevState, nextState) => {
            if (!isEqual(prevState, nextState)) {
                this.setState({
                    store: window.store.getState(),
                });
            }
        });
    }
};
