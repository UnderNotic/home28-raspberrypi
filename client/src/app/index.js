import React from 'react';
import ReactDOM from 'react-dom';
import '../css/bootstrap.css';
import '../css/font-awesome.css';
import '../css/main.css';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/login/Authentication';
import store from './redux/store';
import { Provider } from 'react-redux';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );
};

render(Root);

if (module.hot) {
    module.hot.accept('./containers/login/Authentication', () => {
        const NewApp = require('./containers/login/Authentication').default;
        render(NewApp);
    });
}
