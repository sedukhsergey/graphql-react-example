import Main from '../modules/Main';

import { Routes } from './routes.enum';

const routes = [
    {
        path: Routes.main,
        component: Main,
        exact: false,
    }
];

export default routes;
