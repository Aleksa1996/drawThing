import React, { Component } from 'react';
import InfoTooltip from '../../../Common/InfoTooltip/InfoTooltip';
import Dropdown from '../../../Common/Dropdown/Dropdown';

class GameToolBar extends Component {
	state = {};
	render() {
		const { game, player } = this.props;
		return (
			<div className="game-board-toolbar-container container-fluid">
				<div className="row">
					<div className="col-md-2 d-flex justify-content-around align-items-center">
						<p className="game-board-rounds m-1">Round: 1 of 3</p>
						<p className="game-board-clock m-1">
							<i className="fa fa-clock-o" aria-hidden="true" /> &nbsp; 2:55
						</p>
					</div>
					<div className="col-md-8 game-board-guessing-word-container d-flex justify-content-center align-items-center">
						<div className="mr-3">
							<p className="game-board-guessing-word">
								{game.chosedWordExists() &&
									game.chosedWordToArrayOfLetters().map((letter, key) => (
										<span key={key} className="game-board-guessing-word-letter">
											{game.isPlayerDrawing(player) ? letter : ' '}
										</span>
									))}
							</p>
						</div>
						<div className="ml-3">
							<InfoTooltip info="Guessing word" className="m-1">
								<i className="fa fa-question" aria-hidden="true" />
							</InfoTooltip>
						</div>
					</div>
					<div className="col-md-2 d-flex justify-content-center align-items-center">
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
		);
	}
}

export default GameToolBar;
