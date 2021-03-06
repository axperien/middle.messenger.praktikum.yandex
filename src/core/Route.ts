import { renderDOM } from './renderDOM';
import { isEqual } from '../utils/isEqual';
import Block from './Block';

export class Route {
    protected _pathname;

    protected _blockClass;

    protected _block: Block | null;

    protected _props;

    constructor(pathname: string, view: any, props: object) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this.render();
        }
    }

    leave() {
        if (this._block) {
            renderDOM();
        }
    }

    match(pathname: string) {
        return isEqual(pathname, this._pathname);
    }

    render() {
        if (!this._block) {
            this._block = new this._blockClass(this._props);
        }

        renderDOM(this._block!);
    }
}
