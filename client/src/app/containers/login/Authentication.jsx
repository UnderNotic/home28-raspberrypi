import React, { Component } from 'react';
import MainPage from '../mainPage/MainPage';
import Login from '../../components/Login';
import CenteredMsg from '../../components/CenteredMessage';
import url from '../../utils/url';
import { connect } from 'react-redux';
import { fetchIsAuthenticated } from '../../redux/modules/AuthenticationDuck';
import { fetchLogin } from '../../redux/modules/LoginDuck';

class Authentication extends Component {
    componentDidMount() {
        this.props.checkIfAuthenticated();
    }

    render() {
        const { isFetching, isFailing, isAuthenticated, isLoginSuccessful, error, onLoginClick } = this.props;
        return isFetching ? null : (isAuthenticated || isLoginSuccessful) ? <MainPage /> : isFailing ? <CenteredMsg title="Error" text={error} /> : <Login onLoginClick={onLoginClick} />;
    }
}

const mapStateToProps = ({ authenticationReducer, loginReducer }) => (
    {
        isFetching: authenticationReducer.isFetching,
        isFailing: authenticationReducer.isFailing,
        error: authenticationReducer.error,
        isAuthenticated: authenticationReducer.isAuthenticated,
        isLoginSuccessful: loginReducer.isLoginSuccessful
    }
);

const mapDispatchToProps = dispatch => (
    {
        checkIfAuthenticated: () => dispatch(fetchIsAuthenticated()),
        onLoginClick: (login, pass) => dispatch(fetchLogin(login, pass))
    }
);


export default connect(mapStateToProps, mapDispatchToProps)(Authentication);