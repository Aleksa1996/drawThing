import React from 'react';
import { connect } from 'react-redux';

import Modal from './Modal';

import { kickPlayer, hideModal } from '../../../actions';

const KickPlayerModal = ({ player, hideModal, kickPlayer }) => {
	const buttons = [
		{
			btnText: 'Kick',
			btnProps: {
				onClick: () => {
					kickPlayer(player.id).then(() => {
						hideModal();
					});
				}
			}
		},
		{ btnText: 'No', btnProps: { onClick: hideModal } }
	];
	if (!player) return null;
	return (
		<Modal
			title="Kicking player"
			body={`Are you sure you want to kick ${player.username} from room ?`}
			buttons={buttons}
			data={player}
			handleClose={hideModal}
		/>
	);
};

export default connect(
	(state, ownProps) => ({ player: state.room.players.find(p => p.id == ownProps.playerId) }),
	{ hideModal, kickPlayer }
)(KickPlayerModal);
