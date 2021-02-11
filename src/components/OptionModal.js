import React from 'react'
import Modal from 'react-modal'

export default (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.closeModal}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3>Selected Option</h3>
        <p>{props.selectedOption}</p>
        <button className="button" onClick={props.closeModal}>
            OK
        </button>
    </Modal>
)