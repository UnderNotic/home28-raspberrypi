import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/bootstrap.css';
import '../../css/font-awesome.css';
import '../../css/main.css';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = process.env.NODE_ENV === 'development' ? applyMiddleware(thunk, require('redux-logger').default) : applyMiddleware(thunk);

export default () =>
    createStore(
        rootReducer,
        middleware
    );