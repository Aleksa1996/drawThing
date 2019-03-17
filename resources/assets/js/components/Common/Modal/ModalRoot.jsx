import React, { Component } from 'react';
import { connect } from 'react-redux';

import { KICK_PLAYER_MODAL, INFO_MODAL, CHOOSE_WORD_MODAL } from './modalTypes';

import KickPlayerModal from './KickPlayerModal';
import InfoModal from './InfoModal';
import ChooseWordModal from './ChooseWordModal';

const MODAL_COMPONENTS = {
	[KICK_PLAYER_MODAL]: KickPlayerModal,
	[INFO_MODAL]: InfoModal,
	[CHOOSE_WORD_MODAL]: ChooseWordModal
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
