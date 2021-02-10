import Option from "./Option"
import React from "react"

export default (props) => (
    <div>
        <div className='widget-header'>
            <h3 className='widget-header__title'>Your Options</h3>
            <button
                className='button button--link'
                onClick={props.removeAll}
            >
                Remove all
            </button>
        </div>
        {props.options.length === 0 && <p className='widget__message'>Please add any options</p>}
        {
            props.options.map((option, index) =>
                <Option
                    key={option}
                    text={option}
                    count={++index}
                    deleteOption={props.deleteOption}
                />)
        }
    </div>
)
