import React from 'react';

export default ({ title, text }) => (
    <div className="centered-flex">
        <div className="card card-inverse card-danger text-center" style={{ width: "20rem" }}>
            <div className="card-block">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{text}</p>
            </div>
        </div>
    </div>
);
