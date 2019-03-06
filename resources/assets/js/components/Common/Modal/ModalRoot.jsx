import React, { Component } from 'react';
import { connect } from 'react-redux';

import { KICK_PLAYER_MODAL, INFO_MODAL } from './modalTypes';

import KickPlayerModal from './KickPlayerModal';
import InfoModal from './InfoModal';

const MODAL_COMPONENTS = {
	[KICK_PLAYER_MODAL]: KickPlayerModal,
	[INFO_MODAL]: InfoModal
};

class ModalRoot extends Component {
	render() {
		if (!this.props.modalType) {
			return null;
		}
		const SpecificModal = MODAL_COMPONENTS[this.props.modalType];

		return <SpecificModal {...this.props.modalProps} />;
	}
}

export default connect(
	state => ({ ...state.modal }),
	{}
)(ModalRoot);
