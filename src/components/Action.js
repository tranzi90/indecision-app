import React from "react"

export default (props) =>
    <button
        className='big-button'
        onClick={props.makeDecision}
        disabled={!props.hasOptions}
    >
        WTF am I to do??
    </button>
