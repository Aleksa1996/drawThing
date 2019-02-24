import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../Form/Button';

const PlayUsernameForm = ({
	username,
	focused,
	valid,
	pristine,
	handleChangeUsername,
	handleSubmit,
	handleFocusUsername,
	errors,
	hasRoomUUID
}) => {
	return (
		<div className="game-start-username-form-container">
			<form onSubmit={e => e.preventDefault()}>
				<div className="form-group-wrapper input-material-wrapper">
					<div className="form-group">
						<label
							className={focused || username ? 'input-focused' : ''}
							htmlFor="game_start_username"
						>
							Username
						</label>
						<input
							onFocus={handleFocusUsername}
							onBlur={handleFocusUsername}
							onChange={handleChangeUsername}
							type="text"
							id="game_start_username"
							name="game_start_username"
							className="form-control"
							value={username}
						/>
					</div>

					<div className={`invalid-feedback text-left ${valid || pristine ? '' : 'd-block'}`}>
						<i className="fa fa-exclamation-circle" aria-hidden="true" /> &nbsp; Username must be
						min 3 characters!
					</div>

					<div
						className={`invalid-feedback text-left ${errors.username && valid ? 'd-block' : ''}`}
					>
						<i className="fa fa-exclamation-circle" aria-hidden="true" /> &nbsp;
						{errors.username}
					</div>
				</div>

				<div className="game-start-buttons">
					<Link to="/" className="mybtn2">
						<i className="fa fa-arrow-left mr-2" aria-hidden="true" />
						Go back
					</Link>
					{hasRoomUUID ? (
						<Button
							onClick={handleSubmit}
							type="button"
							name="join_room"
							value="join_room"
							icon="fa-rocket"
							className="mybtn2"
						>
							Join room
						</Button>
					) : (
						<React.Fragment>
							<Button
								onClick={handleSubmit}
								type="button"
								className="mybtn2"
								name="create_room"
								value="create_room"
								icon="fa-users"
							>
								Create room
							</Button>
							<Button
								onClick={handleSubmit}
								type="button"
								className="mybtn2"
								name="random_room"
								value="random_room"
								icon="fa-random"
							>
								Random room
							</Button>
						</React.Fragment>
					)}
				</div>
			</form>
		</div>
	);
};

export default PlayUsernameForm;
