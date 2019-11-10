import { Routes, DynamicRoutes } from './routes.enum';
import { createBrowserHistory } from 'history';
import { History } from 'history';

class Router {
    public history: History;
    constructor() {
        this.history = createBrowserHistory();
    }

    public goToMain = () => {
        this.history.push(Routes.main);
    };
    public goToMainNew = (id: number) => {
        this.history.push(DynamicRoutes.goToMainNew(id));
    };
}

export default new Router();
