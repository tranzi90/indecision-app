import React from "react"

export default (props) => (
        <div className='option'>
            <p className='option__text'>{props.count}. {props.text}</p>
            <button
                className='button button--link'
                onClick={(e) => props.deleteOption(props.text)}
            >
                remove
            </button>
        </div>
    )
