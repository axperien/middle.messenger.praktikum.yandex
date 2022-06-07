import { Route } from './Route';

export class Router {
    private static _instance: Router;

    protected routes!: Array<Route>;

    protected history!: History;

    protected _currentRoute!: Route | null;

    constructor() {
        if (Router._instance) {
            return Router._instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;

        Router._instance = this;
    }

    use(pathname: string, block: any, props: any) {
        const route = new Route(pathname, block, props);

        this.routes.push(route);

        return this;
    }

    start() {
        window.onpopstate = ((event: any) => {
            this._onRoute(event.currentTarget.location.pathname);
        });

        this._onRoute(window.location.pathname);
    }

    _onRoute(pathname: string) {
        const route = this.getRoute(pathname);
        if (!route) {
            return;
        }

        if (this._currentRoute && this._currentRoute !== route) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;
        route.render();
    }

    go(pathname: string) {
        this.history.pushState({ name: pathname }, '', pathname);
        this._onRoute(pathname);
    }

    back() {
        this.history.back();
    }

    forward() {
        this.history.forward();
    }

    getRoute(pathname: string) {
        const route = this.routes.find((r) => r.match(pathname));
        return route || this.routes.find((r) => r.match('*'));
    }

    getHistoryLength() {
        return this.history.length;
    }
}
