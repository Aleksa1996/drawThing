import React from 'react';
import { connect } from 'react-redux';

import Modal from './Modal';

import { hideModal } from '../../../actions';

const InfoModal = ({ hideModal, body }) => {
	const buttons = [{ btnText: 'Ok', btnProps: { onClick: hideModal } }];
	if (!body) return null;
	return <Modal title="Info" body={body} buttons={buttons} handleClose={hideModal} />;
};

export default connect(
	null,
	{ hideModal }
)(InfoModal);
