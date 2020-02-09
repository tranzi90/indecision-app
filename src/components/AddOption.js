import React from "react"

export default (props) => (
        <form className='add-option' onSubmit={props.addOption}>
            <input className='add-option__input' type="text" name="option"/>
            <button className='button'>Add button</button>
        </form>
    )
