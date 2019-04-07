import React from 'react';
import { Link } from 'react-router-dom';
import { get as _get } from 'lodash';

const GameToolBar = ({ player, room, game, round }) => {
	return (
		<div className="game-board-toolbar-container container-fluid">
			<div className="game-board-toolbar-container-border">
				<div className="row">
					<div className="col-6 col-sm-4 col-md-4 col-lg-3 d-flex justify-content-between align-items-center">
						<p className="game-board-rounds m-1 text-transform-uppercase">
							ROUND: {round.inProgress() ? `${round.number} of ${game.number_of_rounds}` : ''}
						</p>
						<p
							className={`game-board-clock m-1 d-block ${round.nearEnd() ? 'bounceAnimation' : ''}`}
						>
							<i className="fa fa-clock-o" aria-hidden="true" /> &nbsp;
							{round.getFormattedTimer()}
						</p>
					</div>
					<div className="col-6 col-sm-8 col-md-7 col-lg-8 game-board-guessing-word-container d-flex justify-content-center align-items-center">
						<div className="">
							<p className="game-board-guessing-word mb-0 text-transform-uppercase">
								{round.chosedWordExists()
									? round.chosedWordToArrayOfLetters().map((letter, key) => (
											<span
												key={key}
												className={`game-board-guessing-word-letter ${
													letter.trim() ? '' : 'whitespace'
												}`}
											>
												{round.isPlayerDrawing(player) ? letter : ' '}
											</span>
									  ))
									: round.isPlayerChoosingWord() && (
											<span className="bounceAnimation d-block">
												{_get(round.getDrawer(room.getActivePlayers()), 'username', '')} choosing
												word
											</span>
									  )}
							</p>
						</div>
					</div>
					<div className="col-sm-1 col-md-1 col-lg-1 d-flex justify-content-center align-items-center">
						<Link
							className="basic-link-white text-decoration-none my-transition-elastic"
							to="/play"
						>
							QUIT
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GameToolBar;
