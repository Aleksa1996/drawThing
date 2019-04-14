import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#main-content-layout');

const Modal = ({
	title,
	body,
	handleClose,
	children,
	shouldCloseOnOverlayClick,
	shouldHideCloseButton,
	footer
}) => {
	return (
		<ReactModal
			isOpen={true}
			onRequestClose={handleClose}
			contentLabel="Example Modal"
			overlayClassName="react-modal-backdrop"
			className="react-modal modal-dialog"
			shouldCloseOnOverlayClick={
				typeof shouldCloseOnOverlayClick == 'undefined' ? true : shouldCloseOnOverlayClick
			}
		>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">{title}</h5>
						{shouldHideCloseButton ? null : (
							<button
								onClick={handleClose}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						)}
					</div>
					<div className="modal-body">
						<p>{body}</p>
						{children}
					</div>
					<div className="modal-footer">{footer ? footer : null}</div>
				</div>
			</div>
		</ReactModal>
	);
};

export default Modal;
