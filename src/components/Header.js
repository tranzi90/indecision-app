import React from 'react'

export default (props) => (
    <div className="header">
        <div className="App">
            <h1 className="header__title">Indecision</h1>
            <h2 className="header__subtitle">{props.subtitle}</h2>
        </div>
    </div>
)
