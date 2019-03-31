import React from 'react';
import InfoTooltip from '../../../Common/InfoTooltip/InfoTooltip';
import Dropdown from '../../../Common/Dropdown/Dropdown';

const GameToolBar = ({ player, game, round }) => {
	return (
		<div className="game-board-toolbar-container container-fluid">
			<div className="game-board-toolbar-container-border">
				<div className="row">
					<div className="col-6 col-sm-4 col-md-4 col-lg-3 d-flex justify-content-between align-items-center">
						{!round.inProgress() ? null : (
							<p className="game-board-rounds m-1">
								Round: {round.number} of {game.number_of_rounds}
							</p>
						)}
						{!round.inProgress() ? null : (
							<p
								className={`game-board-clock m-1 d-block ${
									round.nearEnd() ? 'bounceAnimation' : ''
								}`}
							>
								<i className="fa fa-clock-o" aria-hidden="true" /> &nbsp;
								{round.getFormattedTimer()}
							</p>
						)}
					</div>
					<div className="col-6 col-sm-8 col-md-6 col-lg-6 game-board-guessing-word-container d-flex justify-content-center align-items-center">
						<div className="">
							<p className="game-board-guessing-word">
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
											<span className="bounceAnimation d-block">Choosing word...</span>
									  )}
							</p>
						</div>
						<div className="ml-3 d-none">
							<InfoTooltip info="Guessing word" className="m-1">
								<i className="fa fa-question" aria-hidden="true" />
							</InfoTooltip>
						</div>
					</div>
					<div className="game-board-toolbar-menu-container col-xs-12 col-sm-12 col-md-2 col-lg-3 d-none d-md-flex align-items-center">
						<Dropdown
							id="game-board-toolbar-menu"
							actions={[{ to: '/', title: 'Leave room' }]}
							classNameMenu="dropdown-menu-right"
						>
							Menu
						</Dropdown>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GameToolBar;
