import { DASHBOARD_PATH } from '@constants/paths';
import EnumRole from '@interfaces/roles';
import Dashboard from '.';

const route = [
    {
        path: DASHBOARD_PATH,
        name: 'Dashboard',
        component: Dashboard,
        exact: true,
        extraProps: {
            isLoggedIn: true,
            roles: [EnumRole.BASIC, EnumRole.OWNER, EnumRole.ASSOCIATE, EnumRole.MANAGER],
        },
    },
];

export default route;
