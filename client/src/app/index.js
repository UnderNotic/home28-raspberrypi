import React from 'react';
import ReactDOM from 'react-dom';

//why this doesnt work
import '../css/antd.css';
import '../css/main.css';
import { AppContainer } from 'react-hot-loader';
import Login from './login';

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
    module.hot.accept('./login', () => {
        const NewApp = require('./login').default
        render(NewApp)
    });
}
