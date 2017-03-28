import React from 'react';
import ReactDOM from 'react-dom';
import '../css/bootstrap.css';
import '../css/font-awesome.css';
import '../css/main.css';
import { AppContainer } from 'react-hot-loader';
import Login from './containers/login/Login';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    );
};

render(Login);

if (module.hot) {
    module.hot.accept('./containers/login/Login', () => {
        const NewApp = require('./containers/login/Login').default;
        render(NewApp);
    });
}
