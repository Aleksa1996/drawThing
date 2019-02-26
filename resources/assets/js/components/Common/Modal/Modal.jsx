import React from 'react';
import ReactModal from 'react-modal';

import { v4 } from 'uuid';
import Button from '../../Form/Button';

ReactModal.setAppElement('#main-content-layout');

const Modal = ({ title, body, buttons, data, handleClose, children }) => {
	return (
		<ReactModal
			isOpen={true}
			// onAfterOpen={handleAfterOpen}
			onRequestClose={handleClose}
			contentLabel="Example Modal"
			overlayClassName="react-modal-backdrop"
			className="react-modal modal-dialog"
			shouldCloseOnOverlayClick={true}
		>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">{title}</h5>
						<button
							onClick={handleClose}
							type="button"
							className="close"
							data-dismiss="modal"
							aria-label="Close"
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<p>{body}</p>
						{children}
					</div>
					<div className="modal-footer">
						{buttons.map(({ btnText, btnProps: { onClick, ...btnProps } }) => (
							<Button key={v4()} type="button" className="mybtn2" onClick={onClick} {...btnProps}>
								{btnText}
							</Button>
						))}
					</div>
				</div>
			</div>
		</ReactModal>
	);
};

export default Modal;
