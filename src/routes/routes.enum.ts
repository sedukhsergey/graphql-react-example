export enum Routes {
    main = '/main',
}

export class DynamicRoutes {
    static goToMainNew (id: number) {
        return `/main/${id}`
    }
}
