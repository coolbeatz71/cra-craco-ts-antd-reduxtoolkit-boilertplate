import { LOGIN_PATH } from '@constants/paths';
import LoginPage from '.';

const route = [
    {
        path: LOGIN_PATH,
        name: 'Connexion',
        component: LoginPage,
        exact: true,
        extraProps: {
            isLoggedIn: false,
        },
    },
];

export default route;
