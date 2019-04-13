import React from 'react';
import { connect } from 'react-redux';

import Modal from './Modal';

import { kickPlayer, hideModal } from '../../../actions';

import Button from '../../Form/Button';

const KickPlayerModal = ({ player, hideModal, kickPlayer }) => {
	const footer = (
		<React.Fragment>
			<Button type="button" className="mybtn2" onClick={hideModal}>
				No
			</Button>
			<Button
				type="button"
				className="mybtn2"
				onClick={() => {
					kickPlayer(player.id).then(() => {
						hideModal();
					});
				}}
			>
				Yes
			</Button>
		</React.Fragment>
	);

	if (!player) return null;
	return (
		<Modal
			title="Kicking player"
			body={`Are you sure you want to kick ${player.username} from room ?`}
			data={player}
			handleClose={hideModal}
			footer={footer}
		/>
	);
};

export default connect(
	(state, ownProps) => ({ player: state.room.players.find(p => p.id == ownProps.playerId) }),
	{ hideModal, kickPlayer }
)(KickPlayerModal);
