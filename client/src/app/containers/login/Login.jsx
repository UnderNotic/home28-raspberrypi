import React, { Component } from 'react';
import LoginDuck from '../../redux/modules/LoginDuck';

export default class Login extends Component {

    onLoginClick = () => {
        console.log("Hello");
        // this.props.dispatch({});
    }

    render() {
        let img = require("../../../image/login.png");
        return (
            <div id="centered-login-flex">
                <form style={{ textAlign: "center" }}>
                    <img id="login-logo" src={img} onClick={this.onLoginClick} />
                    <div className="form-group">
                        <input type="login" className="form-control login-input" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control login-input" />
                    </div>
                </form>
            </div>
        );
    }
}
