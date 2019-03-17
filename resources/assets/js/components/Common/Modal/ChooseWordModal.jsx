import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from './Modal';

import { chooseWord, hideModal } from '../../../actions';
import { first as _first } from 'lodash';

import Button from '../../Form/Button';

class ChooseWordModal extends Component {
	constructor(props) {
		super(props);
		this.countdownId = null;
		this.state = {
			countdown: 5
		};
	}
	componentDidMount() {
		this.countdownId = setInterval(this.countdown, 1000);
	}

	countdown = () => {
		if (this.state.countdown == 0) {
			clearInterval(this.countdownId);
			this.props.chooseWord(_first(this.props.words_to_choose));
			return this.props.hideModal();
		}

		this.setState(({ countdown }) => ({ countdown: countdown - 1 }));
	};

	chooseWord = wtc => {
		clearInterval(this.countdownId);
		this.props.chooseWord(wtc);
		this.props.hideModal();
	};

	componentWillUnmount() {
		clearInterval(this.countdownId);
	}

	render() {
		const buttons = [];
		const { words_to_choose, hideModal } = this.props;

		return (
			<Modal
				title="Choose word to draw"
				body="Choose one word out of three:"
				buttons={buttons}
				data={words_to_choose}
				handleClose={hideModal}
				shouldCloseOnOverlayClick={false}
				shouldHideCloseButton={true}
			>
				<div className="choose-word-button-group d-flex justify-content-around align-items-center">
					{words_to_choose.map(wtc => (
						<Button
							key={wtc.id}
							onClick={() => this.chooseWord(wtc)}
							type="button"
							className="mybtn2"
						>
							{wtc.word}
						</Button>
					))}
				</div>
				<div className="text-center mt-3">
					<small className="d-block bounceAnimation">
						Automatically choosing word after {this.state.countdown} sec.
					</small>
				</div>
			</Modal>
		);
	}
}

export default connect(
	state => ({ words_to_choose: state.game.words_to_choose }),
	{ hideModal, chooseWord }
)(ChooseWordModal);
