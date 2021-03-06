import React from 'react';
import Loading from '@components/common/Loading';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { LOGIN_PATH } from '@constants/paths';
import LoginPage from '@views/Login';

const App = (): JSX.Element => {
    return (
        <HashRouter>
            <React.Suspense fallback={<Loading />}>
                <Switch>
                    {/* <Route exact path="/404" render={(props) => <Page404 {...props} />} />
                    <Route exact path="/500" render={(props) => <Page500 {...props} />} /> */}
                    <Route path={LOGIN_PATH} render={() => <LoginPage />} />
                </Switch>
            </React.Suspense>
        </HashRouter>
    );
};

export default App;
