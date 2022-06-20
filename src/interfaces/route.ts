import { IUnknownObject } from './app';
import EnumRole from './roles';

export interface IRoute {
    path: string;
    name: string;
    component: React.FC<IUnknownObject>;
    exact: boolean;
    extraProps: {
        isLoggedIn: boolean;
        roles?: EnumRole[];
    };
}
