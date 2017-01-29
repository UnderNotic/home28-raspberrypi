import React from 'react';
import ReactDOM from 'react-dom';
import '../css/bootstrap.css';
import '../css/main.css';
import { AppContainer } from 'react-hot-loader';
import Login from './containers/login/login';

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
    module.hot.accept('./containers/login/login', () => {
        const NewApp = require('./containers/login/login').default
        render(NewApp)
    });
}
