import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginDuck from '../redux/modules/LoginDuck';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            login: '',
            password: ''
        };
    }

    handleInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const { onLoginClick } = this.props;
        let img = require("../../image/login.png");
        return (
            <div className="centered-flex">
                <form style={{ textAlign: "center" }}>
                    <img id="login-logo" src={img} onClick={() => onLoginClick(this.state.login, this.state.password)} />
                    <div className="form-group">
                        <input name="login" type="password" value={this.state.loginValue} onChange={(e) => this.handleInput(e)} className="form-control login-input" />
                    </div>
                    <div className="form-group">
                        <input name="password" type="password" value={this.state.passwordValue} onChange={(e) => this.handleInput(e)} className="form-control login-input" />
                    </div>
                </form>
            </div>
        );
    }
}

export default connect()(Login);