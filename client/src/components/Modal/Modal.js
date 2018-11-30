import React from "react";
import ReactModal from "react-modal";
import "./Modal.css";

ReactModal.setAppElement("#root");

const Modal = props => (
    <ReactModal
        className={props.modalIsClose ? "modal-open" : "modal-close"}
        overlayClassName="my-overlay"
        isOpen={props.modalIsOpen}>
        {/* Partial Bootstrap modal */}
        <div className="modal-dialog m-0" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                        Warning
                    </h5>
                    <button
                        className="close"
                        onClick={props.closeModal}
                        aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div>You have been inactive for more than 10 minutes!</div>
                    <div>Please sign in back.</div>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary" onClick={props.closeModal}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    </ReactModal>
);

export default Modal;
