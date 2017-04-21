import React from 'react';

export default () => (
    <div className="container-fluid">
        <div className="row">
            <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Overview</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Remote</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Social</a>
                    </li>
                </ul>
            </nav>

            <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
                <h1>Overview</h1>
                <section className="row text-center">
                    <div className="col-6 col-sm-3">
                        <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle" alt="Generic placeholder thumbnail" />
                        <h4>Label</h4>
                        <div className="text-muted">Something else</div>
                    </div>
                </section>
            </main>
        </div>
    </div>
);