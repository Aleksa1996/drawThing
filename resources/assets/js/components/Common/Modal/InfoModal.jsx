import React from 'react';
import { connect } from 'react-redux';

import Modal from './Modal';

import { hideModal } from '../../../actions';

import Button from '../../Form/Button';

const InfoModal = ({ hideModal, body }) => {
	const footer = (
		<Button type="button" className="mybtn2" onClick={hideModal}>
			Ok
		</Button>
	);
	if (!body) return null;
	return <Modal title="Info" body={body} footer={footer} handleClose={hideModal} />;
};

export default connect(
	null,
	{ hideModal }
)(InfoModal);
