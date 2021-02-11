import React from 'react'

export default (props) => (
    <button
        className="big-button"
        onClick={props.makeDecision}
        disabled={!props.hasOptions}
    >
        What should I do?
    </button>
)
