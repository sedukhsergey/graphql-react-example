import { Routes } from './routes.enum';

type RouteType = {
    path: Routes;
    component: any;
    exact: boolean;
    routes?: RouteType[];
};

export default RouteType;
