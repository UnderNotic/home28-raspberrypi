import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/bootstrap.css';
import '../../css/font-awesome.css';
import '../../css/main.css';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import rootReducer from './reducers';

const middleware = process.env.NODE_ENV === 'development' ? applyMiddleware(thunk, require('redux-logger').default) : applyMiddleware(thunk);

const store = createStore(
    rootReducer,
    compose(
        middleware,
        autoRehydrate()
    )
);

persistStore(store);

export default store;