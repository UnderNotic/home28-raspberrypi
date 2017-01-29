import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        let img = require("../../../image/login.png");
        return (
            <div id="centered-login-flex">
                <img src={img} alt="" />
                <button type="button" className="btn btn-primary" onClick={console.log}>Login</button>
            </div>
        )
    }
}
