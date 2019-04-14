import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emitRoomFormUpdate } from '../../../actions/';

class RoomForm extends Component {
	state = {};

	handleRoomFormInput = e => {
		const { player, room } = this.props;

		if (room.isPlayerAdmin(player)) {
			const { value, name } = e.target;
			this.props.emitRoomFormUpdate({ [name]: value });
		}
	};

	render() {
		const { player, room } = this.props;
		const isPlayerAdmin = room.isPlayerAdmin(player);
		return (
			<form onSubmit={e => e.preventDefault()}>
				<div className="form-group-wrapper  col-md-12">
					<div className="form-group">
						<label className=" input-filled" htmlFor="number_of_games">
							Number of games
						</label>
						<select
							name="number_of_games"
							id="number_of_games"
							className="form-control"
							value={room.number_of_games}
							onChange={this.handleRoomFormInput}
							disabled={!isPlayerAdmin}
						>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</div>
				</div>

				<div className="form-group-wrapper  col-md-12">
					<div className="form-group">
						<label className=" input-filled" htmlFor="round_length">
							Round length
						</label>
						<input
							type="range"
							name="round_length"
							value={room.round_length}
							id="round_length"
							placeholder=""
							className="custom-range"
							min="20"
							max="70"
							step="5"
							onChange={this.handleRoomFormInput}
							disabled={!isPlayerAdmin}
						/>
					</div>
				</div>
				<div className="col-md-12">
					<div className="row">
						<div className="col-md-6">Games: {room.number_of_games}</div>
						<div className="col-md-6 text-right">Round length: {room.round_length} sec</div>
					</div>
					{/* {error && <small className="text-danger d-block my-3">{error}</small>} */}
				</div>
			</form>
		);
	}
}
export default connect(
	null,
	{ emitRoomFormUpdate }
)(RoomForm);
