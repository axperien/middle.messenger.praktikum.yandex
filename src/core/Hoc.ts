import { AppState } from './types';
import { isEqual } from '../utils/isEqual';
import { Store } from './Store';
import Block from './Block';

const globalStore = new Store();

export default (Component: typeof Block) => class extends Component {
    public static componentName = Component.name;

    constructor(props: object & { store: AppState }) {
        super({ ...props, store: globalStore });
    }

    componentDidMount(props: object & { store: AppState }) {
        super.componentDidMount(props);

        this.setState({
            store: globalStore.getState(),
        });

        globalStore.on('changed', (prevState, nextState) => {
            if (!isEqual(prevState, nextState)) {
                this.setState({
                    store: globalStore.getState(),
                });
            }
        });
    }
};
