import React from 'react';
import { Provider } from 'react-redux';
import store from '@redux/store';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '@styles/global.scss';
import '@styles/coreui.min.css';
import '@styles/nprogress.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);

reportWebVitals();
